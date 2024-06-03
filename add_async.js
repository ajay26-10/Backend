function async(add){
    console.log("Multiplied");
    setTimeout(function(){
                        d=add(5,6);
                        console.log(d);
                        
                        },3000);
                    }

                        function add(a, b) {
    c=a*b;
    return (c);
}


async(add);