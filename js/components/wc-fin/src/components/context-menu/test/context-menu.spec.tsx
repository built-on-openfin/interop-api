import { newSpecPage } from '@stencil/core/testing';
import { ContextMenu } from '../context-menu';

describe('context-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContextMenu],
      html: `<context-menu></context-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <context-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </context-menu>
    `);
  });
});
