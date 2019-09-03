'use strict';

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request === 'getSnippet') {
      sendResponse(getSnippet());
    }
  }
);

function getSnippet () {
  return {
    title: document.title,
    url: document.location.href,
    description: getMetaDescription()
  };
};

function getMetaDescription () {
  var metas = document.getElementsByTagName('meta');
  for (var i in metas) {
    if (typeof (metas[i].name) !== 'undefined' &&
        metas[i].name.toLowerCase() === 'description') {
      return metas[i].content;
    }
  }
  return '';
}
