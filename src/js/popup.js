'use strict';

$(document).ready(function () {
  retrieveData();
});

function retrieveData () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    if (typeof tab[0] === 'undefined') {
      setTimeout(retrieveData(), 1000);
    } else {
      if (tab[0].url.substring(0, 6) !== 'chrome') {
        chrome.tabs.sendMessage(tab[0].id, 'getHTML', function (data) {
          if (typeof tab[0] === 'undefined') {
            setTimeout(retrieveData(), 1000);
          } else {
            processHtml(data, tab[0]);
          }
        });
      }
    }
  });
}

function processHtml (data, tab) {
  var htmlObj = serpSnippetTool.utils.buildHtml(data);
  var serp = {
    title: serpSnippetTool.utils.buildTitle(tab.title),
    url: serpSnippetTool.utils.buildUrl(tab.url),
    description: serpSnippetTool.utils.buildDescription(htmlObj)
  };
  updatePopup(serp);
}

function updatePopup (serp) {
  $('#title').text(serp.title);
  $('#url').text(serp.url);
  $('#description').text(serp.description);
}
