let ajay = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve(`Async-Await function called successfully!`)
    },10000)
});

async function asynchr(){
    let result = await ajay;
    // console.log(`Result:`)
    console.log(result);
    
}

asynchr();
console.log(`Result:`)