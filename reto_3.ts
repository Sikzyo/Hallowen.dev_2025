// Michael Myers ha dejado un patrón en su calendario…
// Cada año ataca en noche de Halloween (31 de octubre) o en cualquier viernes 13.
// Tu misión es encontrar todas las noches de terror de un año concreto 🩸
// Recibirás un año (por ejemplo 2025) y deberás devolver un array con todas las fechas en formato 'YYYY-MM-DD' donde Michael Myers podría atacar.
// Si no dan un año válido, devuelve un array vacío.
// Devuelve todas las fechas del año que sean 31 de octubre, y/o viernes 13.
// Las fechas deben estar ordenadas cronológicamente.
// El formato debe ser exactamente 'YYYY-MM-DD' (con ceros a la izquierda si hace falta).

function myersCalendar(year: number): string[] {
  if (year <= 0) {
    return [];
  }
  const calendar: string[] = [];
  for (let index = 0; index < 12; index++) {
    const date = new Date(year, index, 13);
    if (date.getDay() == 5) {
      let month = (date.getMonth() + 1).toString();
      if (month.length <= 1) month = "0" + month;
      calendar.push(`${year}-${month}-13`);
    }
    if (date.getMonth() == 9) {
      calendar.push(`${year}-10-31`);
    }
  }
  return calendar;
}

console.log(myersCalendar(2025));
