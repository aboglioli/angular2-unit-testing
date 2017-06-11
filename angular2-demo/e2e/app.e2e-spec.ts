import { Angular2DemoPage } from './app.po';

describe('angular2-demo App', () => {
  let page: Angular2DemoPage;

  beforeEach(() => {
    page = new Angular2DemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
