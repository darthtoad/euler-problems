import { EulerProblemsPage } from './app.po';

describe('euler-problems App', () => {
  let page: EulerProblemsPage;

  beforeEach(() => {
    page = new EulerProblemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
