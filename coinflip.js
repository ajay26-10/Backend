function outcome(func){
    console.log("Outcome is : ")
    setTimeout(func,1000);
}
function coinFlip() 
{
    let randomNum = Math.random();
    if (randomNum < 0.5) {
      console.log("Heads");
    } else {
      console.log("Tails");
    }
  }
outcome(coinFlip);

