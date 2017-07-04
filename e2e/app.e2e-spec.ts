import { Lbng4Page } from './app.po';

describe('lbng4 App', () => {
  let page: Lbng4Page;

  beforeEach(() => {
    page = new Lbng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
