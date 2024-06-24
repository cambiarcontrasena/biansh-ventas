'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ea84b3c331c43c9f9769b814f2fc3820",
"favBiansh.png": "5755ec0772befb530bf42bab0113b94c",
"index.html": "5209aa8a6c8af4d9a45107b6c88c635b",
"/": "5209aa8a6c8af4d9a45107b6c88c635b",
"main.dart.js": "4c519255ccb39a2943bc064c0c7b0d3f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"_redirects": "6a02faf7ea2a9584134ffe15779a0e44",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/config": "eb99fb2ac7ecfd9c64589dd06e9b5c00",
".git/objects/92/5b5cf4259c6d34957b8831f77d161ece26e372": "66bd6d5b7655d5e00c7d8ee1b6799446",
".git/objects/50/a463356b7d89bc7f17cfe56003eab71b56d8ad": "604dcda5259cee556b0d49cccce957ca",
".git/objects/68/da0cb8b07fcd82c642288ef2fdc958c3ddcbc9": "48bd9ab83ee5997086c7773a5d1573a9",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/9b/da6d1c9dbae99e0d0ce2b95d11194706b234e5": "4fca5c855990453998f748031da506b6",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/69/8b1a62dc9d8459eabea0413ce63fbf7e6fd87c": "071f84a49cf7085e84c939952f17a661",
".git/objects/3c/9e9686aaeff7c0bfdcdf404c92db7691858dfa": "28ded6d6bfd0605e767f3a916566f286",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/02/d7c007f475d7130b8a80b7de7e7f90275195e8": "fa23956e2e50dff1eaec5cb7e86d4ff2",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/bb/363b3f50692a70c26c427ae1549daa67154b41": "fb2ad697086ac6e5d79a44ce4b50a17d",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/9f2e634a04bd4e08fecb729a38875833f10bd7": "aa945320729ad47ca9e4be935a8ca4a3",
".git/objects/df/892e80229c1dd283287767183680504e1c51ea": "0531d2d36d7f367caacd7ccb5f034da7",
".git/objects/bc/691059edbc3b9305b13ca38ef79c3c572e9b43": "840e4edc5a7c0c46cbe6be35371a5dba",
".git/objects/c0/ecb96e3808db3b9fd33840fa0a3b7edf7120c8": "10a2d6d3569be896892ac2bed46286e1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/14818c48517a8d24234ce6ca77b275590ddaae": "f0436fe3e969537b38fe67b5677a9080",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/e819f43dc9a6d996b6d81692ed5a6f14f9dadb": "1f351aab0df115078636a12b187e05e1",
".git/objects/11/d6c0caf071e7ba7fece081e842c11ee8e7ae09": "2e81dc0c034201a07037e7d08bbab718",
".git/objects/29/5666d4d1e97114ccdc02d32952bb6e6f10a3d1": "02ee69900cbef4c0728ca1900f5656a3",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/7c8d5abacd87403a6d667b4242b775c36e0ba8": "c0180c1811eabb23088ea7bd9c1648ba",
".git/objects/45/0a40ecef43e1092e06d2459360c983afe178b0": "8b87618df075e2d973532ecd122ecd24",
".git/objects/45/017fe0625d927ce71477b39acdfcb393f8e0fe": "0714dee9e789fb6b72c6558bba91561e",
".git/objects/1f/e76da775de194b614fc4fb00e9f9ef9d5b8a7f": "b39fcf9d255fdb32a4c4505e0d085a94",
".git/objects/87/d26496d7385b3583d7d04d36910f10df410377": "01ef357a72146a74b5ba061118916910",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/43/0bb060a9ce4d32a41eeb856640a621a5a430e8": "1f07d4cbf4fd7b1870ec1b126bd2823b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/91/a397592f903b6a7b9aa787d784a0202198718a": "b964a7d88b4ce090335b4fd4bdb9b1e5",
".git/objects/3a/013828b0a729045c86fc8d89537e7f3e9f3bdb": "46aa475e106b0be0788aeae02e709b06",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/37/254045dfa146391a1ec32c4a54e371cba78815": "34451cccadccdebddee0fb75d0767948",
".git/objects/6c/d9587ba700823b81e7a2fbe1978147adf276ee": "8e7c39af40cd4f93831c2e2434725112",
".git/objects/52/bb6966d7aadfd5f1ebfd79a71a65d49ef53cd8": "3bc2319dee40cfddce807de72fa9a626",
".git/objects/0a/e7eea2040cf88def4a531f7fe55f82a09440fa": "e2a7bb72ec44874b9f7347c47a48cb96",
".git/objects/64/713df03680f5995eb371e716ff5f5efef98560": "e08287abd4210ac36bbc6f6b7304af42",
".git/objects/bf/b666213d6f8a7ee4f8441f02531f6d5f0d3dbe": "0716a18a1a10437e02b38d04ee8510be",
".git/objects/d3/2ab64cf253a64779358c0ff1fd604342993709": "51a30f4d725cda50857af86ba206cba4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/43606f1b36c2dbaa8a6fca4f598eac0a4e4bb6": "7bb7650c56b6905740b5b46f095177cc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/d5/df3218e9d283b56017f5f75cb339fe1b6298c7": "bb41899dbefc386314197ab5fc67b6c6",
".git/objects/af/f4f1479f5c397c5a87d9b25faa22803456d533": "8806201494221f69166f2c5a8c426cfd",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/8a2dab85c9bbec24ba3351b3def565b23bb6cb": "2ad9dc288fa3d6e4c7fb364592814b6d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/fa/ebaa8c34edb43526f50ed87f58617a0ae6cf5d": "aaac76d05e241c5f28ba3d3765c2221a",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/e7/a52dfa9af2d1723f0bdf9944927313ca7943c9": "d22146b0a7b5d4fb5c02f9b9a2c867a0",
".git/objects/2d/5a345d2859a0438b84d550b90629692ae258ba": "0cfc36054766949d10db51084ca57c0a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/1d694da37d6807aaa2c47c792829bc0152b5f2": "574199a2642cae438904b44c606eec7a",
".git/objects/15/d2857d2e77974a745691d5086e74ac4e574154": "8eedf3edb12524cb76c3fe9a11d7b009",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/40/51af16e35559946a9bda4dfc70575c23dababd": "9a62abb50e4cf30fa6a09d5484eda3f0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b68cacef16f9d4ee485f2fc1b5993648",
".git/logs/refs/heads/main": "b68cacef16f9d4ee485f2fc1b5993648",
".git/logs/refs/remotes/origin/main": "317c3a14929501afb40653df2338558a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1f3db572129d86c6434929ac022088bc",
".git/refs/remotes/origin/main": "1f3db572129d86c6434929ac022088bc",
".git/index": "0dd5b048e0cde5ee72d824faa52f42cc",
".git/COMMIT_EDITMSG": "8b0adbfc8445b753224f7f79ddedd622",
"assets/AssetManifest.json": "437f4365b69db602305062d4763d7096",
"assets/NOTICES": "d6cf7719a381358ce50f9aa323fcf303",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "32f90eee492638e0dfc164717c35c85f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f360c434cf257dc6c90e328396ef39be",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6cd0f5aa32c309a39c21a4c19ccaa9f2",
"assets/fonts/MaterialIcons-Regular.otf": "965300ec02d05c11bd35725b8de183a9",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/BLACK_JPEG.jpg": "53f85d613edfd4504dfefac1ab50a921",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"BLACK_JPEG.jpg": "53f85d613edfd4504dfefac1ab50a921",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
