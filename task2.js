function getSumOfNumber (number,type = 'odd') {
    let sum = 0;
    let i = 0;

    console.log(typeof number)

    if (typeof number !== 'number') {
      sum = NaN;
      return sum;
    }
    while (i <= number) {
      if (type === '') {
        sum+=i
        
      } else if (type === 'even' && i % 2 === 0) {
        sum+=i
        
      } else if (type === 'odd' && i % 2 === 1) {
        sum+=i
      }
      i++
}
return sum;
}

console.log(getSumOfNumber(10, ''))
