/**
 * Função genérica para buscar dados de uma URL e retornar o resultado como um objeto do tipo T.
 * @template T O tipo dos dados esperados.
 * @param url A URL de onde os dados serão buscados.
 * @returns Uma Promise que resolve para um objeto do tipo T ou `null` em caso de erro.
 */

export default async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    const json = await response.json();
    if (!response.ok) {
      throw new Error('Erro: ' + response.status);
    }
    return json;
  } catch (error) {
    if (error instanceof Error) console.error('fetchData: ' + error.message);
    return null;
  }
}
