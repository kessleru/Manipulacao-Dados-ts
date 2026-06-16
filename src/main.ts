// import './style.css';
import type { CountList } from './countBy';
import Estatisticas from './Estastisticas';
import fetchData from './fetchData';
import normalizarTransacao from './normalizarTransacao';

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    'https://api.origamid.dev/json/transacoes.json'
  );

  if (!data) return;

  const transacoes = data.map(normalizarTransacao);

  preencherTabela(transacoes);
  preencherEstatisticas(transacoes);
}

function preencherLista(lista: CountList, contaiderId: string): void {
  const containerElement = document.getElementById(contaiderId);
  if (!containerElement) return;

  Object.keys(lista).forEach((key) => {
    containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
  });
}

function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes);

  preencherLista(data.pagamento, 'pagamento');
  preencherLista(data.status, 'status');

  const totalElement = document.querySelector('#total') as HTMLSpanElement;
  if (!totalElement) return;
  totalElement.textContent = data.total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const diaElement = document.querySelector('#dia') as HTMLSpanElement;
  if (!diaElement) return;
  diaElement.textContent = data.melhorDia[0];
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector(
    '#transacoes tbody'
  ) as HTMLTableElement;

  if (!tabela) return;

  transacoes.forEach((transacao) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${transacao.nome}</td>
      <td>${transacao.email}</td>
      <td>R$ ${transacao.moeda}</td>
      <td>${transacao.pagamento}</td>
      <td>${transacao.status}</td>
    `;
    tabela.appendChild(tr);
  });
}

handleData();
