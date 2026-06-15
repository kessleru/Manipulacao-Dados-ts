type TransacaoValor = Transacao & { valor: number };

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes: Transacao[];
  public total: number;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }
  private setTotal() {
    const filtrado = this.transacoes.filter(filtrarValor);
    return filtrado.reduce((acc, transacao) => acc + transacao.valor, 0);
  }
}
