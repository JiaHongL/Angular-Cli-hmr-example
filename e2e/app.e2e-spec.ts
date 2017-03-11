import { NgHmrExamplePage } from './app.po';

describe('ng-hmr-example App', () => {
  let page: NgHmrExamplePage;

  beforeEach(() => {
    page = new NgHmrExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
