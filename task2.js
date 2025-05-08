// Чувство, что моя программа очень большая и какая-то сомвесть неправильная. С учетом того чтом мы еще не проходили цикл while, думаю тут должно быть какое то другое решение
// Мне в общем не нравится, кажется что есть какой-то Math. который может считать все четные и нечетные или другая команда, но я решил делать из того что знаю


function getSumOfNumber (number,type) {
    let sum = 0;
    let i = 0;
    let y = 1;
    
    if (number == '') {
      sum = NaN;
      return sum;
    }
    while (i <= number) {
      if (type == '') {
        sum+=i
        i++
      } else if (type == 'even') {
        sum+=i
        i+=2
      } else if (type == 'odd' || type == undefined && y <= number) {
        sum+=y
        y+=2
        i=y
      }
}
return sum;
}

console.log(getSumOfNumber(10))