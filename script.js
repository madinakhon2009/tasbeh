const number = document.getElementById("number");
let count = 0;

function add(){
    count++;
    number.innerText=count;
}
function minus(){
    
    number.innerText=count;
    if(count > 0){
       count--;  
    }
   
}