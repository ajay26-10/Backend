function getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/4')
    .then(function(result){
        return result.json();
    })
    .then (function(json){
        console.log(json)
    })
    .catch(function(error){
        console.log(error);
    })
}

getData();
