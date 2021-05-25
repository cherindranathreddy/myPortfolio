console.log("js linked");
let mode;
let themeDot1 = document.getElementById("light-mode");
let themeDot2 = document.getElementById("blue-mode");
let themeDot3 = document.getElementById("green-mode");
let themeDot4 = document.getElementById("purple-mode");

themeDot1.addEventListener("click",function(){
    mode = "light";
    setTheme(mode);
});

themeDot2.addEventListener("click",function(){
    mode = "blue";
    setTheme(mode);
});

themeDot3.addEventListener("click",function(){
    mode = "green";
    setTheme(mode);
});

themeDot4.addEventListener("click",function(){
    mode = "purple";
    setTheme(mode);
});




function setTheme(mode){
    if(mode=="light"){
        document.getElementById("theme-style").href="light.css";
    }
    else if(mode=="blue"){
        document.getElementById("theme-style").href="blue.css";
    }
    else if(mode=="green"){
        document.getElementById("theme-style").href="green.css";
    }
    else{
        document.getElementById("theme-style").href="purple.css";
    }
}