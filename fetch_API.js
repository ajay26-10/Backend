async function fetchData(url) {
    try{
        const response = await fetch(url);
        const result =  await response.json();
        console.log(result);
    } catch(error){
        console.log(error);
    }
}

fetchData("https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=f60b64a1d140af3a053647d5ef319ab2&units=metric");


// result.main.temp