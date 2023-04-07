function stripRedirect(URL, redirectRegex) {
  for (var i = 0; i < redirectRegex.length; i++) {
    var rule = redirectRegex[i];
    var result = new RegExp(rule.pattern).exec(URL);

    if (result) {
      var newURL = result.groups.baseUrl;
      try {
        return decodeURIComponent(newURL);
      } catch (e) {
        console.log(e);
        return URL;
      }
    }
  }

  return URL;
}

function stripRedirects() {
  var Links = document.querySelectorAll("a.postlink, a.autolinker_link");

  browser.storage.local.get("rfd-redirects", function (redirectRegex) {
    Links.forEach(function (Link) {
      var ReferralURL = Link.href;

      Link.href = stripRedirect(ReferralURL, redirectRegex["rfd-redirects"]);
    });
  });
}

stripRedirects();
