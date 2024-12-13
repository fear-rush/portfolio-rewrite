// @ts-nocheck
import { visit } from 'unist-util-visit';

export function rehypeEnhancedImg() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        // Check if the image is in the static directory (starts with '/')
        if (node.properties && typeof node.properties.src === 'string' && node.properties.src.startsWith('/')) {
          // Replace <img> with <enhanced:img>
          node.tagName = 'enhanced:img';

          // Append a query parameter to trigger the enhanced-img processing
          node.properties.src = `${node.properties.src}?enhanced`;
        }
      }
    });
  };
}