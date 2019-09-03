'use strict';

(function () {
  chai.should();

  describe('utils', function () {
    it('should return a nice title', function () {
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

    it('should return a nice url', function () {
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

    it('should return a shorter meta description', function () {
      var longDesc = 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Nulla semper ligula pellentesque ' +
        'lectus pellentesque aliquet. Praesent elementum sit amet tellus ' +
        'in dapibus.';

      var expectedDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
        'elit. Nulla semper ligula pellentesque lectus pellentesque aliquet. ' +
        'Praesent elementum sit amet tellus in ...';

      var expDesc = serpSnippetTool.utils.buildDescription(longDesc);
      expDesc.should.equal(expectedDesc);
    });
  });
})();
