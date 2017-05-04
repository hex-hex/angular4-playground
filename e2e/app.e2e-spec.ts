import { MySecondNgPage } from './app.po';

describe('my-second-ng App', () => {
  let page: MySecondNgPage;

  beforeEach(() => {
    page = new MySecondNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
