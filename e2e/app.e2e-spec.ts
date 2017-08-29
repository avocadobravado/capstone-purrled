import { PurrledPage } from './app.po';

describe('purrled App', () => {
  let page: PurrledPage;

  beforeEach(() => {
    page = new PurrledPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
