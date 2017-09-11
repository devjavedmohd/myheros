import { MyheroPage } from './app.po';

describe('myhero App', () => {
  let page: MyheroPage;

  beforeEach(() => {
    page = new MyheroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
