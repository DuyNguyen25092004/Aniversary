'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "4af0b996a97d8ec31f8ffdebd40ffb08",
"/": "4af0b996a97d8ec31f8ffdebd40ffb08",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/fonts/MaterialIcons-Regular.otf": "56153fdc7b7445ac8f7ca2bd47c5e35a",
"assets/assets/captions.json": "cfe60df78c304279005a85a095168484",
"assets/assets/images/photo15.jpg": "5bb5ca1511318993da9540f8197b100c",
"assets/assets/images/photo5.jpg": "4f949dbbd21d10a1401ecddaa3b321bd",
"assets/assets/images/photo12.jpg": "7fb300d84c7feee1d2d16efeef781937",
"assets/assets/images/photo9.jpg": "d55356c254164254de66f5e08f2cf3a2",
"assets/assets/images/photo11.jpg": "ea92b7b3a07487095bbcd751144297d1",
"assets/assets/images/photo3.jpg": "d0112cded87b7bd2043a3c24c8edc2d5",
"assets/assets/images/photo13.jpg": "c90ec7c97215e5b538a2d516c2655c15",
"assets/assets/images/photo1.jpg": "2c1a6ac11b032e4b133a1ee3c2931f68",
"assets/assets/images/photo6.jpg": "3b8b6039824546bfde1ccdfc56c90d33",
"assets/assets/images/photo2.jpg": "2c0aaedb675c178047dc7738af5b3b0f",
"assets/assets/images/photo4.jpg": "0bff640f923e7984a3c014c77e7e98ad",
"assets/assets/images/photo17.jpg": "608967d7483147c7817d2747596382eb",
"assets/assets/images/photo7.jpg": "c8bdc7f1090628108b62ab46b2915ecb",
"assets/assets/images/photo14.jpg": "7a75c8224483aff89366cf4a695f8100",
"assets/assets/images/photo16.jpg": "ed6d24b43f823fb6381200b1b2257f4d",
"assets/assets/images/photo8.jpg": "c99cdd5821bf4a720c23f54f7cd8fe11",
"assets/assets/images/photo10.jpg": "3aec1dedee118059d2bc6491e8c00463",
"assets/assets/music.mp3": "74c9256b7f49b0a3e632190be341e681",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "6dc4d4d9f11240eb6e0a112a5491da71",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.json": "693b1f02e3a183040ec351ed6bcb974b",
"assets/AssetManifest.bin": "1208cefefc7b4f04cba291e0e8233dc4",
"assets/NOTICES": "46641831060e77f024cc579502adcd53",
"manifest.json": "c472efb0913ffa3354d8ded5401cafeb",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"flutter_bootstrap.js": "021add4034fbe08c3c6d3afe0967c4db",
"version.json": "23d80a0fa83f47bf66bb5e5de88aa95b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "470c76dbafd62bbff1d4a3c4727d4b0d",
".git/logs/refs/heads/gh-pages": "55d5bddba112081a10a6605d241148a7",
".git/logs/refs/remotes/origin/gh-pages": "47994b74440e7730cf3a375c59469333",
".git/config": "cbbfb9a30084613032b38bd34da63bd8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/80/d30495f9693923611b9140deb04bf7e6dc6e73": "193ecffef84235856e98ed75585a5aeb",
".git/objects/19/ae3924869cda5dfd6a1f67ea03b741705dfe26": "8ed89ba1500246961968acf826fcb508",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/6c/0a60dee561f45c8d7637ea04e3458dce88cadc": "6e8312fd5c5e74dee590371be2345d55",
".git/objects/13/c0038422cea8565076498eab42c9966c0426ef": "974886ad6fceed4095bf238af82c2784",
".git/objects/ec/6b137a9293f8a60835ddde5cf68af94a95d14b": "d3d744d77859c512a0c24ada428c2e45",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/97/a6005891e1a730b460cdd668e2ad21df933e84": "7aa51581b2c6727d25372cdf2914ec10",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/6a/24e79d5f56f3dcfeefe563c6f21397d156b7f4": "a59e2d781d300bd7a267f511d78e6cfc",
".git/objects/a2/37cacff6c2b862218496db66c86e9ee70ed57c": "d400e5885b83075c0ea996d89521a212",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/40/ad2806f2d077386448bc0e9df2e12a85269f72": "7970b1c865ba35d8983624dd466cf8d9",
".git/objects/36/475f4e9973c2bb42c572cfa1232776dcc20d6e": "0b8afffe81fad5cb399ec6a7f2a7c0bb",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/66c364e32c10a8e8ed31253c006710bcf1dfb1": "0203728981d471bcc9d148babce89c43",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/2f/d232b7b31aa7a50299e064ebbd45874d9dc0e2": "3074a283733cfd3329bb78b37432907c",
".git/objects/00/c161a86731d0ac0012484d530b457d9f1dfb7a": "aa62b71c9b86963b5244041f20319a21",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/39/15b3c86d7e8067335e6a2083be4e8db7712143": "6eded2248cc5aa40def22fdcb2836492",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/12/da0516c104135eb31180816bfc9df3189bedb0": "b920b22d9384df114e020897567469cf",
".git/objects/4e/dfe030b240b8f66ef2de57e7b9847a8bdc1330": "a11f4cc48558894b4d0979da1ecc578c",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/49/f4f58a696255dc024f8a5fc40b8350157eea7f": "fa75706f1f5d594e204c34d1beed3cb4",
".git/objects/61/9e8e6a48b227ff96a20011d57aca4a673d2e46": "1559b970c5a3ba21612165dec0134948",
".git/objects/46/2a2f4489848a30af350ea64c8b0981e76fa9ab": "62e1a516eeb51f41e463b1cb4fa10931",
".git/objects/1e/e2f9239e56c7be3d6075ba579e718236de7044": "e6de76571c2d4fd90c9462a1676053b0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/12b28144fd33ee0308e251c1994abcaacd6a89": "4cd1fdad61dec74a29850172c5c8be76",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/52/1bde36dd8cecc690fb711a73b29159a85c7588": "54aca0202947266207490f9e817d91e2",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/a0/0950b99948e95b5faf69f75e214e42ed88a1d1": "dda148d986510a50aac584076c9391b2",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/67/ceed60332c043421845c9143dbc4ed06d3a7cf": "85f658b15a4bbffcee5367f24b8f157a",
".git/objects/bf/0936931e14ba33ce0af24772dafca1fbf7e90e": "593a082d52a68712b7903f9fa70b0cc8",
".git/objects/9b/0c6005809f20b97c6d34d41db753825476658f": "49d3976bc2769e3ccb6134cc1e0af78c",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/25a3741d765d52ec4cf6e59779c45bcf2d3136": "401c62b9aa8d6d5d44e3459779a38221",
".git/objects/11/7e417b2a47966e9fd2b0696361cedc15351ff3": "b59ca926296f69c5c1c0f214d0ce3c66",
".git/objects/ba/854f300fc3ec25c32254c5a4057120305c78ab": "df0803d447643fb7f16e1a8cf9ffab27",
".git/objects/5f/e9e13eb9ebf6c49a38240a1b2e413454301a60": "f89ba656c8677dfe9b3607134fb9885f",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/82/aeee08ef3651ebc31dcc615dd6a290ea9ed6fe": "3a3326a8407632094b6996b35bff5146",
".git/objects/70/4af8abfebc1bc5e52d016f714bf170d9c32b9c": "7db41ee60b47c723e58016f446fff503",
".git/objects/ae/9c2e8529000ec8048f0b33fc65c460a1324085": "9e86f8f694058abed410038df8ad30d0",
".git/objects/ae/bfd5ee88a69d5e4ca5b8eb8182bd05c3ad7b1a": "c67a78ddf89336bda13e12131444e88a",
".git/objects/be/068597d33b1921efce310891d0cbae4a943cdf": "770fea5abd75a945b063a27ae9d72978",
".git/objects/be/10a1552c42d8e02e51dd9cb789b912c8c79266": "f0af7a1702885e39c9a9f4c3ff4a775f",
".git/objects/59/03a38fe899a242aa52de8bb86c074e0be29e44": "ef4ba1882d5f9b55fce6657b07239405",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/COMMIT_EDITMSG": "3d5ffec6a8662c1a2637be9cc3c048b7",
".git/index": "235308738e853c46fd8af0174634c9b8",
".git/refs/heads/gh-pages": "1e096079f7cf5938f0edab8f281afd69",
".git/refs/remotes/origin/gh-pages": "1e096079f7cf5938f0edab8f281afd69",
"main.dart.js": "ce0ac06c895417850e6a56646460092d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
