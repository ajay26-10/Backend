let sum = new Promise(function (resolve,reject){
    
    let a=4,b=6;
    let c=a+b;

    if(c>15){
        resolve();
    }
    else{
        reject();
    }
});

sum
    .then(function(){
        console.log("Sum is greater than 15");
    })
    .catch(function(){
        console.log("Sum is less than 15");
    })
    .finally(function(){
        console.log("The code is executed successfully.");
    });