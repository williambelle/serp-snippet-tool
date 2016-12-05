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
        'serp-preview-extension/blob/ ...';

      var expShortUrl = serpSnippetTool.utils.buildUrl(shortUrl);
      expShortUrl.should.equal(shortUrl);

      var expLongUrl = serpSnippetTool.utils.buildTitle(longUrl);
      expLongUrl.should.equal(expectedLongUrl);
    });
  });
})();
