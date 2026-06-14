/**
 * Converte uma string no formato "dd/MM/yyyy HH:mm" para um objeto Date.
 * Exemplo:
 * "25/12/2023 14:30" -> Date(2023, 11, 25, 14, 30)
 * @param texto A string a ser convertida.
 * @returns O objeto Date correspondente ou `null` se a conversão falhar.
 */

export default function stringToDate(texto: string): Date | null {
  const [data, tempo] = texto.split(' ');
  const [dia, mes, ano] = data.split('/').map(Number);
  const [hora, minuto] = tempo.split(':').map(Number);
  if (isNaN(dia) || isNaN(mes) || isNaN(ano) || isNaN(hora) || isNaN(minuto)) {
    return null;
  }
  return new Date(ano, mes - 1, dia, hora, minuto);
}