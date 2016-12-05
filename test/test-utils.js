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
  });
})();
