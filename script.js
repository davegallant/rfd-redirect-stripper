// ==UserScript==
// @name         RedFlagDeals Redirect Stripper
// @author       Dave Gallant
// @description  Strip redirect links on forums.redflagdeals.com
// @downloadURL  https://raw.githubusercontent.com/davegallant/rfd-redirect-stripper/main/script.js
// @grant        none
// @match        *://forums.redflagdeals.com/*
// @namespace    http://tampermonkey.net/
// @updateURL    https://raw.githubusercontent.com/davegallant/rfd-redirect-stripper/main/script.js
// @version      0.0.1
// ==/UserScript==

(function() {
    'use strict';

    var Links = document.querySelectorAll('a.postlink, a.autolinker_link');

    const REDIRECT_REGEX = [
      {
        name: 'Amazon',
        pattern: 'www.amazon.ca/gp/redirect.html\\?ie=UTF8&location=(?<baseUrl>.*?)(&|ref%3D|%3F)',
      },
      {
        name: 'Best Buy',
        pattern: 'bestbuyca.(.*).net(.*)\\?u=(?<baseUrl>.*)',
      },
      {
        name: 'Samsung',
        pattern: 'www.awin1.com(.*)\?p=(?<baseUrl>.*)',
      },
      {
        name: 'redirectingat.com',
        pattern: 'go.redirectingat.com/.*url=(?<baseUrl>.*).*',
      },
      {
        name: 'homedepot',
        pattern: 'the-home-depot-ca.pxf.io(.*)\?u=(?<baseUrl>.*)',
      },
      {
        name: 'redirectingat',
        pattern: 'go.redirectingat.com(.*)\?url=(?<baseUrl>.*)',
      },
      {
        name: 'adidas-canada',
        pattern: 'adidas-canada.sjv.io(.*)\?u=(?<baseUrl>.*)',
      },
      {
        name: 'canadiantire',
        pattern: 'imp.i([0-9]*).net(.*)\?u=(?<baseUrl>.*)',
      },
      {
        name: 'underarmour',
        pattern: 'www.awin1.com(.*)\?ued=(?<baseUrl>.*)',
      },
      {
        name: 'lenovo',
        pattern: '(.*).evyy.net(.*)\?u=(?<baseUrl>.*)',
      },
      {
        name: 'thesource',
        pattern: 'www.kqzyfj.com(.*)\?url=(?<baseUrl>.*)',
      },
      {
        name: 'walmart',
        pattern: 'click.linksynergy.com(.*)\?murl=(?<baseUrl>.*)&u1=.*',
      },
    ];

    var StripRedirect = function(URL) {
       for (var i = 0; i < REDIRECT_REGEX.length; i++) {
         var rule = REDIRECT_REGEX[i];
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
    };

    Links.forEach(function(Link) {
        var ReferralURL = Link.href;
        Link.href = StripRedirect(ReferralURL);
    });

})();
