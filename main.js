//get memory-game-blocks
let blocks=document.querySelector(".memory-game-blocks");
let Name= document.querySelector(".name span");
let Points= document.querySelector(".points span");
let WrongTries= document.querySelector(".tries span");
let ControlButtons= document.querySelector(".control-buttons");
let SpanStart= document.querySelector(".control-buttons span");
let InputName= document.querySelector(".control-buttons input");
let UserName;
// access for variable time
let seconds= 0;
let minutes= 0;
document.querySelector(".seconds").innerHTML= `0${seconds}`;
document.querySelector(".minutes").innerHTML= `0${minutes}`;

SpanStart.onclick= function () {
  if(InputName.value != ""){
     UserName=InputName.value;
  }else{
    UserName= "Unknown";
  }
  // clear input
  InputName.value="";
  setTimeout(()=>Name.innerHTML=UserName,1000);
  // remove div from body
  ControlButtons.remove();

  // make function timer work
  let timer=  setInterval(() => Time(),1000);

}

let gameblock=Array.from(blocks.children);
let randm=Math.floor(Math.random()*gameblock.length);
let randomarr= [1,4,8,7,6,3,16,11,15,19,17,12,9,13,15,5,18,0,6,2];


   
 // create function randomize array
 function randomize(array) {
  let RandomArray=[];
   let current=gameblock.length;

    while(current>0){
        current--
    let randomval=Math.floor(Math.random()*gameblock.length)
    RandomArray.push(randomval) ;
  }
 return  array.forEach(function (ele,index) {
    ele.style.order=RandomArray[index];
 });
 }
randomize(gameblock);
//console.log(randomize(gameblock));

 // create sheker function
function TheSheker() {

  let ArrayIsFlipped=[];

  // get element clicked to element
  gameblock.forEach(function (ele) {

    // add events
    ele.addEventListener("click",function () {
    
      // add class plipped
      ele.classList.add("is-flipped");

     // filter flipped element 
     ArrayIsFlipped=  gameblock.filter((element) => element.classList.contains("is-flipped"));
     //console.log(ArrayIsFlipped);
     //console.log(ArrayIsFlipped);
      if(ArrayIsFlipped.length === 2){
        //console.log(ArrayIsFlipped);
         document.body.style.pointerEvents="none";

         // check if this two element is the same
         if(ArrayIsFlipped[0].dataset.technology === ArrayIsFlipped[1].dataset.technology){

          // make audio success work
          document.getElementById("success").play();

           // incress points
          Points.innerHTML=+(Points.innerHTML)+1;

           // add class is-thesame to corect answer
           ArrayIsFlipped[0].classList.add("is-thesame");
           ArrayIsFlipped[1].classList.add("is-thesame");
         }else{

          // make audio fail work
          document.getElementById("fail").play();
          // incress wrong tries
          WrongTries.innerHTML=+(WrongTries.innerHTML)+1;

          setTimeout(function () {
            ArrayIsFlipped[0].classList.remove("is-flipped");
            ArrayIsFlipped[1].classList.remove("is-flipped");
          },1000);
         }
         setTimeout(function () {
          
          // loop into game block and remove is-flipped class
          gameblock.forEach((ele) => ele.classList.remove("is-flipped"));

          // after check in remove style pointerEvents at body
          document.body.style.pointerEvents="";
         },1000);
      }
    });
    
  });
}  
 
TheSheker();
  

  function Time() { 
    seconds++;
    seconds < 10 ? document.querySelector(".seconds").innerHTML= `0${seconds}`: document.querySelector(".seconds").innerHTML= seconds;
    if(seconds == 60){
      seconds=0;
      document.querySelector(".seconds").innerHTML= `0${seconds}`;
      minutes++;
        if(minutes < 10){
          document.querySelector(".minutes").innerHTML= `0${minutes}`;
        }else{
          document.querySelector(".minutes").innerHTML= minutes;
        }      
    }  
  }

//`
