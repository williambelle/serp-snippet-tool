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
    return serpSnippetTool.utils.shorten(title, 60);
  },

  buildUrl: function (url) {
    if (url.length > 69) {
      url = url.substring(0, 69) + ' ...';
    }
    return url;
  },

  shorten: function (str, maxLen) {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(' ', maxLen)) + ' ...';
  }

};
