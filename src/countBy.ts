export interface CountList {
  [key: string]: number;
}

export default function countBy(arr: (string | number)[]) {
  return arr.reduce((acc: CountList, pagamento) => {
    if (acc[pagamento]) {
      acc[pagamento] += 1;
    } else {
      acc[pagamento] = 1;
    }
    return acc;
  }, {});
}
