let input=document.getElementById("input")
let buttons=document.querySelectorAll("button")
let str="";
let arr=Array.from(buttons)
arr.map((button)=>{button.addEventListener("click",(e)=>{
    if(e.target.innerHTML=="="){
        str=eval(str);
        input.value=str
    }
    else if(e.target.innerHTML=="AC"){
        str="";
        input.value=str;
    }
    else{
       str+=e.target.innerHTML;
       input.value=str
    }
})
})