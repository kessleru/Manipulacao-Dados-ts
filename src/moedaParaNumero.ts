/**
 * Converte uma string representando um valor monetário para número.
 *
 * Exemplo:
 * "1.234,56" -> 1234.56
 *
 * @param moeda Valor monetário em formato de string.
 * @returns O número convertido ou `null` caso a conversão falhe.
 */

export default function moedaParaNumero(moeda: string): number | null {
  const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
  return isNaN(numero) ? null : numero;
}
