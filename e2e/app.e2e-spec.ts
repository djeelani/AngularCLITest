import { TestCLIPage } from './app.po';

describe('test-cli App', () => {
  let page: TestCLIPage;

  beforeEach(() => {
    page = new TestCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
