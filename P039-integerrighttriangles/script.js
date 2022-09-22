function maximisedTriangles() {
  let largest = -Infinity;
  let maxp = 2;

  for (let p = 2; p <= 1000; p++) {
    const triangles = [];
    for (let a = 1; a < p / 2; a++) {
      for (let b = 1; b < p / 2; b++) {
        if (Math.pow(p - a - b, 2) === Math.pow(a, 2) + Math.pow(b, 2)) {
          if (!triangles.includes(a) || !triangles.includes(b)) {
            triangles.push(a);
            triangles.push(b);
          }
        }
      }
    }

    if (triangles.length / 2 > largest) {
      largest = Math.floor(triangles.length / 2);
      maxp = p;
    }
  }

  return maxp;
}

console.log(maximisedTriangles());
