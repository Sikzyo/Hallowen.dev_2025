/* Regan ha sido poseída y ahora habla en un lenguaje extraño 😱. El padre Karras ha descubierto que cuando Regan está poseída, invierte completamente las palabras que dice, pero mantiene el orden de las frases.

Tu misión es crear un programa que traduzca los mensajes poseídos de Regan al lenguaje humano normal.
 */

function translatePossessed(message: string): string {
  const words = message.split(" ");
  const validWord = words.filter((a) => a !== "");
  const realMessage = [];

  if (!message || validWord.length === 0) return "";

  for (const word of words) {
    const splitWord = word.split("");
    const realWord = splitWord.reverse();
    const palabra = realWord.join("");
    realMessage.push(palabra);
  }
  return realMessage.join(" ");
}

translatePossessed("");
