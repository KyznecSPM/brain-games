
const sum = (num) => {
  let result = 0;
  const stringNum = String(num);
  for (let i = 0; i < stringNum.length; i += 1) {
    result += Number(stringNum[i]);
  }
  return result;
};

const balanceNumber = (num) => {
  let sumNumber = sum(num);
  const stringNum = String(num);
  let balancedNumber = '';
  for (let i = stringNum.length; i > 0; i -= 1) {
    balancedNumber += Math.floor(sumNumber / i); //
    sumNumber -= Math.floor(sumNumber / i); //
  }

  return balancedNumber;
};

export default balanceNumber;
