import { newE2EPage } from '@stencil/core/testing';

describe('context-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<context-menu></context-menu>');

    const element = await page.find('context-menu');
    expect(element).toHaveClass('hydrated');
  });
});
