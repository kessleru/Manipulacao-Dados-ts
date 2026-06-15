// import './style.css';
import fetchData from './fetchData';
import normalizarTransacao from './normalizarTransacao';

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    'https://api.origamid.dev/json/transacoes.json'
  );

  if (!data) return;

  const transacoes = data.map(normalizarTransacao);

  preencherTabela(transacoes);
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector('#transacoes tbody') as HTMLTableElement;

  if(!tabela) return;
  
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
