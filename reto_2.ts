// Es medianoche en Elm Street y necesitas dormir urgentemente. Intentas contar ovejas, pero las letras en tu mente están completamente desordenadas por culpa de Freddy.
// Tienes una cadena de texto caótica con letras mezcladas. Tu único escape es contar cuántas veces puedes formar la palabra "sheep" (oveja en inglés) antes de que Freddy te atrape en la pesadilla.
// Tu misión: Contar cuántas ovejas completas puedes formar con las letras disponibles.
// Crea una función countSheep(letters) que:
// Reciba un string con letras desordenadas
// Cuente cuántas veces se puede formar la palabra "sheep"
// Devuelva el número de ovejas completas que puedes contar
// Importante: Para formar "sheep" necesitas: s, h, e, e, p (la 'e' aparece 2 veces)

function countSheep(letters: string): number {
  let count_s = 0;
  let count_h = 0;
  let count_e = 0;
  let count_p = 0;

  for (const letter of letters) {
    switch (letter) {
      case "s":
        count_s++;
        break;
      case "h":
        count_h++;
        break;
      case "e":
        count_e++;
        break;
      case "p":
        count_p++;
        break;
      default:
        break;
    }
  }
  const realE = Math.floor(count_e / 2);
  console.log(realE);

  return Math.min(count_s, count_h, realE, count_p);
}

console.log(countSheep("sheepxsheeepy"));
