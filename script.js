(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 37.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2EB573F7_3DFC_D718_41B1_4386D7A62CD2",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 159.74,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.1,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909",
 "image": {
  "levels": [
   {
    "url": "media/popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.6
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "179%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_36EA9659_3D95_7109_41C6_1B8980F40674",
 "thumbnailUrl": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_t.jpg",
 "label": "01",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_32BA6A3F_3DBC_F109_4164_A8FAC5EBE854"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_36EA9659_3D95_7109_41C6_1B8980F40674",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -142.41,
   "yaw": 54.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "02",
 "id": "panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6",
 "thumbnailUrl": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_t.jpg"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_32D10189_3DBC_D309_41CA_8C3AADCEF465",
  "this.overlay_32142A4F_3DB5_D108_41B1_BE2049F31409"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 76.21,
   "yaw": -82.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89"
  },
  {
   "backwardYaw": -81.63,
   "yaw": -176.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "05",
 "id": "panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4",
 "thumbnailUrl": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_t.jpg"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_32C36866_3DB7_B13B_41C4_0112268DEE71",
  "this.overlay_325AFECC_3DB7_7108_41C4_D90343C47508",
  "this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E",
  "this.overlay_2D0E1966_3D9B_5338_41A6_8E5F2EFEBE91",
  "this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_36EA9659_3D95_7109_41C6_1B8980F40674",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_36EA9659_3D95_7109_41C6_1B8980F40674_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B",
   "camera": "this.panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -125.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_2EB863E8_3DFC_D737_41C5_9229D43B3984",
 "id": "camera_2EB8B3E8_3DFC_D737_41BA_4703B926C2FA",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -97.48,
   "yaw": 35.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89"
  },
  {
   "backwardYaw": 54.35,
   "yaw": -142.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "03",
 "id": "panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0",
 "thumbnailUrl": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_t.jpg"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_32EF1408_3DBD_50F7_418E_4BE12B7F429A",
  "this.overlay_324A2E07_3DBD_50F9_41C0_3B7DC8F1DB62",
  "this.overlay_32086776_3DBB_DF18_41CD_65002DA5F11B",
  "this.overlay_335D8B3B_3DBB_5708_41A7_A0BC522771B1",
  "this.popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C",
  "this.popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA",
  "this.overlay_32431332_3DB5_B718_41C0_373EC5C098B6",
  "this.popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "video01-maluquinho",
 "class": "Video",
 "thumbnailUrl": "media/video_2D26FF22_3DAF_6F38_41CB_4E0E1C4EF164_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_2D26FF22_3DAF_6F38_41CB_4E0E1C4EF164",
 "scaleMode": "fit_inside",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_2D26FF22_3DAF_6F38_41CB_4E0E1C4EF164.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -82.92,
   "yaw": 76.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4"
  },
  {
   "backwardYaw": 35.78,
   "yaw": -97.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "04",
 "id": "panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89",
 "thumbnailUrl": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_t.jpg"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_32C6924F_3DB7_5109_41CE_98EC02C7FF91",
  "this.overlay_3271DF11_3DB7_AF19_41B1_E8EB7A4DE73C",
  "this.overlay_2D18E462_3DAD_513B_41CA_36BF793C4BD2",
  "this.popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 82.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2EAC23D8_3DFC_D717_41A1_6B879BE54978",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -103.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E436407_3DFC_D0F9_41C7_8AE1F2AB0BA9",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_2EC17492_3DAC_D11B_41CB_1E76B5168449",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA_0_0.jpeg",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 1500
  },
  {
   "url": "media/popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA_0_1.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA_0_2.jpeg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "label": "video03-presley",
 "class": "Video",
 "thumbnailUrl": "media/video_2CD50A4D_3D9D_7109_41A6_A9CDEF4A8CBB_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_2CD50A4D_3D9D_7109_41A6_A9CDEF4A8CBB",
 "scaleMode": "fit_inside",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_2CD50A4D_3D9D_7109_41A6_A9CDEF4A8CBB.mp4"
 }
},
{
 "items": [
  {
   "media": "this.video_2E42446D_3D94_D109_41AA_2BE56B788E6D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2EF42399_3DFC_D708_41C9_1FA5E0E835F6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2EF42399_3DFC_D708_41C9_1FA5E0E835F6, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_2EF42399_3DFC_D708_41C9_1FA5E0E835F6",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -144.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E92C3C8_3DFC_D708_41CE_3BC975C2A012",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.42,
   "yaw": -81.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "06",
 "id": "panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B",
 "thumbnailUrl": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_t.jpg"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_32218833_3DB4_F118_41A1_9F58D2E40C0C"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation"
},
{
 "label": "video02-babole",
 "class": "Video",
 "thumbnailUrl": "media/video_2E42446D_3D94_D109_41AA_2BE56B788E6D_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_2E42446D_3D94_D109_41AA_2BE56B788E6D",
 "scaleMode": "fit_inside",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_2E42446D_3D94_D109_41AA_2BE56B788E6D.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 171.69,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.08,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA",
 "image": {
  "levels": [
   {
    "url": "media/popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -3.87
},
{
 "items": [
  {
   "media": "this.video_2CD50A4D_3D9D_7109_41A6_A9CDEF4A8CBB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2EF7C399_3DFC_D708_41B7_B6C67282EBC2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2EF7C399_3DFC_D708_41B7_B6C67282EBC2, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_2EF7C399_3DFC_D708_41B7_B6C67282EBC2",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 97.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E9883B9_3DFC_D709_41C1_27BE1BD2FF51",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 90.87,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.09,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA",
 "image": {
  "levels": [
   {
    "url": "media/popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -2.63
},
{
 "id": "ImageResource_2EC68492_3DAC_D11B_41AE_63E59787CC5D",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909_0_0.jpeg",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 1500
  },
  {
   "url": "media/popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909_0_1.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909_0_2.jpeg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_2D24A63E_3DAC_B10B_4195_545302906214",
 "id": "panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_2EDF6482_3DAC_D1F8_41B9_44C3F1C84A98",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C_0_0.jpeg",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 1500
  },
  {
   "url": "media/popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C_0_1.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C_0_2.jpeg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E6E5426_3DFC_D13B_41B6_E41DF0335C07",
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_2EC00492_3DAC_D11B_41C1_3C5962380AB0",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA_0_0.jpeg",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 1500
  },
  {
   "url": "media/popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA_0_1.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA_0_2.jpeg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "items": [
  {
   "media": "this.video_2D26FF22_3DAF_6F38_41CB_4E0E1C4EF164",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2EF47399_3DFC_D708_41B8_EE0E2264AC54, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2EF47399_3DFC_D708_41B8_EE0E2264AC54, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_2EF47399_3DFC_D708_41B8_EE0E2264AC54",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_2CB98498_3DAC_D108_41CC_55B694F03973",
 "id": "panorama_36EA9659_3D95_7109_41C6_1B8980F40674_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 98.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E50E416_3DFC_D118_41C4_382549DDD7D2",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 127.6,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.04,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C",
 "image": {
  "levels": [
   {
    "url": "media/popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -8.1
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_36074079_3D9B_5109_4194_2CC55ACBB41F.ogg",
  "mp3Url": "media/audio_36074079_3D9B_5109_4194_2CC55ACBB41F.mp3"
 },
 "id": "audio_36074079_3D9B_5109_4194_2CC55ACBB41F",
 "data": {
  "label": "musica"
 }
},
{
 "transitionDuration": 500,
 "shadow": false,
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "minWidth": 100,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "minHeight": 50,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": false,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderRadius": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "shadow": false,
 "minHeight": 1,
 "id": "Image_2F86B9F1_3DED_5319_41A4_AF410FB88007",
 "left": "0.07%",
 "scaleMode": "fit_inside",
 "minWidth": 1,
 "borderSize": 0,
 "width": "12.78%",
 "url": "skin/Image_2F86B9F1_3DED_5319_41A4_AF410FB88007.png",
 "class": "Image",
 "verticalAlign": "middle",
 "top": "4.76%",
 "paddingRight": 0,
 "height": "24.49%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "maxHeight": 1000,
 "propagateClick": false,
 "data": {
  "name": "Image14133"
 },
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 1000,
 "borderRadius": 0
},
{
 "shadow": false,
 "minHeight": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "right": 0,
 "minWidth": 0,
 "borderSize": 0,
 "class": "UIComponent",
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.55,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent16067"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "minHeight": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "minWidth": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "ZoomImage16068"
 },
 "visible": false,
 "propagateClick": false,
 "scaleMode": "custom",
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": []
},
{
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "rollOverIconColor": "#666666",
 "shadow": false,
 "data": {
  "name": "CloseButton16069"
 },
 "minHeight": 0,
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "minWidth": 0,
 "borderSize": 0,
 "iconHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "class": "CloseButton",
 "top": 10,
 "borderColor": "#000000",
 "paddingRight": 5,
 "iconColor": "#000000",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "mode": "push",
 "fontSize": "1.29vmin",
 "iconLineWidth": 5,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0.3,
 "paddingTop": 5,
 "label": "",
 "pressedIconColor": "#888888",
 "paddingBottom": 5,
 "shadowSpread": 1,
 "gap": 5,
 "fontStyle": "normal",
 "iconWidth": 20,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "paddingLeft": 5,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.33,
   "image": "this.AnimatedImageResource_2EEA4473_3DAC_D119_41C5_46E75FAC4F4D",
   "pitch": -14.79,
   "yaw": 40.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32BA6A3F_3DBC_F109_4164_A8FAC5EBE854",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 4.33,
   "yaw": 40.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0, this.camera_2EB573F7_3DFC_D718_41B1_4386D7A62CD2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.51,
   "image": "this.AnimatedImageResource_2EE93473_3DAC_D119_41AE_983EF0254392",
   "pitch": -14.23,
   "yaw": 54.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32D10189_3DBC_D309_41CA_8C3AADCEF465",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.51,
   "yaw": 54.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.46,
   "image": "this.AnimatedImageResource_2D160B33_3D9D_5719_41C5_7CA25EBDEF73",
   "pitch": 15.62,
   "yaw": -12.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32142A4F_3DB5_D108_41B1_BE2049F31409",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.46,
   "yaw": -12.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B, this.camera_2E50E416_3DFC_D118_41C4_382549DDD7D2); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.63,
   "image": "this.AnimatedImageResource_2EED4473_3DAC_D119_41B8_CDC00622995A",
   "pitch": -10.11,
   "yaw": -176.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32C36866_3DB7_B13B_41C4_0112268DEE71",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.63,
   "yaw": -176.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89, this.camera_2E436407_3DFC_D0F9_41C7_8AE1F2AB0BA9); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.64,
   "image": "this.AnimatedImageResource_2EED2473_3DAC_D119_41CA_C0EA84685D10",
   "pitch": -9.79,
   "yaw": -82.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_325AFECC_3DB7_7108_41C4_D90343C47508",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.64,
   "yaw": -82.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.79
  }
 ]
},
{
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_2D26FF22_3DAF_6F38_41CB_4E0E1C4EF164.mp4"
 },
 "hfov": 37.98,
 "id": "overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E",
 "enabledInCardboard": true,
 "autoplay": false,
 "loop": false,
 "image": {
  "levels": [
   {
    "url": "media/overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.17,
 "useHandCursor": true,
 "yaw": 55.82,
 "rotationY": 0.13,
 "click": "if(this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E.get('state') != 'playing'){ this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E.play(); } else { this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E.stop(); }",
 "class": "VideoPanoramaOverlay",
 "stateChange": "if(this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E', [this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E]); } else { this.resumeGlobalAudios('overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E'); }",
 "vfov": 25.35,
 "videoVisibleOnStop": false,
 "distance": 50,
 "rotationX": -3.31,
 "roll": 1.17,
 "blending": 0,
 "data": {
  "label": "Video"
 }
},
{
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_2E42446D_3D94_D109_41AA_2BE56B788E6D.mp4"
 },
 "hfov": 38.84,
 "id": "overlay_2D0E1966_3D9B_5338_41A6_8E5F2EFEBE91",
 "enabledInCardboard": true,
 "autoplay": false,
 "loop": false,
 "image": {
  "levels": [
   {
    "url": "media/overlay_2D0E1966_3D9B_5338_41A6_8E5F2EFEBE91_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.29,
 "useHandCursor": true,
 "yaw": 97.77,
 "rotationY": 0.71,
 "click": "if(this.overlay_2D0E1966_3D9B_5338_41A6_8E5F2EFEBE91.get('state') != 'playing'){ this.overlay_2D0E1966_3D9B_5338_41A6_8E5F2EFEBE91.play(); } else { this.overlay_2D0E1966_3D9B_5338_41A6_8E5F2EFEBE91.stop(); }",
 "class": "VideoPanoramaOverlay",
 "stateChange": "if(this.overlay_2D0E1966_3D9B_5338_41A6_8E5F2EFEBE91.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_2D0E1966_3D9B_5338_41A6_8E5F2EFEBE91', [this.overlay_2D0E1966_3D9B_5338_41A6_8E5F2EFEBE91]); } else { this.resumeGlobalAudios('overlay_2D0E1966_3D9B_5338_41A6_8E5F2EFEBE91'); }",
 "vfov": 25.49,
 "videoVisibleOnStop": false,
 "distance": 50,
 "rotationX": -5.41,
 "roll": 1.4,
 "blending": 0,
 "data": {
  "label": "Video"
 }
},
{
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_2CD50A4D_3D9D_7109_41A6_A9CDEF4A8CBB.mp4"
 },
 "hfov": 37.25,
 "id": "overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D",
 "enabledInCardboard": true,
 "autoplay": false,
 "loop": false,
 "image": {
  "levels": [
   {
    "url": "media/overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 3.29,
 "useHandCursor": true,
 "yaw": 138.42,
 "rotationY": -2.63,
 "click": "if(this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D.get('state') != 'playing'){ this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D.play(); } else { this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D.stop(); }",
 "class": "VideoPanoramaOverlay",
 "stateChange": "if(this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D', [this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D]); } else { this.resumeGlobalAudios('overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D'); }",
 "vfov": 25.43,
 "videoVisibleOnStop": false,
 "distance": 50,
 "rotationX": -4.49,
 "roll": -0.76,
 "blending": 0,
 "data": {
  "label": "Video"
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_2EB863E8_3DFC_D737_41C5_9229D43B3984"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89, this.camera_2EAC23D8_3DFC_D717_41A1_6B879BE54978); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.62,
   "image": "this.AnimatedImageResource_2EE85473_3DAC_D119_4155_2F4BDBFBA944",
   "pitch": -10.45,
   "yaw": 35.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32EF1408_3DBD_50F7_418E_4BE12B7F429A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.62,
   "yaw": 35.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6, this.camera_2EB8B3E8_3DFC_D737_41BA_4703B926C2FA); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.74,
   "image": "this.AnimatedImageResource_2EE87473_3DAC_D119_41A5_8C6D706463FA",
   "pitch": -2.28,
   "yaw": -142.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_324A2E07_3DBD_50F9_41C0_3B7DC8F1DB62",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.74,
   "yaw": -142.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2EDF6482_3DAC_D1F8_41B9_44C3F1C84A98, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.04,
   "image": "this.AnimatedImageResource_2EEFC473_3DAC_D119_41AC_04CC65C3FF01",
   "pitch": -8.1,
   "yaw": 127.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32086776_3DBB_DF18_41CD_65002DA5F11B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.04,
   "yaw": 127.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2EC17492_3DAC_D11B_41CB_1E76B5168449, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.08,
   "image": "this.AnimatedImageResource_2EEF9473_3DAC_D119_41B2_F2EA688A1B04",
   "pitch": -3.87,
   "yaw": 171.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_335D8B3B_3DBB_5708_41A7_A0BC522771B1",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.08,
   "yaw": 171.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2EC00492_3DAC_D11B_41C1_3C5962380AB0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.09,
   "image": "this.AnimatedImageResource_2EEF3473_3DAC_D119_41B4_CF04DB7EBD44",
   "pitch": -2.63,
   "yaw": 90.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32431332_3DB5_B718_41C0_373EC5C098B6",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.09,
   "yaw": 90.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0, this.camera_2E92C3C8_3DFC_D708_41CE_3BC975C2A012); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.7,
   "image": "this.AnimatedImageResource_2EEE5473_3DAC_D119_41C0_45E97B6A3A71",
   "pitch": -6.23,
   "yaw": -97.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32C6924F_3DB7_5109_41CE_98EC02C7FF91",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.7,
   "yaw": -97.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4, this.camera_2E9883B9_3DFC_D709_41C1_27BE1BD2FF51); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.68,
   "image": "this.AnimatedImageResource_2EEE1473_3DAC_D119_41BF_4A1FC99EA1E7",
   "pitch": -7.53,
   "yaw": 76.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3271DF11_3DB7_AF19_41B1_E8EB7A4DE73C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.68,
   "yaw": 76.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2EC68492_3DAC_D11B_41AE_63E59787CC5D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.1,
   "image": "this.AnimatedImageResource_2EEDF473_3DAC_D119_41C8_52F8BFAAC16F",
   "pitch": 1.6,
   "yaw": 159.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2D18E462_3DAD_513B_41CA_36BF793C4BD2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.1,
   "yaw": 159.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4, this.camera_2E6E5426_3DFC_D13B_41B6_E41DF0335C07); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.74,
   "image": "this.AnimatedImageResource_2EEC0473_3DAC_D119_41CC_5CF0F44F4498",
   "pitch": -2.67,
   "yaw": -81.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32218833_3DB4_F118_41A1_9F58D2E40C0C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.74,
   "yaw": -81.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_2D24A63E_3DAC_B10B_4195_545302906214"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_2CB98498_3DAC_D108_41CC_55B694F03973"
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EEA4473_3DAC_D119_41C5_46E75FAC4F4D",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EE93473_3DAC_D119_41AE_983EF0254392",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2D160B33_3D9D_5719_41C5_7CA25EBDEF73",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EED4473_3DAC_D119_41B8_CDC00622995A",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EED2473_3DAC_D119_41CA_C0EA84685D10",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EE85473_3DAC_D119_4155_2F4BDBFBA944",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EE87473_3DAC_D119_41A5_8C6D706463FA",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EEFC473_3DAC_D119_41AC_04CC65C3FF01",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EEF9473_3DAC_D119_41B2_F2EA688A1B04",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EEF3473_3DAC_D119_41B4_CF04DB7EBD44",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EEE5473_3DAC_D119_41C0_45E97B6A3A71",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EEE1473_3DAC_D119_41BF_4A1FC99EA1E7",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EEDF473_3DAC_D119_41C8_52F8BFAAC16F",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2EEC0473_3DAC_D119_41CC_5CF0F44F4498",
 "frameCount": 22,
 "frameDuration": 41
}],
 "scrollBarWidth": 10,
 "shadow": false,
 "minHeight": 20,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.MainViewer",
  "this.Image_2F86B9F1_3DED_5319_41A4_AF410FB88007",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "minWidth": 20,
 "borderSize": 0,
 "start": "this.playAudioList([this.audio_36074079_3D9B_5109_4194_2CC55ACBB41F]); this.init()",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "class": "Player",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "defaultVRPointer": "laser",
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "width": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player445"
 },
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
