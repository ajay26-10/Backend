function async(add){
    console.log("Multiplied");
    setTimeout(function(){
                        add(5,6)
                        },3000);
function add(a, b) {
    return (a * b);
}
}

async(add);