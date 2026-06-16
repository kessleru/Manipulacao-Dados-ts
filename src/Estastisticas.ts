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
  public semana;
  public melhorDia;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
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

  private setSemana() {
    const semana = {
      ['Domingo']: 0,
      ['Segunda']: 1,
      ['Terça']: 2,
      ['Quarta']: 3,
      ['Quinta']: 4,
      ['Sexta']: 5,
      ['Sábado']: 6,
    };
    for (let i = 0; i < this.transacoes.length; i++) {
      const day = this.transacoes[i].data?.getDay?.();
      if (day === 0) semana['Domingo'] += 1;
      if (day === 1) semana['Segunda'] += 1;
      if (day === 2) semana['Terça'] += 1;
      if (day === 3) semana['Quarta'] += 1;
      if (day === 4) semana['Quinta'] += 1;
      if (day === 5) semana['Sexta'] += 1;
      if (day === 6) semana['Sábado'] += 1;
    }
    return semana;
  }

  private setMelhorDia() {
    return Object.entries(this.semana).sort((a, b) => {
      return b[1] - a[1];
    })[0];
  }
}
