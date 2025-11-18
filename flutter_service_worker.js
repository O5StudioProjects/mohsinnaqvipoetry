'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "120a884bda39707511549da8e88c80fa",
"assets/AssetManifest.bin.json": "d0e7e7b65b8b3048eb6a775840a88332",
"assets/AssetManifest.json": "0c25ec8fba004d4a4a1cc6b6a5ce603a",
"assets/assets/common/animations/anim_downloading_dark.json": "8a13a1bb351af02fcc67bc751199e54f",
"assets/assets/common/animations/anim_downloading_light.json": "24859368c252bcef42782af9e5684833",
"assets/assets/common/animations/anim_empty.json": "cdc424128f92a8e3af89ab6242baa382",
"assets/assets/common/animations/anim_loading.json": "66fbe8d7647f02f442120010e3077f90",
"assets/assets/common/animations/anim_no_internet.json": "ab1ab14dc7169f11392bedba2243f38f",
"assets/assets/common/icons/ic_add_block.png": "6a99f5bc0319cf4c682394b0b8beec0b",
"assets/assets/common/icons/ic_admins.png": "3404af44efdde05f823b5cb040fbfe33",
"assets/assets/common/icons/ic_arrow_left.svg": "5ad34f380f4e0e65d8d29a629f787534",
"assets/assets/common/icons/ic_arrow_left_small.svg": "93334008fe86d065dd57bbc93b362347",
"assets/assets/common/icons/ic_arrow_right.svg": "a8bc7f1273f64112bda966a04b54527d",
"assets/assets/common/icons/ic_arrow_right_small.svg": "c8ab24d285d0417ad52212e557ba44a8",
"assets/assets/common/icons/ic_audio_gallery.svg": "928e015a79e02ed4782ed01580cc53da",
"assets/assets/common/icons/ic_audio_item.png": "07a12c0f95ad02ce7cd76c66446f099b",
"assets/assets/common/icons/ic_check_update.png": "4ab2f34ef9709bccdfed054d6ddd157e",
"assets/assets/common/icons/ic_copy.svg": "0ff2e6fe47b582c8f5de71835556c09a",
"assets/assets/common/icons/ic_delete.png": "eb8684228e581738cb7640b0e89502c2",
"assets/assets/common/icons/ic_download.svg": "6195ca432c4f764d6849fd97d2361762",
"assets/assets/common/icons/ic_download_fill.svg": "72640492a377693cd1d323ceffc03b8e",
"assets/assets/common/icons/ic_email.png": "46c64308a7986469ed799277497c9f81",
"assets/assets/common/icons/ic_empty_image_placeholder.png": "6efb8f39993cc5fc0f60a9369e3bb206",
"assets/assets/common/icons/ic_favorite.svg": "94a91fa47d3af1f4ee34893b6b8dbfbc",
"assets/assets/common/icons/ic_favorite_fill.svg": "656fc00724ddc548893256aef70afc41",
"assets/assets/common/icons/ic_font_size.png": "1fdded402cd08649f3c61548457668c9",
"assets/assets/common/icons/ic_home.svg": "f31fcee9cc6813210d07847ab1d4d714",
"assets/assets/common/icons/ic_home_fill.svg": "feb4719adb96b9bdbec9b844109ffbfb",
"assets/assets/common/icons/ic_in_app_purchase.png": "ed0891b2c1186aabef870eeb9a2d40f8",
"assets/assets/common/icons/ic_legal.png": "4be41973709f93315b8a3d252632a0bf",
"assets/assets/common/icons/ic_logo_o5studio.png": "7245e91bd1ed9f58d22d9203ad5bf701",
"assets/assets/common/icons/ic_lughat_icon.png": "bf2cbcd666b215c7635c0f00e97fd3f6",
"assets/assets/common/icons/ic_notification.svg": "9681925e6eb7049bc6762d717a0196a1",
"assets/assets/common/icons/ic_no_audio.png": "ffa71f8714da17f37d01fde3791c015b",
"assets/assets/common/icons/ic_no_photo.png": "66dbab7ae3046df3e103c79d5bc5d735",
"assets/assets/common/icons/ic_no_video.png": "0c4243640f5c55891ed6965d01a7a72f",
"assets/assets/common/icons/ic_photo_gallery.svg": "3a45b9db70b61b13b51965ed630e2a7c",
"assets/assets/common/icons/ic_premium.png": "e1c872bd88f0b99b7f0f25a632996dd8",
"assets/assets/common/icons/ic_profile.svg": "b2a3481ca645ed0545ac609be39ce661",
"assets/assets/common/icons/ic_profile_fill.svg": "beed8ca416c3a59e8df07cc6b8232ccd",
"assets/assets/common/icons/ic_radio_button.svg": "bced4565975c7b95ce065d789fafb9b9",
"assets/assets/common/icons/ic_radio_button_selected.svg": "384591e67929ecf3cfee2bab8bff51b1",
"assets/assets/common/icons/ic_search.svg": "bd261f478cadfcc61a389aeee0870c32",
"assets/assets/common/icons/ic_share.svg": "4dedf69a28f4ec555dbc53da6d5eaeef",
"assets/assets/common/icons/ic_social_facebook.svg": "4b81e613a502c046e5100bd1da5f27c2",
"assets/assets/common/icons/ic_social_instagram.svg": "4cc9143846ce3b342d42da047020b5a8",
"assets/assets/common/icons/ic_social_twitter.svg": "d303463ceed9081d0cd427ee3a60b376",
"assets/assets/common/icons/ic_social_whatsapp.svg": "6b4eb7896aaa202765b37c6fe9afc2e8",
"assets/assets/common/icons/ic_star.svg": "4d59414a4f64e8b722831cf130caeb8c",
"assets/assets/common/icons/ic_text_align.png": "9b2b52b623afb7278a36b9cba4aaff92",
"assets/assets/common/icons/ic_video_gallery.svg": "1b4558f450ceabdda6d555e7a3860408",
"assets/assets/common/icons/ic_whatsapp_group.png": "99c783b1e243e20043d301a4f13ef156",
"assets/assets/common/images/avt_greeting.gif": "2e97b8bede5dd752c1e79246b01ddf2e",
"assets/assets/common/images/avt_sitting.gif": "277ed8d1c18d371dffed92b628c6084f",
"assets/assets/common/images/img_book_list_bg.jpg": "00f869364ed3eb9909ad37798000b903",
"assets/assets/common/images/img_book_list_bg_2.jpg": "88f81c8d9fabde6710ae2151097b327c",
"assets/assets/common/images/img_book_list_bg_3.jpg": "f405b137e346c5da3851a0ceac1dc232",
"assets/assets/common/images/img_book_list_bg_4.jpg": "d09f4ac1efb03a141d4fdf39f0a85807",
"assets/assets/common/images/img_book_list_bg_5.jpg": "4955aed064d94d1c41ae6f4c3ab9e80f",
"assets/assets/common/images/img_book_list_bg_6.jpg": "f46237d321c3dfcc0e4468f8260476e0",
"assets/assets/common/images/img_book_list_bg_7.jpg": "a8242c39e5525f94260dfb26999b9513",
"assets/assets/common/images/img_daily_poetry_card_left.png": "a8ef2624b950617c2eb09852dbe2c027",
"assets/assets/common/images/img_daily_poetry_card_right.png": "3a4b794401e9567b89dfa9afa6f0de7b",
"assets/assets/common/images/img_daily_prose_card_left.png": "c312c5144fc52a6b6bd368cfe2e70e8e",
"assets/assets/common/images/img_daily_prose_card_right.png": "fa38536d0ae601b92456cff2d3aa29e0",
"assets/assets/common/images/img_error.png": "5ee2eca367adf5d3b5e5e41e1710ce87",
"assets/assets/common/images/img_lughat_button_background.png": "a93cd786389696ffe6489c5fb0b8e9b1",
"assets/assets/common/images/img_zainshakeel.jpg": "d0f98acdd3d9bec96c2ac0fee9a81478",
"assets/assets/common/images/img_zainshakeel_2.jpg": "9a81de79089d5127ce3a9c7cab08d904",
"assets/assets/dev/animations/anim_arrow_up_dark.json": "510a19da1fd0efaa288a21378d13a5dd",
"assets/assets/dev/animations/anim_arrow_up_light.json": "3bbb37cc87fab8b1a14f2df5ff16cfdf",
"assets/assets/dev/animations/anim_dark_mode_loading.json": "00faed1ced4ebfd04d0b78587fa40342",
"assets/assets/dev/animations/anim_downloading_dark.json": "8a13a1bb351af02fcc67bc751199e54f",
"assets/assets/dev/animations/anim_downloading_light.json": "24859368c252bcef42782af9e5684833",
"assets/assets/dev/animations/anim_light_mode_loading.json": "68718c249484f0b9a221a63c4fb06dbb",
"assets/assets/dev/animations/anim_notification_dark.json": "f88616ce1af50c2741919e0a664d6731",
"assets/assets/dev/animations/anim_notification_light.json": "9ccee9b16b7a4b1686f70637912efae6",
"assets/assets/dev/images/img_app_circle_logo.png": "f2a764ae8e9f0eae3022620733762723",
"assets/assets/dev/images/img_cover_circle_dp.png": "bffcebe36b8fbf8b99b4d11a61fa70ac",
"assets/assets/dev/images/img_cover_top.png": "5ec37987b6364fa0d919ce6cb2af8007",
"assets/assets/dev/images/img_cover_top_light.png": "5ec37987b6364fa0d919ce6cb2af8007",
"assets/assets/dev/images/img_designer.png": "bc976db52883b20e6d26a1b9d0aa263e",
"assets/assets/dev/images/img_developer.jpg": "9a81de79089d5127ce3a9c7cab08d904",
"assets/assets/dev/images/img_intisab.png": "b2f7a2348a10ed842a3b38a809a165cc",
"assets/assets/dev/images/img_poet_intro.png": "ff76df455e8e1735a086061aea1d3f70",
"assets/assets/dev/images/img_splash_logo.png": "9e4152fd9eae5e0919d0de328815a2c4",
"assets/assets/farhatabbasshah/animations/anim_arrow_up_dark.json": "510a19da1fd0efaa288a21378d13a5dd",
"assets/assets/farhatabbasshah/animations/anim_arrow_up_light.json": "3bbb37cc87fab8b1a14f2df5ff16cfdf",
"assets/assets/farhatabbasshah/animations/anim_dark_mode_loading.json": "00faed1ced4ebfd04d0b78587fa40342",
"assets/assets/farhatabbasshah/animations/anim_downloading_dark.json": "8a13a1bb351af02fcc67bc751199e54f",
"assets/assets/farhatabbasshah/animations/anim_downloading_light.json": "24859368c252bcef42782af9e5684833",
"assets/assets/farhatabbasshah/animations/anim_light_mode_loading.json": "68718c249484f0b9a221a63c4fb06dbb",
"assets/assets/farhatabbasshah/animations/anim_notification_dark.json": "f88616ce1af50c2741919e0a664d6731",
"assets/assets/farhatabbasshah/animations/anim_notification_light.json": "c5f89996482662fa4752ba0b12ee10eb",
"assets/assets/farhatabbasshah/images/img_app_circle_logo.png": "f2a764ae8e9f0eae3022620733762723",
"assets/assets/farhatabbasshah/images/img_cover_circle_dp.png": "e9878317dc9b18fa4e3c360cee53b0c8",
"assets/assets/farhatabbasshah/images/img_cover_top.png": "37504bf1f899cf8d1b2c8c362a8d4904",
"assets/assets/farhatabbasshah/images/img_cover_top_light.png": "37504bf1f899cf8d1b2c8c362a8d4904",
"assets/assets/farhatabbasshah/images/img_designer.png": "bc976db52883b20e6d26a1b9d0aa263e",
"assets/assets/farhatabbasshah/images/img_developer.jpg": "9a81de79089d5127ce3a9c7cab08d904",
"assets/assets/farhatabbasshah/images/img_intisab.png": "b2f7a2348a10ed842a3b38a809a165cc",
"assets/assets/farhatabbasshah/images/img_poet_intro.png": "d983c4d67a261450bf4f48417d969c89",
"assets/assets/farhatabbasshah/images/img_splash_logo.png": "0afd4553b395f020fb0f258fd47ca892",
"assets/assets/fonts/AlviNastaleeqRegular.ttf": "e8cfe56ccaa6ebf71d57fd3173ee4183",
"assets/assets/fonts/faiz-lahori-nastaleeq-regular.ttf": "15eaa2cfc5bdb3a48d1c7cf827166e98",
"assets/assets/fonts/Inter-Bold.ttf": "8f2869a84ad71f156a17bb66611ebe22",
"assets/assets/fonts/Inter-Medium.ttf": "a473e623af12065b4b9cb8db4068fb9c",
"assets/assets/fonts/Inter-Regular.ttf": "fdb50e0d48cdcf775fa1ac0dc3c33bd4",
"assets/assets/fonts/Inter-SemiBold.ttf": "4d24f378e7f8656a5bccb128265a6c3d",
"assets/assets/fonts/NotoSerif-Italic.ttf": "858b3c0567bb168f142d8efd9601946e",
"assets/assets/fonts/Oswald-Light.ttf": "fb3af9a7ffb259726bb3cb30b74ab7dc",
"assets/assets/fonts/Oswald-Regular.ttf": "b299a657c45aa257f1458b327f491bfb",
"assets/assets/fonts/Oswald-SemiBold.ttf": "32e8a52171da183dfb2e3a7c73b90ed5",
"assets/assets/jaunelia/animations/anim_arrow_up_dark.json": "510a19da1fd0efaa288a21378d13a5dd",
"assets/assets/jaunelia/animations/anim_arrow_up_light.json": "3bbb37cc87fab8b1a14f2df5ff16cfdf",
"assets/assets/jaunelia/animations/anim_dark_mode_loading.json": "00faed1ced4ebfd04d0b78587fa40342",
"assets/assets/jaunelia/animations/anim_downloading_dark.json": "8a13a1bb351af02fcc67bc751199e54f",
"assets/assets/jaunelia/animations/anim_downloading_light.json": "24859368c252bcef42782af9e5684833",
"assets/assets/jaunelia/animations/anim_light_mode_loading.json": "68718c249484f0b9a221a63c4fb06dbb",
"assets/assets/jaunelia/animations/anim_notification_dark.json": "f88616ce1af50c2741919e0a664d6731",
"assets/assets/jaunelia/animations/anim_notification_light.json": "c5f89996482662fa4752ba0b12ee10eb",
"assets/assets/jaunelia/images/img_app_circle_logo.png": "9e4152fd9eae5e0919d0de328815a2c4",
"assets/assets/jaunelia/images/img_cover_circle_dp.png": "a6be7e63a5d46c4a99552c9b39ff00d6",
"assets/assets/jaunelia/images/img_cover_top.png": "fb3ca6e42cf938edbbf0660e2e67a06c",
"assets/assets/jaunelia/images/img_cover_top_light.png": "fb3ca6e42cf938edbbf0660e2e67a06c",
"assets/assets/jaunelia/images/img_designer.png": "bc976db52883b20e6d26a1b9d0aa263e",
"assets/assets/jaunelia/images/img_developer.jpg": "9a81de79089d5127ce3a9c7cab08d904",
"assets/assets/jaunelia/images/img_intisab.png": "b2f7a2348a10ed842a3b38a809a165cc",
"assets/assets/jaunelia/images/img_khalid_ansari_intro.png": "00db85fa60233f706b97c00f68e08feb",
"assets/assets/jaunelia/images/img_poet_intro.png": "ff76df455e8e1735a086061aea1d3f70",
"assets/assets/jaunelia/images/img_splash_logo.png": "9e4152fd9eae5e0919d0de328815a2c4",
"assets/assets/mohsinnaqvi/animations/anim_arrow_up_dark.json": "510a19da1fd0efaa288a21378d13a5dd",
"assets/assets/mohsinnaqvi/animations/anim_arrow_up_light.json": "925d213177528fa637c07421ecb781c4",
"assets/assets/mohsinnaqvi/animations/anim_dark_mode_loading.json": "00faed1ced4ebfd04d0b78587fa40342",
"assets/assets/mohsinnaqvi/animations/anim_downloading_dark.json": "8a13a1bb351af02fcc67bc751199e54f",
"assets/assets/mohsinnaqvi/animations/anim_downloading_light.json": "ec5d00d28cb4b56b03c63d8c8331d0b8",
"assets/assets/mohsinnaqvi/animations/anim_light_mode_loading.json": "5b6b6446d3f7fc11cbf09f800cfffab7",
"assets/assets/mohsinnaqvi/animations/anim_notification_dark.json": "f88616ce1af50c2741919e0a664d6731",
"assets/assets/mohsinnaqvi/animations/anim_notification_light.json": "9ccee9b16b7a4b1686f70637912efae6",
"assets/assets/mohsinnaqvi/images/img_app_circle_logo.png": "3f8b876c0cda22009df42ec83a92eabf",
"assets/assets/mohsinnaqvi/images/img_cover_circle_dp.png": "c6505371fba45bdaa9160f796f931df1",
"assets/assets/mohsinnaqvi/images/img_cover_top.png": "86108f253156d52d87548369576bf280",
"assets/assets/mohsinnaqvi/images/img_cover_top_light.png": "86108f253156d52d87548369576bf280",
"assets/assets/mohsinnaqvi/images/img_designer.png": "bc976db52883b20e6d26a1b9d0aa263e",
"assets/assets/mohsinnaqvi/images/img_developer.jpg": "9a81de79089d5127ce3a9c7cab08d904",
"assets/assets/mohsinnaqvi/images/img_intisab.png": "b2f7a2348a10ed842a3b38a809a165cc",
"assets/assets/mohsinnaqvi/images/img_poet_intro.png": "98dddcff72d23385487f06673c7c68bb",
"assets/assets/mohsinnaqvi/images/img_splash_logo.png": "eb49d6a6673521965501015532f1345b",
"assets/assets/zainshakeel/animations/anim_arrow_up_dark.json": "510a19da1fd0efaa288a21378d13a5dd",
"assets/assets/zainshakeel/animations/anim_arrow_up_light.json": "3bbb37cc87fab8b1a14f2df5ff16cfdf",
"assets/assets/zainshakeel/animations/anim_dark_mode_loading.json": "00faed1ced4ebfd04d0b78587fa40342",
"assets/assets/zainshakeel/animations/anim_downloading_dark.json": "8a13a1bb351af02fcc67bc751199e54f",
"assets/assets/zainshakeel/animations/anim_downloading_light.json": "24859368c252bcef42782af9e5684833",
"assets/assets/zainshakeel/animations/anim_light_mode_loading.json": "68718c249484f0b9a221a63c4fb06dbb",
"assets/assets/zainshakeel/animations/anim_notification_dark.json": "f88616ce1af50c2741919e0a664d6731",
"assets/assets/zainshakeel/animations/anim_notification_light.json": "c5f89996482662fa4752ba0b12ee10eb",
"assets/assets/zainshakeel/images/img_app_circle_logo.png": "90fa02f11b7621a097986c43f5c2e7b5",
"assets/assets/zainshakeel/images/img_cover_circle_dp.png": "accaac7d45b82a1121c624bccb4c39ae",
"assets/assets/zainshakeel/images/img_cover_top.png": "27b9bdb3e95d723e51575060aad3f3d5",
"assets/assets/zainshakeel/images/img_cover_top_light.png": "99a319352dfd0cbcc68816ec724c0e65",
"assets/assets/zainshakeel/images/img_designer.png": "bc976db52883b20e6d26a1b9d0aa263e",
"assets/assets/zainshakeel/images/img_developer.jpg": "9a81de79089d5127ce3a9c7cab08d904",
"assets/assets/zainshakeel/images/img_intisab.png": "d58004f3b7d462ac8a35a7003ea2df7a",
"assets/assets/zainshakeel/images/img_poet_intro.png": "514e533c12c0d299f5ad283c6634446b",
"assets/assets/zainshakeel/images/img_splash_logo.png": "38d43574c7608d35b3085b45d22b011c",
"assets/assets/zainshakeel/images/img_splash_logo_desktop.png": "018696dfce89e35a9529ec6f5266a54a",
"assets/FontManifest.json": "4e88e0a8a118a5cde784a529ebafc8e0",
"assets/fonts/MaterialIcons-Regular.otf": "5a48bc00bdf0d12c460c495ca1feeaed",
"assets/NOTICES": "5eaeecea9cb904123fdd85f3efe999db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "430997c61e208716cd3211b5793ef4fc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "946f1f8735f0efefff12a52363fe035c",
"/": "946f1f8735f0efefff12a52363fe035c",
"main.dart.js": "563727cd0c06ff9fbeeb34ef62436886",
"manifest.json": "ab5df85ef05389d984a2ac9a2dab834f",
"version.json": "7ad075dce1f99d8572e8c9a647c2a75b"};
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
