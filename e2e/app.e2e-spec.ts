import { FeatureToggleUiPage } from './app.po';

describe('feature-toggle-ui App', function() {
  let page: FeatureToggleUiPage;

  beforeEach(() => {
    page = new FeatureToggleUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
