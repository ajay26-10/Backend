fetch('https://jsonplaceholder.typicode.com/todos/69')
.then(response=>response.json())
.then(json =>console.log(json))
.catch(error=>{
    console.log("Error");
});
