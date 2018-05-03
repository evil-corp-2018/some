function initScene() {
  gui = new dat.GUI();
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.z = 120;
  camera.position.y = 30;

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 1);
  document.body.appendChild(renderer.domElement);

  orbit = new THREE.OrbitControls(camera, renderer.domElement);
  orbit.enableZoom = true;

  lights = [];
  lights[0] = new THREE.PointLight(0xffffff, 1, 0);
  lights[1] = new THREE.PointLight(0xffffff, 1, 0);
  lights[2] = new THREE.PointLight(0xffffff, 1, 0);

  lights[0].position.set(0, 200, 0);
  lights[1].position.set(100, 200, 100);
  lights[2].position.set(-100, -200, -100);

  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);

  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight - 20);
  }, false);

  //  [[0,-1,"Fbx01",0,98.7,0
// [1,0,"Fbx01_Pelvis",0,0,0
// [2,1,"Fbx01_Spine",0,0,-10.2
// [3,2,"Fbx01_R_Thigh",0,-14.7,-10.2
// [4,3,"Fbx01_R_Calf",0,0,-43.8
// [5,4,"Fbx01_R_Foot",0,0,-47
// [6,5,"Fbx01_R_Toe0",0,0,-18
// [7,2,"Fbx01_L_Thigh",0,14.7,-10.2
// [8,7,"Fbx01_L_Calf",0,0,-43.8
// [9,8,"Fbx01_L_Foot",0,0,-47
// [10,9,"Fbx01_L_Toe0",0,0,-18
// [11,2,"Fbx01_Spine1",0,0,11.6
// [12,11,"Fbx01_Spine2",0,0,-11.5
// [13,12,"Fbx01_Spine3",0,0,-11.6
// [14,13,"Fbx01_Neck",0,0,-11.6
// [15,14,"Fbx01_Head",0,0,-6.6
// [16,15,"Fbx01_R_Eye",1.7,-3.3,-16.4
// [17,15,"Fbx01_L_Eye",1.7,3.3,-16.4
// [18,15,"Jaw",2.4,0,-8.1
// [19,14,"Fbx01_R_Clavicle",0,-3.1,-2.5
// [20,19,"Fbx01_R_UpperArm",0,0,-16.3
// [21,20,"Fbx01_R_Forearm",0,0,-22.9
// [22,21,"Fbx01_R_Hand",0,0,-26.4
// [23,22,"Fbx01_R_Finger4",0.8,-3.7,-10.2
// [24,23,"Fbx01_R_Finger41",0,0,-1.8
// [25,24,"Fbx01_R_Finger42",0,0,-2.5
// [26,22,"Fbx01_R_Finger3",0.8,-1.6,-10.1
// [27,26,"Fbx01_R_Finger31",0,0,-2.4
// [28,27,"Fbx01_R_Finger32",0,0,-2.3
// [29,22,"Fbx01_R_Finger2",0.7,0.4,-10.2
// [30,29,"Fbx01_R_Finger21",0,0,-2.8
// [31,30,"Fbx01_R_Finger22",0,0,-2.6
// [32,22,"Fbx01_R_Finger1",0.5,2.5,-10.4
// [33,32,"Fbx01_R_Finger11",0,0,-2.7
// [34,33,"Fbx01_R_Finger12",0,0,-2.4
// [35,22,"Fbx01_R_Finger0",-2.7,2.4,-3.3
// [36,35,"Fbx01_R_Finger01",0,0,-2
// [37,36,"Fbx01_R_Finger02",0,0,-3.2
// [38,14,"Fbx01_L_Clavicle",0,3.1,-2.5
// [39,38,"Fbx01_L_UpperArm",0,0,-16.3
// [40,39,"Fbx01_L_Forearm",0,0,-22.9
// [41,40,"Fbx01_L_Hand",0,0,-26.4
// [42,41,"Fbx01_L_Finger4",0.9,3.7,-9.3
// [43,42,"Fbx01_L_Finger41",0,0,-1.8
// [44,43,"Fbx01_L_Finger42",0,0,-2
// [45,41,"Fbx01_L_Finger3",0.9,1.6,-9.2
// [46,45,"Fbx01_L_Finger31",0,0,-2.8
// [47,46,"Fbx01_L_Finger32",0,0,-2.3
// [48,41,"Fbx01_L_Finger2",0.4,-0.4,-9.2
// [49,48,"Fbx01_L_Finger21",0,0,-3.1
// [50,49,"Fbx01_L_Finger22",0,0,-2.6
// [51,41,"Fbx01_L_Finger1",0.5,-2.5,-9.8
// [52,51,"Fbx01_L_Finger11",0,0,-2.4
// [53,52,"Fbx01_L_Finger12",0,0,-2.4
// [54,41,"Fbx01_L_Finger0",-2.7,-2.5,-2.4
// [55,54,"Fbx01_L_Finger01",0,0,-2.5
// [56,55,"Fbx01_L_Finger02",0,0,-2.9]]

          //  "Fbx01_R_Thigh", -14.7, -10.2, 0, [ //3
          //   "Fbx01_R_Calf", 0, -43.8, 0, [ //4
          //     "Fbx01_R_Foot", 0, -47, 0, [ //5
          //       "Fbx01_R_Toe0", 0, 0, 18, null //6
          //     ]
          //   ]
          // ],
          // "Fbx01_L_Thigh", 14.7, -10.2, 0, [ //7

  var bones2 = [
    "Fbx01", 0, 0, 0, [ //0
      "Fbx01_Pelvis", 0, 10.2, 0, [ //1
        "Fbx01_Spine", 0, 0, 0, [ //2
          "Fbx01_R_Thigh", -14.7, -10.2, 0, [ //3
            "Fbx01_R_Calf", 0, -43.8, 0, [ //4
              "Fbx01_R_Foot", 0, -47, 0, [ //5
                "Fbx01_R_Toe0", 0, 0, 18, null //6
              ]
            ]
          ],
          "Fbx01_L_Thigh", 14.7, -10.2, 0, [ //7
            "Fbx01_L_Calf", 0, -43.8, 0, [ //8
              "Fbx01_L_Foot", 0, -47, 0, [ //9
                "Fbx01_L_Toe0", 0, 0, 18, null //10
              ]
            ]
          ]
        ],
        "Fbx01_Spine1", 0, -11.6, 0, [ //11
          "Fbx01_Spine2", 0, 11.5, 0, [ //12
            "Fbx01_Spine3", 0, 11.6, 0, [ //13
              "Fbx01_Spine4", 0, 11.6, 0, [ //13.5
                "Fbx01_Spine5", 0, 11.6, 0, [ //13.75
                  "Fbx01_Neck", 0, 11.6, 0, [ //14
                    "Fbx01_Head", 0, 6.6, 0, [ //15
                      "Fbx01_R_Eye", -3.3, 16.4, 1.7, null, //16
                      "Fbx01_L_Eye", 3.3, 16.4, 1.7, null, //17
                      "Jaw", 0, 8.1, 2.4, null //18
                    ],
                    "Fbx01_R_Clavicle", -3.1, 2.5, 0, [ //19
                      "Fbx01_R_UpperArm", -16.3, 0, 0, [ //20
                        "Fbx01_R_Forearm", 0, -22.9, 0, [ //21
                          "Fbx01_R_Hand", 0, -26.4, 0, null //22
                        ]
                      ]
                    ],
                    "Fbx01_L_Clavicle", 3.1, 2.5, 0, [ //38
                      "Fbx01_L_UpperArm", 16.3, 0, 0, [ //39
                        "Fbx01_L_Forearm", 0, -22.9, 0, [ //40
                          "Fbx01_L_Hand", 0, -26.4, 0, null //41
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ];

  var muscles = [
    'y', 0, [
      'y', 9, [
        'x', 12.3, [
          'y', 40, 26, [
            'y', 40, 27, 28
          ]
        ], [
          'x', -12.3, [
            'y', 23.2, [
              'y', 34.8, [
                'y', 46.4, [
                  'y', 58, [
                    'y', 60, [
                      'y', 70, [
                        'x', 0, 19, 18
                      ], 20
                    ], 16
                  ], 15
                ], 14
              ], 13
            ], 12
          ], [
            'y', 40, 22, [
              'y', 15, 23, 24
            ]
          ]
        ]
      ], 11
    ], [
      'x', 0, [
        'y', -43.8, 7, [
          'y', -90, 8, 9
        ]
      ], [
        'y', -43.8, 3, [
          'y', -90, 4, 5
        ]
      ]
    ]
  ];

  var bones = bones2.reduce(tree_walk, [[], []]);
  bones = bones[1];
  console.log(bones.map(function(a, i){ return i + ' ' + a.name }));

  var mergeGeom2 = new THREE.Geometry();

  var geometry = new THREE.CylinderGeometry( 15, 10, 60, 6, 6 );
  geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 30, 0) );
  mergeGeom2.merge( geometry, geometry.matrix );

  var geometry = new THREE.CylinderGeometry( 7, 3, 50, 6, 6 );
  geometry.applyMatrix( new THREE.Matrix4().makeTranslation(-19, 35, 0) );
  mergeGeom2.merge( geometry, geometry.matrix );

  var geometry = new THREE.CylinderGeometry( 7, 3, 50, 6, 6 );
  geometry.applyMatrix( new THREE.Matrix4().makeTranslation(19, 35, 0) );
  mergeGeom2.merge( geometry, geometry.matrix );

  var geometry = new THREE.CylinderGeometry( 7, 3, 96, 6, 6 );
  geometry.applyMatrix( new THREE.Matrix4().makeTranslation(14, -42, 0) );
  mergeGeom2.merge( geometry, geometry.matrix );

  var geometry = new THREE.CylinderGeometry( 7, 3, 96, 6, 6 );
  geometry.applyMatrix( new THREE.Matrix4().makeTranslation(-14, -42, 0) );
  mergeGeom2.merge( geometry, geometry.matrix );

  var geometry = new THREE.SphereGeometry( 12, 16, 16 );
  geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 72, 0) );
  mergeGeom2.merge( geometry, geometry.matrix );
  //mergeGeom2.normalize();

  for ( var i = 0; i < mergeGeom2.vertices.length; i ++ ) {
    muscles.reduce(muscles_walk, [mergeGeom2, mergeGeom2.vertices[i]]);
  }

  var material = new THREE.MeshPhongMaterial( {
    skinning : true,
    color: 0x156289,
    emissive: 0x072534,
    side: THREE.DoubleSide,
    shading: THREE.FlatShading
  } );

  var mesh = new THREE.SkinnedMesh( mergeGeom2,	material );
  var skeleton = new THREE.Skeleton( bones );

  var folder = gui.addFolder( "General Options" );
  folder.add( skeleton, "pose" );
	folder.__controllers[0].name( ".pose()" );

  mesh.add( bones[0] );

  mesh.bind( skeleton );

  window.skeletonHelper = new THREE.SkeletonHelper( mesh );
  window.skeletonHelper.material.linewidth = 5;
  scene.add( window.skeletonHelper );

  mesh.scale.multiplyScalar( 1 );
  scene.add( mesh );
}

function tree_walk(arr, a, i) {
  var currentBone = arr[0].length ? arr[0][arr[0].length - 1] : null;

  if(i % 5 === 0) {
    var bone = new THREE.Bone();
    bone.name = a;
    bone.id = i;
    if(currentBone) {
      currentBone.add(bone);
    }
    arr[0].push(bone);
    arr[1].push(bone);
    folder = gui.addFolder( "Bone " + a );

    folder.add( bone.rotation, 'x', - Math.PI, Math.PI );
    folder.add( bone.rotation, 'y', - Math.PI, Math.PI );
    folder.add( bone.rotation, 'z', - Math.PI, Math.PI );

    folder.__controllers[ 0 ].name( "rotation.x" );
    folder.__controllers[ 1 ].name( "rotation.y" );
    folder.__controllers[ 2 ].name( "rotation.z" );
  } else if(i % 5 === 1) {
    currentBone.position.x = a;
  } else if(i % 5 === 2) {
    currentBone.position.y = a;
  } else if(i % 5 === 3) {
    currentBone.position.z = a;
  } else if(i % 5 === 4) {
    if(a) {
      arr = a.reduce(tree_walk, arr);
    }
    arr[0].pop();
  }

  return arr;
}

function muscles_walk(arr, a, i) {
  arr[i + 2] = a;
  var n = 0;
  if(i == 3) {
    n = arr[1][arr[2]] > arr[3] ? 4 : 5;
    if(Array.isArray(arr[n])) {
      arr = arr[n].reduce(muscles_walk, arr);
    } else {
      arr[0].skinIndices.push(new THREE.Vector4(arr[n], 0, 0, 0));
      arr[0].skinWeights.push(new THREE.Vector4(1, 0, 0, 0));
    }
  }

  return arr;
}

function render () {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
}

initScene();
render();
