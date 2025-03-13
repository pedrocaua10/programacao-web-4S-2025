var A = [
  [3, 0, 1],
  [8, 2, 5],
  [9, 4, 7],
];
console.log("Matriz Original:");
for (let i = 0; i < A.length; i++) {
  console.log(A[i].join(" "));
}

console.log(" ");

function transporMatriz(A) {
  var matrizTransposta = [];

  for (let i = 0; i < A[0].length; i++) {
    var novaLinha = [];
    for (let j = 0; j < A.length; j++) {
      novaLinha.push(A[j][i]);
    }
    matrizTransposta.push(novaLinha);
  }

  return matrizTransposta;
}

var matrizTransposta = transporMatriz(A);

console.log("Matriz Transposta:");
for (let i = 0; i < matrizTransposta.length; i++) {
  console.log(matrizTransposta[i].join(" "));
}
