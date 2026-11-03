export function remarkInlineEditorialImage() {
  return (tree, file) => {
    const frontmatter = file.data?.astro?.frontmatter;
    const images = frontmatter?.inlineImages ?? (frontmatter?.inlineImage
      ? [{
          src: frontmatter.inlineImage,
          alt: frontmatter.inlineImageAlt,
          afterParagraph: frontmatter.inlineImageAfterParagraph,
        }]
      : []);

    if (!images.length || !Array.isArray(tree.children)) return;

    const paragraphs = tree.children.filter((node) => node.type === 'paragraph');

    for (const image of images) {
      const requestedPosition = Number(image.afterParagraph ?? 3);
      const paragraphPosition = Number.isInteger(requestedPosition) && requestedPosition > 0
        ? requestedPosition
        : 3;
      const targetParagraph = paragraphs[paragraphPosition - 1];
      const paragraphIndex = tree.children.indexOf(targetParagraph);

      if (paragraphIndex === -1) continue;

      const requestedParagraphCount = Number(image.paragraphCount ?? 1);
      const paragraphCount = Number.isInteger(requestedParagraphCount) && requestedParagraphCount > 0
        ? requestedParagraphCount
        : 1;
      const pairedParagraphs = [];

      for (let offset = 0; offset < paragraphCount; offset += 1) {
        const paragraph = tree.children[paragraphIndex + offset];

        if (paragraph?.type !== 'paragraph') break;
        pairedParagraphs.push(paragraph);
      }

      if (pairedParagraphs.length === 0) continue;

      tree.children.splice(paragraphIndex, pairedParagraphs.length, {
        type: 'blockquote',
        data: {
          hName: 'section',
          hProperties: {
            className: ['blog-post__inline-section'],
            style: `--blog-inline-image-rows: ${pairedParagraphs.length};`,
          },
        },
        children: [
          ...pairedParagraphs,
          {
          type: 'paragraph',
          data: { hProperties: { className: ['blog-post__inline-image'] } },
          children: [{
            type: 'image',
            url: image.src,
            alt: image.alt ?? '',
          }],
          },
        ],
      });
    }
  };
}
