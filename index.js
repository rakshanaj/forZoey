var allbtn=document.querySelectorAll(".drum");



for(i=0;i<=7;i++){
    allbtn[i].addEventListener("click",function scream(){
        //console.log(this.innerHTML);
        var n=this.innerHTML+".mp3";
        console.log(name);
        var name=new Audio("sounds/"+n);
        allbtn.addEventListener("click",name.play());
    });
}

/*
var raks=new Audio("sounds/raks.mp3");
        allbtn[0].addEventListener("click",raks.play());   
        */ 