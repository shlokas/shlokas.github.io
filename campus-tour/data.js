var APP_DATA = {
  "scenes": [
    {
      "id": "0--bhavans-entrance-gate",
      "name": " Bhavan's Entrance Gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.020453813307371504,
          "pitch": 0.17434577743284763,
          "rotation": 0,
          "target": "1-inside-bhavans-walkway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.026272611422147207,
          "pitch": 0.007335020964724492,
          "title": "Bhavan's Entrance",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-inside-bhavans-walkway",
      "name": "Inside Bhavan's Walkway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.44247404440239,
          "pitch": 0.19923240841926848,
          "rotation": 0,
          "target": "2-spjain-and-spce"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4401218161950595,
          "pitch": 0.012307624959436936,
          "title": "Way to SPIT",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-spjain-and-spce",
      "name": "SpJain and SPCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.0781207676950828,
        "pitch": 0.26775998487754293,
        "fov": 1.2809123973965084
      },
      "linkHotspots": [
        {
          "yaw": -2.5671940424073743,
          "pitch": 0.24085777052541424,
          "rotation": 0.7853981633974483,
          "target": "1-inside-bhavans-walkway"
        },
        {
          "yaw": -0.006764845358681271,
          "pitch": 0.10544755213750534,
          "rotation": 0,
          "target": "3-spjain"
        },
        {
          "yaw": 1.0168804741494402,
          "pitch": 0.102994291942192,
          "rotation": 0,
          "target": "10-spit-amphitheatre"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.554526548026338,
          "pitch": 0.07708342833139525,
          "title": "Back to Entrance",
          "text": "Text"
        },
        {
          "yaw": -0.07343440360980935,
          "pitch": -0.03487502456968983,
          "title": "Towards SP Jain",
          "text": "Text"
        },
        {
          "yaw": 1.0115578740279254,
          "pitch": -0.0961412049415884,
          "title": "Towards Amphitheatre",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-spjain",
      "name": "SPJain",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.505369867693675,
          "pitch": 0.1377002969130139,
          "rotation": 0,
          "target": "4-spit-building"
        },
        {
          "yaw": -1.5969128792758802,
          "pitch": 0.15218186550615798,
          "rotation": 0,
          "target": "2-spjain-and-spce"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9200992537092372,
          "pitch": 0.0815664205885902,
          "title": "SP Jain",
          "text": "Text"
        },
        {
          "yaw": 1.5225467573512255,
          "pitch": -0.053427761860792344,
          "title": "Towards SPIT",
          "text": "Text"
        },
        {
          "yaw": -1.5851071672934438,
          "pitch": -0.021956789906106167,
          "title": "Back Towards Entrance",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-spit-building",
      "name": "SPIT Building",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5743600159877866,
          "pitch": 0.1605576331241405,
          "rotation": 0,
          "target": "3-spjain"
        },
        {
          "yaw": -0.2934184352375304,
          "pitch": 0.08728238530866861,
          "rotation": 0,
          "target": "5-spit-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5802614425784487,
          "pitch": -0.012622113051019568,
          "title": "Back to SPJain",
          "text": "Text"
        },
        {
          "yaw": 0.6351462088045281,
          "pitch": -0.30131021750216114,
          "title": "SPIT",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-spit-entrance",
      "name": "SPIT Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5766625748604195,
          "pitch": 0.1561171441306719,
          "rotation": 0,
          "target": "9-spit-volleyball"
        },
        {
          "yaw": -0.03539328843716305,
          "pitch": -0.004285688056594239,
          "rotation": 0,
          "target": "6-spit-main-entrance"
        },
        {
          "yaw": 1.566305147406963,
          "pitch": 0.1654705383795445,
          "rotation": 0,
          "target": "4-spit-building"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5722480079891117,
          "pitch": -0.026048232436281182,
          "title": "Towards Volleyball Court",
          "text": "Text"
        },
        {
          "yaw": -0.03514277022743606,
          "pitch": -0.17706793052418668,
          "title": "Enter SPIT",
          "text": "Text"
        },
        {
          "yaw": 1.5603937271616868,
          "pitch": 0.020759816476271453,
          "title": "Back to SPJain",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-spit-main-entrance",
      "name": "SPIT Main Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0664461107559386,
          "pitch": 0.11832535585850223,
          "rotation": 0,
          "target": "5-spit-entrance"
        },
        {
          "yaw": -0.38268582729198286,
          "pitch": 0.19560724884943959,
          "rotation": 11.780972450961727,
          "target": "7-spit-quad"
        },
        {
          "yaw": 0.34027902192062065,
          "pitch": 0.17728749910112107,
          "rotation": 1.5707963267948966,
          "target": "11-spit-canteen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.068019284341135,
          "pitch": -0.04412079352755782,
          "title": "Go Back",
          "text": "Text"
        },
        {
          "yaw": -0.3819882962069787,
          "pitch": 0.03926985849375697,
          "title": "Towards Quadrangle<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(SabhaGriha)</div>",
          "text": "Text"
        },
        {
          "yaw": 0.33602764525045714,
          "pitch": 0.013050594190689324,
          "title": "Canteen",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-spit-quad",
      "name": "SPIT Quad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.664672387662522,
          "pitch": 0.008716912728093718,
          "rotation": 0.7853981633974483,
          "target": "6-spit-main-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6733253974649447,
          "pitch": -0.147034654174643,
          "title": "Back to SPIT Entrance",
          "text": "Text"
        }
      ]
    },
    {
      "id": "8-spit-seminar-hall",
      "name": "SPIT Seminar Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0119593589791975,
          "pitch": 0.20493127975997005,
          "rotation": 0.7853981633974483,
          "target": "11-spit-canteen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0138969183694542,
          "pitch": 0.03151314437585562,
          "title": "Back to Canteen",
          "text": "Text"
        },
        {
          "yaw": -0.4638544852493176,
          "pitch": 0.10572675468076831,
          "title": "Seminar Hall",
          "text": "Text"
        }
      ]
    },
    {
      "id": "9-spit-volleyball",
      "name": "SPIT Volleyball",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.016028539109690598,
          "pitch": 0.17207561096329727,
          "rotation": 0,
          "target": "10-spit-amphitheatre"
        },
        {
          "yaw": 2.623403789386191,
          "pitch": 0.20618983467362106,
          "rotation": 5.497787143782138,
          "target": "5-spit-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.01602853394688708,
          "pitch": 0,
          "title": "Towards Amphitheatre",
          "text": "Text"
        },
        {
          "yaw": -1.0719510424817376,
          "pitch": 0.062203811981,
          "title": "Volleyball Court",
          "text": "Text"
        },
        {
          "yaw": 2.6091765734150396,
          "pitch": 0.036247172201143485,
          "title": "Back to SPIT Entrance",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-spit-amphitheatre",
      "name": "SPIT Amphitheatre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.660277193008051,
          "pitch": 0.18335730206144163,
          "rotation": 5.497787143782138,
          "target": "9-spit-volleyball"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2713608475563838,
          "pitch": 0.11125106354960224,
          "title": "Bhavan's Lake",
          "text": "Text"
        },
        {
          "yaw": -1.6628897607888966,
          "pitch": 0.024855840754351988,
          "title": "Back to VolleyBall Court",
          "text": "Text"
        }
      ]
    },
    {
      "id": "11-spit-canteen",
      "name": "SPIT Canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07381694933854277,
          "pitch": 0.19963097655332618,
          "rotation": 4.71238898038469,
          "target": "8-spit-seminar-hall"
        },
        {
          "yaw": 1.7054010514476543,
          "pitch": 0.20289935046744567,
          "rotation": 0,
          "target": "6-spit-main-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.06792191112484858,
          "pitch": 0.03681874603447177,
          "title": "Seminar Hall",
          "text": "Text"
        },
        {
          "yaw": 2.6034333188974683,
          "pitch": 0.006754895316490206,
          "title": "Canteen",
          "text": "Text"
        },
        {
          "yaw": 1.7006606035375942,
          "pitch": 0.05366712754788061,
          "title": "Back to SPIT Entrance",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
