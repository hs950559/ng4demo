import { MyprojPage } from './app.po';

describe('myproj App', () => {
  let page: MyprojPage;

  beforeEach(() => {
    page = new MyprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
