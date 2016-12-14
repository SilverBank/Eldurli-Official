import { EldurliPage } from './app.po';

describe('eldurli App', function() {
  let page: EldurliPage;

  beforeEach(() => {
    page = new EldurliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
