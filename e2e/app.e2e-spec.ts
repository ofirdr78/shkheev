import { ShkheevPage } from './app.po';

describe('shkheev App', () => {
  let page: ShkheevPage;

  beforeEach(() => {
    page = new ShkheevPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
