const sum = function(fromN, toN) {

  let sumTotal = fromN;

  if (fromN === toN) {
    return sumTotal;
  }

  return sumTotal += sum(fromN + 1, toN);

};

module.exports = sum;
