import countBy from './countBy';

type TransacaoValor = Transacao & { valor: number };

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes: Transacao[];
  public total;
  public pagamento;
  public status;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
  }
  private setTotal() {
    const filtrado = this.transacoes.filter(filtrarValor);
    return filtrado.reduce((acc, transacao) => acc + transacao.valor, 0);
  }

  private setPagamento() {
    const pagamentos = this.transacoes.map((transacao) => transacao.pagamento);
    const total = countBy(pagamentos);
    return total;
  }

  private setStatus() {
    const status = this.transacoes.map((transacao) => transacao.status);
    const total = countBy(status);
    return total;
  }
}
