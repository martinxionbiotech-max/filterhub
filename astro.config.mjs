// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

function rehypeKnowledgeMarkup() {
  return (tree) => {
    let ledeAssigned = false;

    const visit = (node) => {
      if (!Array.isArray(node.children)) return;

      for (let index = 0; index < node.children.length; index += 1) {
        const child = node.children[index];

        if (child.type === 'element' && child.tagName === 'p' && !ledeAssigned) {
          child.properties = child.properties ?? {};
          child.properties.className = ['lede'];
          ledeAssigned = true;
        }

        if (child.type === 'element' && child.tagName === 'table') {
          child.properties = {
            ...child.properties,
            className: [...(child.properties?.className ?? []), 'data'],
          };
          visit(child);
          node.children[index] = {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-wrap'] },
            children: [child],
          };
          continue;
        }

        visit(child);
      }
    };

    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://chinafilterhub.com',
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeKnowledgeMarkup],
  },
  integrations: [sitemap()],
});
