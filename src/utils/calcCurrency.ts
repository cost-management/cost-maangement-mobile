const calcCurrency = (amount: string, currentAmount: string) => {
  let znak = '';
  let currentNanosLength = 0;
  let nanosLength = 0;
  const [currentUnits, currentNanos] = currentAmount
    .split('.')
    .map((number, id) => {
      if (id !== 1) {
        return parseInt(number, 10);
      } else {
        currentNanosLength = number.length;
        return parseInt(parseInt(number, 10).toFixed(2), 10);
      }
    });
  let [units, nanos] = amount.split('.').map((number, id) => {
    if (id !== 1) {
      return parseInt(number, 10);
    } else {
      nanosLength = number.length;
      return parseInt(parseInt(number, 10).toFixed(2), 10);
    }
  });
  nanos = nanos || 0;
  const currentNanosFixed =
    currentNanosLength === 1 && currentNanos < 10
      ? currentNanos * 10
      : currentNanos;
  nanos = nanos < 10 && nanosLength === 1 ? nanos * 10 : nanos;
  const operationIsSubtraction = amount[0] === '-';
  if (!operationIsSubtraction) {
    if (currentAmount[0] === '-') {
      if (currentNanos) {
        nanos -= currentNanos;
        if (nanos < 0) {
          nanos *= -1;
          units--;
        }
        units += currentUnits;
      } else {
        if (nanos) {
          nanos += currentNanos;
          units++;
          units += currentUnits;
        } else {
          units += currentUnits;
        }
      }
    } else {
      nanos += currentNanosFixed || 0;
      if (nanos >= 100) {
        nanos -= 100;
        units++;
      }
      units += currentUnits;
    }
  } else {
    if (currentAmount[0] === '-') {
      if (currentNanosFixed) {
        nanos += currentNanos;
        if (nanos >= 100) {
          nanos -= 100;
          units--;
        }
        units += currentUnits;
      } else {
        units += currentUnits;
      }
    } else {
      if (currentNanosFixed) {
        nanos -= currentNanosFixed;
        if (nanos < 0) {
          nanos *= -1;
          nanos -= 100;
          nanos *= -1;
          units++;
        } else {
          znak = '-';
        }
        units += currentUnits;
      } else {
        if (nanos) {
          nanos -= 100;
          nanos *= -1;
          units--;
          units += currentUnits;
        } else {
          units += currentUnits;
        }
      }
    }
  }
  return `${units === 0 ? znak : ''}${units}.${
    nanos < 10 ? `0${nanos}` : nanos || '00'
  }`;
};
export default calcCurrency;
