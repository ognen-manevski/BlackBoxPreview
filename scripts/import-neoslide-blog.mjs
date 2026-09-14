import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import sharp from 'sharp';

const sourceRoot = resolve(process.argv[2] ?? '');
const outputRoot = resolve('src/content/blog');
const datasetPath = join(sourceRoot, 'src/data/neoslide-blog.ts');
const sourceImages = join(sourceRoot, 'src');
const legacyPublishedAt = '2026-08-11';

function repairEncoding(value) {
  if (typeof value !== 'string' || !/[ÃÐÑâ]/.test(value)) return value;
  return Buffer.from(value, 'latin1').toString('utf8');
}

function yamlString(value) {
  return JSON.stringify(repairEncoding(value));
}

function markdownText(value) {
  return repairEncoding(value).replace(/\\/g, '\\\\');
}

function renderBlock(block) {
  if (block.type === 'heading') return `${'#'.repeat(Math.max(2, block.level))} ${markdownText(block.text)}`;
  if (block.type === 'paragraph') return markdownText(block.text);
  if (block.type === 'blockquote') return markdownText(block.text).split('\n').map((line) => `> ${line}`).join('\n');
  if (block.type === 'divider') return '---';
  if (block.type === 'list') {
    return block.items.map((item, index) => `${block.ordered ? `${index + 1}.` : '-'} ${markdownText(item)}`).join('\n');
  }
  return '';
}

function renderPost(post, translationKey) {
  const tags = ['Digital Signage', 'NeoSlide'];
  const frontmatter = [
    '---',
    `title: ${yamlString(post.title)}`,
    `description: ${yamlString(post.excerpt)}`,
    'cover: "./cover.webp"',
    `coverAlt: ${yamlString(`${repairEncoding(post.title)} — NeoSlide digital signage`)}`,
    'tags:',
    ...tags.map((tag) => `  - ${yamlString(tag)}`),
    `publishedAt: ${legacyPublishedAt}`,
    `lang: ${post.language}`,
    `translationKey: ${translationKey}`,
    'draft: false',
    `sourceUrl: ${yamlString(post.url)}`,
    '---',
  ];
  return `${frontmatter.join('\n')}\n\n${post.content.map(renderBlock).filter(Boolean).join('\n\n')}\n`;
}

const source = await readFile(datasetPath, 'utf8');
const json = source.match(/export const neoslideBlog = ([\s\S]*?) as const;/)?.[1];
if (!json) throw new Error(`Could not read dataset from ${datasetPath}`);
const rows = JSON.parse(json);

for (const row of rows) {
  const postDir = join(outputRoot, row.id);
  await mkdir(postDir, { recursive: true });

  const imageName = basename(new URL((row.en ?? row.mk).originalImage).pathname);
  await sharp(join(sourceImages, imageName))
    .resize({ width: 1800, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(join(postDir, 'cover.webp'));

  for (const language of ['en', 'mk']) {
    const post = row[language];
    if (!post) continue;
    await writeFile(join(postDir, `${language}.md`), renderPost(post, row.id), 'utf8');
  }
}

console.log(`Imported ${rows.length} bilingual NeoSlide posts (${rows.length * 2} entries) into ${outputRoot}`);
