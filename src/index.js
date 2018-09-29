module.exports = function solveEquation(equation) {
 // var arr1 = equation.split('/ * x^2 | * x /');
  var arr = equation.split(' * x^2 ').join(' ').split(' * x ').join(' ').split(' ');

  const a = arr[0];
  const b = arr[1]+arr[2];
  const c = arr[3]+arr[4];
  const dis =  Math.pow(b, 2) - (4*a*c);
 
  let x = solve(a, b, dis);
  x = sort(x);

  return x;
}

function solve(a, b, dis) {
  return [Math.round((-1*b-Math.sqrt(dis))/(2*a)), Math.round((-1*b+Math.sqrt(dis))/(2*a))];
}

function sort(x) {
  return x.sort((left, right) => left - right);
}
