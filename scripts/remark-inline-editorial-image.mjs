export function remarkInlineEditorialImage() {
  return (tree, file) => {
    const frontmatter = file.data?.astro?.frontmatter;
    const imageUrl = frontmatter?.inlineImage;

    if (!imageUrl || !Array.isArray(tree.children)) return;

    const requestedPosition = Number(frontmatter.inlineImageAfterParagraph ?? 3);
    const paragraphPosition = Number.isInteger(requestedPosition) && requestedPosition > 0
      ? requestedPosition
      : 3;
    let paragraphsSeen = 0;
    let paragraphIndex = -1;

    for (let index = 0; index < tree.children.length; index += 1) {
      if (tree.children[index].type !== 'paragraph') continue;
      paragraphsSeen += 1;
      if (paragraphsSeen === paragraphPosition) {
        paragraphIndex = index;
        break;
      }
    }

    if (paragraphIndex === -1) return;

    const paragraph = tree.children[paragraphIndex];
    tree.children.splice(paragraphIndex, 1, {
      type: 'blockquote',
      data: {
        hName: 'section',
        hProperties: { className: ['blog-post__inline-section'] },
      },
      children: [
        paragraph,
        {
          type: 'paragraph',
          data: { hProperties: { className: ['blog-post__inline-image'] } },
          children: [{
            type: 'image',
            url: imageUrl,
            alt: frontmatter.inlineImageAlt ?? '',
          }],
        },
      ],
    });
  };
}
