//Our code
var pi = Math.PI;

var sphereRadius = 15;

var coneBase = 11;
var coneHeight = 22;

var rectLength = 5;
var rectHeight = 11;
var rectWidth = 467;

// Volume of sphere
// v = 4/3 * pi * r^3
function volumeOfSphere(sphereRadius) {
  var sphereVol = (4/3) * (pi) * (Math.pow(sphereRadius, 3));
  return sphereVol;
}


// Volume of Cone
// v = pi * r^2 * h/3
function volumeOfCone(coneBase, coneHeight) {
  var coneVol = (pi) * (Math.pow(coneBase, 2)) * (coneHeight/3);
  return coneVol;
}

// Volume of Rectagular Prism
// v = w * h * l
function volumeOfRectPrism(rectWidth, rectHeight, rectLength) {
  var rectPrismVol = rectWidth * rectHeight * rectLength;
  return rectPrismVol;
}

// Bonus: Determine if sphere fits in cone
// ((coneHeight - sphereRadius) / sphereRadius) <== Math.sqrt(Math.pow(coneHeight, 2) + Math.pow(coneBase, 2)) / (coneBase)
function fitSphereCone(coneHeight, sphereRadius, coneBase) {
  if (((coneHeight - sphereRadius) / sphereRadius) >= Math.sqrt(Math.pow(coneHeight, 2) + Math.pow(coneBase, 2)) / (coneBase)) {
    return true;
  } else {
    return false;
  }
}

console.log(`The radius of the sphere is: ${volumeOfSphere(sphereRadius)}`);
console.log(`The volume of the cone is: ${volumeOfCone(coneBase, coneHeight)}`);
console.log(`The volume of the rectangular prism is: ${volumeOfRectPrism(rectWidth, rectHeight, rectLength)}`);
console.log(`Sphere fits in Cone: ${fitSphereCone(coneHeight, sphereRadius, coneBase)}`);