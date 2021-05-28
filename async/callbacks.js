function add(a, b){
    console.log(a + b);
}

function calculate(x){
   const a = x * 10;
   const b = 1 - x;
   add(a, b);
}

calculate(1);