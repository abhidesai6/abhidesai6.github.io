'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0daf79671e01b6ef22bf498e444fe360",
".git/config": "0db190b2cad81ed88556877bf0e20744",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "a18d2915a247dd983db2cd35455238f7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3565723f5a266da8ca050c3bc8f24bd3",
".git/logs/refs/heads/master": "3565723f5a266da8ca050c3bc8f24bd3",
".git/logs/refs/remotes/origin/master": "0d62ea51ddb48d0c04611b8c399728e6",
".git/objects/05/d1d9f7d5c982bc3ea2a10bb57b761bce147e8e": "968ff87cac0c13eb2c8dd24cdc3f0bc9",
".git/objects/08/489c604d1573d3c31fb1ae89d201b2f4c14670": "def97de4983385f9e95747598500b648",
".git/objects/0b/e30335d2c07ca25af0017c5cf990a4d30b9917": "f5c3b7cff1a6da36f16ccc319da76143",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/10/a2c6ad0146c8582e9cb8e258a4623462ce3733": "c892377c42f541b439fc79be195891bb",
".git/objects/13/5bec320c7ff64fefc744b5212fc18fa5c88a53": "0b3d4e7b1d140e546b8db175143faba9",
".git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2c/fbe11f06f6f462d2787dca5ab65f28d1f9f539": "b84add53f412500c952e51da547be1fa",
".git/objects/2e/a035cae159bdf0208b25a9d054c80d69243bc0": "6790d5d283671bd60dd1222bb01b0e45",
".git/objects/33/d29274a701c6cfaf0a0a0649a7ed901b882a26": "d4ee8b72cdfcd4d0b0bc0d17024a9f23",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3a/b92738f763b9fee21e61618b80f82d138229d9": "6d9e550b1f3376ff1347fa17ba677d4d",
".git/objects/44/559f47d5cb7541e759fa57031a9983457dc7aa": "dca13f587d40cbc03fce843bcc74033b",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4b/5543e1118f137d69d0088a45f88aaba646ce2a": "0cac44cfbfdababaa4ed8c4e23386f5d",
".git/objects/54/12b256e81d0027cd4ba96ea262d0671bfda051": "b743b96a16821f21d9d4fc1165a5a42c",
".git/objects/56/8a5cbc15d0b88a0122fbb4e11936a0f9a3c694": "5cb22eae6462bcfbdfac4255d6c50391",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/68/c3e69c89a116adac5035b7bad08ef8f693c134": "b032ce762882fb977525314e048dd7df",
".git/objects/6a/00dcae932dadf0b7fdb691195e3d9ba86f217b": "b7084cc4cbfac98fb9054dbee1c9c5c2",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6f/a59a7c2577e3cdabd1783f0e9e86827e56cfc2": "84ec487931329ad2825ab686ac335328",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/70/b17fe763c9a486f8d9e46958b48b7fc4abe605": "8d8ce8407d7b7ffec8304da6f947e653",
".git/objects/72/75d1acbe079f00782e8e0b47682ee7b1a030f2": "0c6b40c05c833d47c9978289a9054238",
".git/objects/72/c65b264d8cb628f08b3647868e253d8aeedf46": "8d74248b9aec1685e1afaf8d0b631d56",
".git/objects/77/4df5c7e8a0f125c9f7c4196a6e1764ae1c78cc": "3a083e65beb5d4ad7453099b4cfd50d9",
".git/objects/7c/378f3959678c9f55f7382d6106ac65c7588c0c": "2a82daa7e139413dbb181008e86933f8",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/d012f0de7a5fa26d42269cc166e58258630387": "3e3d2df32d12581959001ec3fd2e780a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/8addaa1f674f5aff57b7d0018f488d394fae86": "00b84325c84e78a3a30c75c7cb9c35c6",
".git/objects/92/2092424949f72be897bd37a63e782c22c1987c": "a650c7d487b7b01aa96f16fc3e05d433",
".git/objects/94/7afdaec0a1d4384e87d32f99bef87b7fe571d7": "63ae4243eb8421934ec4d411df23ce27",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9c/f103a3389705d3ac01741f144e55fa07182651": "5952fb17e1f6e96b1ab0a931500c0c15",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a6/4475b0e21ad79fbe52b6f53ccb3699be76e3ee": "a7c5f2bf071a8dadec8b28d58b38bfb5",
".git/objects/a6/5eb288f0775f6e58cc4976816eb73e36ef0f1c": "7256a30a94eb4b7fd4f9b4d174759897",
".git/objects/a9/150504e416c80e17dd50cb60002aabaeaac96e": "b96a51f7a643bfdd287eea944af73957",
".git/objects/af/49a09414169e74e8541e3e7ea0ee7b025a77c6": "79bf51dee0ad6fb3cf588b3459faf122",
".git/objects/b6/96eba667b1c698b7e3e25e267e640e7a369250": "c4a5f573eb0b84b7860172f1b01fb0b0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/d983e9d45043e0b25cb2be18a57df7c28222dc": "1bb610d6d2db045f8da9b983c4b94e75",
".git/objects/be/8c4b92853f0ebde6166d4aa5aaf2309d5dfd89": "fcba0ddec2b1637fac179c5c86059d73",
".git/objects/c6/a398e9fb669130cb13f7ef3ffa1dde387924c5": "e7b717bdd7ab32aeb47750ab4f391b56",
".git/objects/c7/108ab320c4d7d764807afb906157de21c73353": "4add0b437a637833a7c1b448b0b643e4",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/ca/f1394e73b45fe853a73b5a66806a3b104a46db": "c369768b41daa2c0736f09e4f08a6cc3",
".git/objects/ce/6af7ff72b873427cd288f167caa82e5c63e46a": "4a40378b03dae261fee4200502a0d646",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d2/9d255fe40c1cda99acb730f9047bb9dd478bd7": "f771e70a2328e6bd5cc17743b046eecb",
".git/objects/d3/071516fe9fa4fac1f105e1ebe8347085eb2fda": "0ce7f244f211b7c8820049a4f67cc3a9",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e7/fab92bfcfc287d66865b2ca71d41b982cafd4e": "f2bc473c9ca2cdcd1ef75dadce7555f5",
".git/objects/f3/7e8db186d6b1007e08cc02ec673e9baadc72e1": "00c9ade7f5c39ce2a725660861757638",
".git/objects/f4/8c7025d13598193c40c597107b657743a1f123": "103778c166a1267e6a660577ba6efc34",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/ff/acb949663855837828edfdd96a37963979325b": "d2a038c8a4a9290b74bf502771f5e599",
".git/refs/heads/master": "432c95cca7adde71d8ad6fda9ca85ede",
".git/refs/remotes/origin/master": "432c95cca7adde71d8ad6fda9ca85ede",
"assets/AssetManifest.json": "51f700aa450b698ddf4a7f9db1247e76",
"assets/assets/profile.png": "199ca709c44182e91a0a7233c45c9c9b",
"assets/FontManifest.json": "94a2494f1e7ff74a7d0b6cf4f3d4e39d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "0fa3477d89985c005d09f6683bd84db9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/profile.png": "199ca709c44182e91a0a7233c45c9c9b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2def70cdfb9efbc99017bc85e0c5e804",
"/": "2def70cdfb9efbc99017bc85e0c5e804",
"main.dart.js": "e497525c50d39f0de1b1346bc54ffd16",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
