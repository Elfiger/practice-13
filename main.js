function calc(a, b, operation){
    switch(operation) {
        case 'add':
            return a+b;
            break;
        case 'multi':
            return a*b;
            break;
        case 'subtract':
            return a-b;
            break;
        default:
            return 'no operation';             
    }
}

console.log(calc(1,2,'add'));
console.log(calc(1,2,'multi'));
console.log(calc(3,2,'subtract'));