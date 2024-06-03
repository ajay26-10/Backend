function asyn(num1,num2, mul){
    console.log("The result of the " +num1 +" * " +num2 +" is: ")
    setTimeout(mul,2000);
}

function mul(){
    let a=5, b=10;
    let c=a*b;
    console.log(c);
}

asyn(5,10,mul);