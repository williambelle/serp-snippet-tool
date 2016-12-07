(function() {
  'use strict';

  var should = chai.should();

  describe('utils', function() {
    it('should return a nice title', function() {
      var shortTitle = 'My page title';
      var longTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
        'elit. Proin tincidunt lobortis mauris quis ultricies';

      var expectedLongTitle = 'Lorem ipsum dolor sit amet, consectetur ' +
        'adipiscing elit. Pro ...';

      var expShortTitle = serpSnippetTool.utils.buildTitle(shortTitle);
      expShortTitle.should.equal(shortTitle);

      var expLongTitle = serpSnippetTool.utils.buildTitle(longTitle);
      expLongTitle.should.equal(expectedLongTitle);
    });

    it('should return a nice url', function() {
      var shortUrl = 'https://github.com/williambelle';
      var longUrl = 'https://github.com/williambelle/serp-preview-extension' +
        '/blob/master/src/manifest.firefox.json';

      var expectedLongUrl = 'https://github.com/williambelle/' +
        'serp-preview-extension/blob/master/sr ...';

      var expShortUrl = serpSnippetTool.utils.buildUrl(shortUrl);
      expShortUrl.should.equal(shortUrl);

      var expLongUrl = serpSnippetTool.utils.buildUrl(longUrl);
      expLongUrl.should.equal(expectedLongUrl);
    });

    it('should return the meta description', function() {

      var shortHtml = '<!doctype html><html lang="en"><head>' +
        '<meta charset="utf-8" /><title>SERP Snippet Tool</title>' +
        '<meta name="description" content="Pro Visu is a charitable ' +
        'foundation of public utility in Switzerland, acting for the ' +
        'promotion and prevention of eye diseases from citizens." />' +
        '</head><body></body></html>';

      var expectedDesc = 'Pro Visu is a charitable foundation of public ' +
        'utility in Switzerland, acting for the promotion and prevention of ' +
        'eye diseases from citizens.';

      var htmlObj = serpSnippetTool.utils.buildHtml(shortHtml);
      var expDesc = serpSnippetTool.utils.buildDescription(htmlObj);
      expDesc.should.equal(expectedDesc);

    });

    it('should return the og description', function() {

      var shortHtml = '<!doctype html><html lang="en"><head>' +
        '<meta charset="utf-8" /><title>SERP Snippet Tool</title>' +
        '<meta property="og:description" content="Pro Visu is a charitable ' +
        'foundation of public utility in Switzerland, acting for the ' +
        'promotion and prevention of eye diseases from citizens." />' +
        '</head><body></body></html>';

      var expectedDesc = 'Pro Visu is a charitable foundation of public ' +
        'utility in Switzerland, acting for the promotion and prevention of ' +
        'eye diseases from citizens.';

      var htmlObj = serpSnippetTool.utils.buildHtml(shortHtml);
      var expDesc = serpSnippetTool.utils.buildDescription(htmlObj);
      expDesc.should.equal(expectedDesc);

    });

    it('should return a shorter meta description', function() {

      var shortHtml = '<!doctype html><html lang="en"><head>' +
        '<meta charset="utf-8" /><title>SERP Snippet Tool</title>' +
        '<meta name="description" content="Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Nulla semper ligula pellentesque ' +
        'lectus pellentesque aliquet. Praesent elementum sit amet tellus ' +
        'in dapibus." /></head><body></body></html>';

      var expectedDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
        'elit. Nulla semper ligula pellentesque lectus pellentesque aliquet. ' +
        'Praesent elementum sit amet tellus in ...';

      var htmlObj = serpSnippetTool.utils.buildHtml(shortHtml);
      var expDesc = serpSnippetTool.utils.buildDescription(htmlObj);
      expDesc.should.equal(expectedDesc);

    });
  });
})();
