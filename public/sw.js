/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/fonts/lato/Lato-Regular.woff","32640cf9b0049dacb9174275ad0a0806"],["/fonts/lato/Lato-Regular.woff2","c864a89d88a8c0c88f445d91e9470bfa"],["/fonts/lato/stylesheet.css","96a45b8bd7babc51ea5b69254053e914"],["/fonts/nunito/Nunito-Regular.woff","cf0ced9aa6c85dc1d98d2537ad3b0b42"],["/fonts/nunito/Nunito-Regular.woff2","e742347f46585e3d4d65b5f6b0b5b0ca"],["/fonts/nunito/stylesheet.css","69c0d9663a96a176ad5c962f050d8153"],["/images/icons/shine_light_transparent_192.png","2871142d55d9778c7221efe6e48b2011"],["/images/icons/shine_light_transparent_48.png","e5a9f85a59f3ab9c6c7c92ecf681b97b"],["/images/icons/shine_light_transparent_96.png","8866adff1241a627d48c71943ec237d8"],["/images/mashup.png","21ac180104f2c3ce538b9f071b5e9887"],["/images/pencil.svg","5253ca4878407739e19811d33348c306"],["/images/project.svg","ae2d5b233a25c553c0ebfcf2b7f07e3c"],["/images/robot.svg","2104b868890d2709205c088d16eb9646"],["/images/shine_logo.png","24f7a9477bb67a817c7cad6fb813ecce"],["/images/sponsors/DTlabz.png","df57ae09ef30554fc849c0974048ff5b"],["/images/sponsors/RDL.jpg","ea703f7d5fe96479b1073d77b5c5ec0c"],["/images/sponsors/aptra.png","64453deef7b943b9975e3f03fd7b3739"],["/images/sponsors/sahyadri.png","92ebfbc7568a0c828c08c59cf3a7bab2"],["/images/team/adithya.jpg","a6f5206dc23f49027c5c9ab0692f57bd"],["/images/team/afroz_hussain.jpg","e98bf0a6c91950479fd1797300cdf817"],["/images/team/akshay_ram_bhat.jpg","b7f8a57934d1cb2cd46abe2880468cfb"],["/images/team/arjun_suvarna.jpg","50dc88a7d9dfab4ab7373c8ef97fd15a"],["/images/team/chaman_k.jpg","71a1ab77ebfa15c3f838abe6d3fcd116"],["/images/team/devansh_n_hingrajia.jpg","854699cf3731c6dc824430c1454ba8f5"],["/images/team/haxzie.jpg","1beaa6c62f39d07eac7c3d3b47c3ca0a"],["/images/team/jehad_mohamed.jpg","dc14e7ac1281ee23f8cf724d30eaafa1"],["/images/team/johnson_tellis.jpg","87c98b477d2e3b603abd853588f9fc12"],["/images/team/kishan_ghetia.jpg","ad03c3b22dd7ba967bf532db0b1ed8aa"],["/images/team/manjesh_p_shetty.jpg","701bec32e095fcd7913f173b12efeb36"],["/images/team/monisha_tarkar.jpg","56a17b6d72142af89203a3f50cf865a5"],["/images/team/nathaniel_ryan_mathew.jpg","2a0e1e222210dc70be9f5ad65106f49b"],["/images/team/navneeth_krishna.jpg","6ba6f7cfee11723c549212d81b6ddcf3"],["/images/team/prakhyath_rai.jpg","422f8ed97f6f98e5582607c5673adb71"],["/images/team/ramya.jpg","0e53df2caa58694adf237ccaaeac9f1b"],["/images/team/riya_batra.jpg","f6730d5c12f2c347508e902e615cd75b"],["/images/team/shashank.jpg","3f88b4b86cee663cddd234272ad59944"],["/images/team/shravan.jpg","76b1f3e77d4d0a99710d416ba54e059b"],["/images/team/srujan_u.jpg","63e1624b91ca0c3bb8c19272fcaf301b"],["/javascripts/bin/lazyload.min.js","e2d10b461991a01029dfa0862e069bf0"],["/javascripts/bin/materialize.min.js","43d20000f551bd39ebdaa8fa3695628a"],["/manifest.json","231f5b1ea2c6f435484b6c2efe321e75"],["/stylesheets/ie.css","9496473067040385831bb6cccbd68627"],["/stylesheets/materialize.css","2a4e84cc45ab6b4429d80bcf016daf60"],["/stylesheets/print.css","4583ffae7a2f26754f6b3d0f10655e8b"],["/stylesheets/screen.css","5b859322de762b033497118825f608d8"],["/stylesheets/styles.css","9b406c6512d0cdef12ae32ba4152ea19"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







