
function makeIdentity() {
    return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
}

function makeTranslation( tx, ty) {
    return [[1, 0, tx], [0, 1, ty], [0, 0, 1]];
}

function makeScaling(sx, sy){
    return [[sx, 0, 0], [0, sy, 0], [0, 0, 1]];
}
function makeRotation(a){//a - angle in degrees
    a = (a / 180) * Math.PI;
    return [[Math.cos(a), -Math.sin(a), 0], [Math.sin(a), Math.cos(a), 0], [0, 0, 1]];
}
function makeShear(shx, shy){
    return [[1, shx, 0], [shy, 1, 0], [0, 0, 1]];
}
console.log("Identity matrix: ");
console.table(makeIdentity());

console.log("Translation matrix: ");
console.table(makeTranslation(3, 3));//random values

console.log("Scaling matrix: ");
console.table(makeScaling(4, 2 ));

console.log("Rotation matrix: ");
console.table(makeRotation(30));//angle in degrees

console.log("Shear matrix: ");
console.table(makeShear(3, 2));

