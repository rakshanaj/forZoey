//keyboard press



document.addEventListener("keypress",function(event){
    console.log(event);
    makeSound(event.key);
    setTimeout(function(){
        alert("stop pushing keys on the keyboard ya stupic bitch");

    },2000);
    
});

function makeSound(k){
    switch(k){
        case '1': 
            var one=new Audio("sounds/raks.mp3");
            one.play();
        break; 
        case '2': 
            var two=new Audio("sounds/amma.mp3");
            two.play();
        break;
        case '3': 
            var three=new Audio("sounds/anjana.mp3");
            three.play();
        break;
    }
}

//button press

var allbtn=document.querySelectorAll(".drum");
for(i=0;i<=3;i++){
    allbtn[i].addEventListener("click",function(){
      
        //console.log(this.innerHTML);
        var n=this.innerHTML+".mp3";
        console.log(name);
        var name=new Audio("sounds/"+n);
        alert("play audio?");
        name.play();

    });
}























/*
var raks=new Audio("sounds/raks.mp3");
allbtn[0].addEventListener("click",raks.play());   


   for(i=0;i<=7;i++){
        allbtn[i].addEventListener("click",function scream(){

        }
   }*/