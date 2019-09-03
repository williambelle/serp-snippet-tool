'use strict';

var serpSnippetTool = {};

serpSnippetTool.utils = {

  buildHtml: function (htmlString) {
    var htmlObj = $('<div></div>');
    htmlObj.html(htmlString.match(/<head[^>]*>[\s\S]*<\/head>/gi));
    return htmlObj;
  },

  buildDescription: function (description) {
    if (description.length > 156) {
      description = description.substring(0, 156) + ' ...';
    }
    return description.trim();
  },

  buildTitle: function (title) {
    if (title.length > 60) {
      title = title.substring(0, 60) + ' ...';
    }
    return title.trim();
  },

  buildUrl: function (url) {
    if (url.length > 69) {
      url = url.substring(0, 69) + ' ...';
    }
    return url;
  }

};
