async function data(){
    let result = await fetch('https://jsonplaceholder.typicode.com/todos/69');
    let d = await result.json();
    console.log(d)
}
data();