const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

var contador = 0;

function contarOvejas(ovejas) {
  return ovejas.filter((oveja) => {
    const regexA = /a/i;
    const regexN = /n/i;
    let resultA = regexA.test(oveja.name);
    let resultN = regexN.test(oveja.name);
    return oveja.color === "rojo" && resultA && resultN;
  });
}

console.log(contarOvejas(ovejas));
