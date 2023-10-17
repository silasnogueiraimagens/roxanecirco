(function(){
    var script = {
 "definitions": [{
 "items": [
  {
   "media": "this.video_3368E2AC_3E5E_D2CD_41C1_745EE86FAE60",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2E44DD24_3E7A_77FD_41C2_75C660449314, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2E44DD24_3E7A_77FD_41C2_75C660449314, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_2E44DD24_3E7A_77FD_41C2_75C660449314",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E0FDDC0_3E7A_76B5_41C6_8DA33F42604E",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 79.8,
   "yaw": -82.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89"
  },
  {
   "backwardYaw": -80.1,
   "yaw": 179.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B"
  }
 ],
 "vfov": 180,
 "label": "05",
 "id": "panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4",
 "thumbnailUrl": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_32C36866_3DB7_B13B_41C4_0112268DEE71",
  "this.overlay_325AFECC_3DB7_7108_41C4_D90343C47508",
  "this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E",
  "this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D"
 ],
 "hfovMax": 130
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
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer"
},
{
 "items": [
  {
   "media": "this.panorama_36EA9659_3D95_7109_41C6_1B8980F40674",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_36EA9659_3D95_7109_41C6_1B8980F40674_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "camera": "this.panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_camera",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
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
  "yaw": -100.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2EFADE2D_3E7A_75CF_41C1_C26F122458D1",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_2D26FF22_3DAF_6F38_41CB_4E0E1C4EF164",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2E445D24_3E7A_77FD_41B9_974E904D85DC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2E445D24_3E7A_77FD_41B9_974E904D85DC, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_2E445D24_3E7A_77FD_41B9_974E904D85DC",
 "class": "PlayList"
},
{
 "label": "video01-maluquinho",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_2D26FF22_3DAF_6F38_41CB_4E0E1C4EF164_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_2D26FF22_3DAF_6F38_41CB_4E0E1C4EF164",
 "class": "Video",
 "height": 720,
 "video": {
  "mp4Url": "media/video_2D26FF22_3DAF_6F38_41CB_4E0E1C4EF164.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
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
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 99.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2EF55E3D_3E7A_75CF_41C5_14DD409BDA85",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "yaw": 128.89,
 "hfov": 8.56,
 "pitch": -9.55
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "yaw": 90.53,
 "hfov": 8.59,
 "pitch": 8.69
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "yaw": 169.09,
 "hfov": 11.22,
 "pitch": -5.64
},
{
 "items": [
  {
   "media": "this.video_2E42446D_3D94_D109_41AA_2BE56B788E6D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2E447D24_3E7A_77FD_41C2_22FB59C9C0FA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2E447D24_3E7A_77FD_41C2_22FB59C9C0FA, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_2E447D24_3E7A_77FD_41C2_22FB59C9C0FA",
 "class": "PlayList"
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
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 38.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E28AD53_3E7A_765B_41AE_B1AF687AFB57",
 "automaticZoomSpeed": 10
},
{
 "label": "video03-presley",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_2CD50A4D_3D9D_7109_41A6_A9CDEF4A8CBB_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_2CD50A4D_3D9D_7109_41A6_A9CDEF4A8CBB",
 "class": "Video",
 "height": 720,
 "video": {
  "mp4Url": "media/video_2CD50A4D_3D9D_7109_41A6_A9CDEF4A8CBB.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
},
{
 "label": "video04-homem",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_3368E2AC_3E5E_D2CD_41C1_745EE86FAE60_t.jpg",
 "width": 1088,
 "loop": false,
 "id": "video_3368E2AC_3E5E_D2CD_41C1_745EE86FAE60",
 "class": "Video",
 "height": 1920,
 "video": {
  "mp4Url": "media/video_3368E2AC_3E5E_D2CD_41C1_745EE86FAE60.mp4",
  "width": 722,
  "class": "VideoResource",
  "height": 1276
 }
},
{
 "items": [
  {
   "media": "this.video_2CD50A4D_3D9D_7109_41A6_A9CDEF4A8CBB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2E443D24_3E7A_77FD_4191_1585E82A6F02, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2E443D24_3E7A_77FD_4191_1585E82A6F02, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_2E443D24_3E7A_77FD_4191_1585E82A6F02",
 "class": "PlayList"
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
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_36EA9659_3D95_7109_41C6_1B8980F40674",
 "thumbnailUrl": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_t.jpg",
 "hfovMin": "179%",
 "label": "01",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_32BA6A3F_3DBC_F109_4164_A8FAC5EBE854"
 ],
 "hfovMax": 130
},
{
 "label": "video02-babole",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_2E42446D_3D94_D109_41AA_2BE56B788E6D_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_2E42446D_3D94_D109_41AA_2BE56B788E6D",
 "class": "Video",
 "height": 720,
 "video": {
  "mp4Url": "media/video_2E42446D_3D94_D109_41AA_2BE56B788E6D.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -125.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_2EE8DE0E_3E7A_75CD_41CE_6AFD1A02E7EA",
 "id": "camera_2EE82E0E_3E7A_75CD_41A3_01FDC74D4F67",
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
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_36074079_3D9B_5109_4194_2CC55ACBB41F",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_36074079_3D9B_5109_4194_2CC55ACBB41F.ogg",
  "mp3Url": "media/audio_36074079_3D9B_5109_4194_2CC55ACBB41F.mp3"
 },
 "data": {
  "label": "musica"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 36.34,
   "yaw": -97.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0"
  },
  {
   "backwardYaw": -82.11,
   "yaw": 79.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4"
  }
 ],
 "vfov": 180,
 "label": "04",
 "id": "panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89",
 "thumbnailUrl": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_32C6924F_3DB7_5109_41CE_98EC02C7FF91",
  "this.overlay_3271DF11_3DB7_AF19_41B1_E8EB7A4DE73C",
  "this.overlay_2D18E462_3DAD_513B_41CA_36BF793C4BD2",
  "this.popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909",
  "this.overlay_32E5D945_3E5E_DFBF_41B9_627F7F83B0D6"
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 97.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E334DA1_3E7A_76F7_41C5_E4DF4CB2F09B",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -141.97,
   "yaw": 54.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36EA9659_3D95_7109_41C6_1B8980F40674"
  }
 ],
 "vfov": 180,
 "label": "02",
 "id": "panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6",
 "thumbnailUrl": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_32D10189_3DBC_D309_41CA_8C3AADCEF465",
  "this.overlay_32142A4F_3DB5_D108_41B1_BE2049F31409"
 ],
 "hfovMax": 130
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 82.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E198DDF_3E7A_764B_41C3_5DADE304BBAB",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "yaw": 159.56,
 "hfov": 11.26,
 "pitch": 2.99
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -143.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E27DD81_3E7A_76B7_41B1_EA7AB90CD977",
 "automaticZoomSpeed": 10
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
 "adjacentPanoramas": [
  {
   "backwardYaw": -97.48,
   "yaw": 36.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89"
  },
  {
   "backwardYaw": 54.91,
   "yaw": -141.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6"
  }
 ],
 "vfov": 180,
 "label": "03",
 "id": "panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0",
 "thumbnailUrl": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_32EF1408_3DBD_50F7_418E_4BE12B7F429A",
  "this.overlay_324A2E07_3DBD_50F9_41C0_3B7DC8F1DB62",
  "this.overlay_32086776_3DBB_DF18_41CD_65002DA5F11B",
  "this.overlay_335D8B3B_3DBB_5708_41A7_A0BC522771B1",
  "this.popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C",
  "this.popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA",
  "this.overlay_32431332_3DB5_B718_41C0_373EC5C098B6",
  "this.popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA"
 ],
 "hfovMax": 130
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
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.62,
   "yaw": -80.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4"
  }
 ],
 "vfov": 180,
 "label": "06",
 "id": "panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B",
 "thumbnailUrl": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_t.jpg",
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_32218833_3DB4_F118_41A1_9F58D2E40C0C"
 ],
 "hfovMax": 130
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
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "minWidth": 100,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "class": "ViewerArea",
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
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
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": false,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "shadow": false,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingLeft": 0,
 "id": "IconButton_310691D9_3DDC_3E88_41AD_868DDF4ECD86",
 "width": 40,
 "right": "2.62%",
 "horizontalAlign": "center",
 "minWidth": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "3.4%",
 "mode": "toggle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "click": "if(this.getGlobalAudio(this.audio_36074079_3D9B_5109_4194_2CC55ACBB41F).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_36074079_3D9B_5109_4194_2CC55ACBB41F); } else { var src = this.playGlobalAudio(this.audio_36074079_3D9B_5109_4194_2CC55ACBB41F); }",
 "pressedIconURL": "skin/IconButton_310691D9_3DDC_3E88_41AD_868DDF4ECD86_pressed.png",
 "shadow": false,
 "verticalAlign": "middle",
 "height": 40,
 "propagateClick": false,
 "data": {
  "name": "Button31994"
 },
 "iconURL": "skin/IconButton_310691D9_3DDC_3E88_41AD_868DDF4ECD86.png",
 "cursor": "hand",
 "minHeight": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_33DC212F_3DDC_3F88_41B2_B2BDCEED70ED"
 ],
 "paddingLeft": 0,
 "id": "Container_31709CA9_3E6A_76F7_41B7_4C144004C589",
 "left": "0%",
 "layout": "absolute",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingRight": 0,
 "width": "21.001%",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "gap": 10,
 "verticalAlign": "top",
 "height": "25.714%",
 "propagateClick": false,
 "data": {
  "name": "Container3091"
 },
 "overflow": "scroll",
 "paddingTop": 0,
 "minHeight": 1
},
{
 "paddingTop": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "minWidth": 0,
 "class": "UIComponent",
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.55,
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "UIComponent4397"
 },
 "visible": false,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 0
},
{
 "paddingTop": 0,
 "paddingLeft": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "minWidth": 0,
 "class": "ZoomImage",
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "borderRadius": 0,
 "shadow": false,
 "data": {
  "name": "ZoomImage4398"
 },
 "visible": false,
 "propagateClick": false,
 "scaleMode": "custom",
 "backgroundColorRatios": [],
 "minHeight": 0
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "rollOverIconColor": "#666666",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 5,
 "shadowSpread": 1,
 "id": "closeButtonPopupPanorama",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center",
 "paddingTop": 5,
 "iconWidth": 20,
 "minWidth": 0,
 "iconHeight": 20,
 "iconColor": "#000000",
 "class": "CloseButton",
 "top": 10,
 "borderColor": "#000000",
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "paddingRight": 5,
 "mode": "push",
 "paddingBottom": 5,
 "iconLineWidth": 5,
 "backgroundOpacity": 0.3,
 "fontSize": "1.29vmin",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "label": "",
 "pressedIconColor": "#888888",
 "shadow": false,
 "gap": 5,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "CloseButton4399"
 },
 "fontWeight": "normal",
 "fontStyle": "normal",
 "cursor": "hand",
 "minHeight": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B, this.camera_2EF55E3D_3E7A_75CF_41C5_14DD409BDA85); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31750311_3E6E_33D7_41C1_824F87317A0E",
   "pitch": -15.4,
   "hfov": 10.33,
   "yaw": 179.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32C36866_3DB7_B13B_41C4_0112268DEE71",
 "data": {
  "label": "Circle 01a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 179.62,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.33,
   "pitch": -15.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89, this.camera_2EFADE2D_3E7A_75CF_41C1_C26F122458D1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED2260E_3DEC_0588_418F_E1B629BD73C9",
   "pitch": -9.55,
   "hfov": 10.57,
   "yaw": -82.11,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_325AFECC_3DB7_7108_41C4_D90343C47508",
 "data": {
  "label": "Circle 01a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -82.11,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.57,
   "pitch": -9.55
  }
 ]
},
{
 "distance": 50,
 "video": {
  "mp4Url": "media/video_2D26FF22_3DAF_6F38_41CB_4E0E1C4EF164.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 },
 "enabledInCardboard": true,
 "autoplay": false,
 "id": "overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ]
 },
 "pitch": 9.03,
 "useHandCursor": true,
 "roll": -1.3,
 "hfov": 55.17,
 "rotationY": -1.22,
 "yaw": 64.83,
 "vfov": 35.86,
 "click": "if(this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E.get('state') != 'playing'){ this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E.play(); } else { this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E.stop(); }",
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "rotationX": -10.76,
 "stateChange": "if(this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E', [this.overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E]); } else { this.resumeGlobalAudios('overlay_2DE9500C_3DAF_F10F_41CD_79198FCF179E'); }",
 "blending": 0,
 "data": {
  "label": "Video"
 }
},
{
 "distance": 50,
 "video": {
  "mp4Url": "media/video_2CD50A4D_3D9D_7109_41A6_A9CDEF4A8CBB.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 },
 "enabledInCardboard": true,
 "autoplay": false,
 "id": "overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ]
 },
 "pitch": 9.61,
 "useHandCursor": true,
 "roll": 2.01,
 "hfov": 54.2,
 "rotationY": 1.9,
 "yaw": 129.35,
 "vfov": 34.68,
 "click": "if(this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D.get('state') != 'playing'){ this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D.play(); } else { this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D.stop(); }",
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "rotationX": -12.66,
 "stateChange": "if(this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D', [this.overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D]); } else { this.resumeGlobalAudios('overlay_2D625AC5_3D9D_D179_41AD_2A8AA43F496D'); }",
 "blending": 0,
 "data": {
  "label": "Video"
 }
},
{
 "id": "sequence_2CB98498_3DAC_D108_41CC_55B694F03973",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
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
 ]
},
{
 "id": "sequence_2D24A63E_3DAC_B10B_4195_545302906214",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
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
 ]
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
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED6F5FF_3DEC_0688_41BC_B8736FCD2878",
   "pitch": -13.86,
   "hfov": 7.2,
   "yaw": 39.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32BA6A3F_3DBC_F109_4164_A8FAC5EBE854",
 "data": {
  "label": "Circle 01a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EA9659_3D95_7109_41C6_1B8980F40674_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 39.16,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.2,
   "pitch": -13.86
  }
 ]
},
{
 "id": "sequence_2EE8DE0E_3E7A_75CD_41CE_6AFD1A02E7EA",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
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
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0, this.camera_2E27DD81_3E7A_76B7_41B1_EA7AB90CD977); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2EEE5473_3DAC_D119_41C0_45E97B6A3A71",
   "pitch": -6.23,
   "hfov": 7.7,
   "yaw": -97.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32C6924F_3DB7_5109_41CE_98EC02C7FF91",
 "data": {
  "label": "Circle 01a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -97.48,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.7,
   "pitch": -6.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4, this.camera_2E334DA1_3E7A_76F7_41C5_E4DF4CB2F09B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED5260E_3DEC_0588_41B7_BFCA54ADB729",
   "pitch": -9,
   "hfov": 7.66,
   "yaw": 79.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3271DF11_3DB7_AF19_41B1_E8EB7A4DE73C",
 "data": {
  "label": "Circle 01a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 79.8,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.66,
   "pitch": -9
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2C2F1096_3DAD_B11B_41C1_6E02EE797909, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','paddingLeft':5,'rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2EC68492_3DAC_D11B_41AE_63E59787CC5D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED2C60E_3DEC_0588_41CE_92D00E9032F5",
   "pitch": 2.99,
   "hfov": 11.26,
   "yaw": 159.56,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2D18E462_3DAD_513B_41CA_36BF793C4BD2",
 "data": {
  "label": "Info 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 159.56,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.26,
   "pitch": 2.99
  }
 ]
},
{
 "distance": 50,
 "video": {
  "mp4Url": "media/video_3368E2AC_3E5E_D2CD_41C1_745EE86FAE60.mp4",
  "width": 722,
  "class": "VideoResource",
  "height": 1276
 },
 "enabledInCardboard": true,
 "autoplay": false,
 "id": "overlay_32E5D945_3E5E_DFBF_41B9_627F7F83B0D6",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_32E5D945_3E5E_DFBF_41B9_627F7F83B0D6_t.jpg",
    "width": 1088,
    "class": "ImageResourceLevel",
    "height": 1920
   }
  ]
 },
 "pitch": 29.8,
 "useHandCursor": true,
 "roll": -0.29,
 "hfov": 29.98,
 "rotationY": -0.09,
 "yaw": 79.38,
 "vfov": 46.68,
 "click": "if(this.overlay_32E5D945_3E5E_DFBF_41B9_627F7F83B0D6.get('state') != 'playing'){ this.overlay_32E5D945_3E5E_DFBF_41B9_627F7F83B0D6.play(); } else { this.overlay_32E5D945_3E5E_DFBF_41B9_627F7F83B0D6.pause(); }",
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "rotationX": 17.42,
 "stateChange": "if(this.overlay_32E5D945_3E5E_DFBF_41B9_627F7F83B0D6.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_32E5D945_3E5E_DFBF_41B9_627F7F83B0D6', [this.overlay_32E5D945_3E5E_DFBF_41B9_627F7F83B0D6]); } else { this.resumeGlobalAudios('overlay_32E5D945_3E5E_DFBF_41B9_627F7F83B0D6'); }",
 "blending": 0,
 "data": {
  "label": "Video"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0, this.camera_2E28AD53_3E7A_765B_41AE_B1AF687AFB57); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED6160E_3DEC_0588_41C9_1E59C412BD1C",
   "pitch": -12.05,
   "hfov": 11.06,
   "yaw": 54.91,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32D10189_3DBC_D309_41CA_8C3AADCEF465",
 "data": {
  "label": "Circle 01a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 54.91,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.06,
   "pitch": -12.05
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
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED7D60E_3DEC_0588_41C7_E6C9FCC3CA8D",
   "pitch": 13.05,
   "hfov": 11.33,
   "yaw": -10.94,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32142A4F_3DB5_D108_41B1_BE2049F31409",
 "data": {
  "label": "Circle 01a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -10.94,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.33,
   "pitch": 13.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3709D596_3D9B_B31B_41C6_D87432A7FF89, this.camera_2E198DDF_3E7A_764B_41C3_5DADE304BBAB); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED7760E_3DEC_0588_41CC_0E0E1AE47B87",
   "pitch": -10.11,
   "hfov": 13.18,
   "yaw": 36.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32EF1408_3DBD_50F7_418E_4BE12B7F429A",
 "data": {
  "label": "Circle 01a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 36.34,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.18,
   "pitch": -10.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37DB7C29_3D94_B109_41BB_61872FC73CD6, this.camera_2EE82E0E_3E7A_75CD_41A3_01FDC74D4F67); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED7260E_3DEC_0588_41C2_268DC48144B5",
   "pitch": -2.06,
   "hfov": 13.38,
   "yaw": -141.97,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_324A2E07_3DBD_50F9_41C0_3B7DC8F1DB62",
 "data": {
  "label": "Circle 01a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -141.97,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.38,
   "pitch": -2.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2CBA5412_3DB4_D11B_4149_364D8DE1297C, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','paddingLeft':5,'rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2EDF6482_3DAC_D1F8_41B9_44C3F1C84A98, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED4F60E_3DEC_0588_41CC_98B98FE2D819",
   "pitch": -9.55,
   "hfov": 8.56,
   "yaw": 128.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32086776_3DBB_DF18_41CD_65002DA5F11B",
 "data": {
  "label": "Info 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 128.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.56,
   "pitch": -9.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2DADD5F5_3DB5_7318_41BE_9CEDC239A2AA, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','paddingLeft':5,'rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2EC17492_3DAC_D11B_41CB_1E76B5168449, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED4960E_3DEC_0588_4184_D423FDFEBE9D",
   "pitch": -5.64,
   "hfov": 11.22,
   "yaw": 169.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_335D8B3B_3DBB_5708_41A7_A0BC522771B1",
 "data": {
  "label": "Info 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 169.09,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.22,
   "pitch": -5.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_32510204_3DB4_F0FF_41B4_D3F1CA8640AA, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','paddingLeft':5,'rollOverBackgroundOpacity':0.3,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'iconHeight':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2EC00492_3DAC_D11B_41C1_3C5962380AB0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED5C60E_3DEC_0588_41A0_011348AD07E1",
   "pitch": 8.69,
   "hfov": 8.59,
   "yaw": 90.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32431332_3DB5_B718_41C0_373EC5C098B6",
 "data": {
  "label": "Info 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37172EE4_3D9B_D13F_4195_17E59F6BD4E0_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 90.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.59,
   "pitch": 8.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_370C5B83_3D9B_77F9_41BB_22930217CAC4, this.camera_2E0FDDC0_3E7A_76B5_41C6_8DA33F42604E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2ED0C60E_3DEC_0588_41B3_E4CCBC111259",
   "pitch": -5.46,
   "hfov": 7.72,
   "yaw": -80.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32218833_3DB4_F118_41A1_9F58D2E40C0C",
 "data": {
  "label": "Circle 01a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37127A85_3D9C_D1F8_41AF_82D7C736087B_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -80.1,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.72,
   "pitch": -5.46
  }
 ]
},
{
 "paddingLeft": 0,
 "id": "Image_33DC212F_3DDC_3F88_41B2_B2BDCEED70ED",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "100%",
 "minWidth": 1,
 "url": "skin/Image_33DC212F_3DDC_3F88_41B2_B2BDCEED70ED.png",
 "class": "Image",
 "top": "10.5%",
 "borderSize": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "maxWidth": 699,
 "borderRadius": 0,
 "shadow": false,
 "maxHeight": 323,
 "verticalAlign": "middle",
 "height": "68%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2615"
 },
 "paddingTop": 0,
 "minHeight": 1
},
{
 "rowCount": 6,
 "frameCount": 22,
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
 "id": "AnimatedImageResource_31750311_3E6E_33D7_41C1_824F87317A0E",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
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
 "id": "AnimatedImageResource_2ED2260E_3DEC_0588_418F_E1B629BD73C9",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
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
 "id": "AnimatedImageResource_2ED6F5FF_3DEC_0688_41BC_B8736FCD2878",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
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
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
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
 "id": "AnimatedImageResource_2ED5260E_3DEC_0588_41B7_BFCA54ADB729",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
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
 "id": "AnimatedImageResource_2ED2C60E_3DEC_0588_41CE_92D00E9032F5",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
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
 "id": "AnimatedImageResource_2ED6160E_3DEC_0588_41C9_1E59C412BD1C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
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
 "id": "AnimatedImageResource_2ED7D60E_3DEC_0588_41C7_E6C9FCC3CA8D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
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
 "id": "AnimatedImageResource_2ED7760E_3DEC_0588_41CC_0E0E1AE47B87",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
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
 "id": "AnimatedImageResource_2ED7260E_3DEC_0588_41C2_268DC48144B5",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
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
 "id": "AnimatedImageResource_2ED4F60E_3DEC_0588_41CC_98B98FE2D819",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
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
 "id": "AnimatedImageResource_2ED4960E_3DEC_0588_4184_D423FDFEBE9D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
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
 "id": "AnimatedImageResource_2ED5C60E_3DEC_0588_41A0_011348AD07E1",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
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
 "id": "AnimatedImageResource_2ED0C60E_3DEC_0588_41B3_E4CCBC111259",
 "frameDuration": 41
}],
 "paddingTop": 0,
 "children": [
  "this.MainViewer",
  "this.IconButton_310691D9_3DDC_3E88_41AD_868DDF4ECD86",
  "this.Container_31709CA9_3E6A_76F7_41B7_4C144004C589",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "paddingLeft": 0,
 "height": "100%",
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scripts": {
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "class": "Player",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "paddingBottom": 0,
 "width": "100%",
 "start": "this.playAudioList([this.audio_36074079_3D9B_5109_4194_2CC55ACBB41F]); this.init()",
 "borderRadius": 0,
 "shadow": false,
 "gap": 10,
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "propagateClick": false,
 "buttonToggleMute": "this.IconButton_310691D9_3DDC_3E88_41AD_868DDF4ECD86",
 "desktopMipmappingEnabled": false,
 "overflow": "visible",
 "minHeight": 20,
 "data": {
  "name": "Player445"
 }
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
