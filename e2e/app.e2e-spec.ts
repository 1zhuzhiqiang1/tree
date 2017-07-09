import { PrimePage } from './app.po';

describe('prime App', () => {
  let page: PrimePage;

  beforeEach(() => {
    page = new PrimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
