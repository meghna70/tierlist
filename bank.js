const bank= document.querySelector('#bank');
console.log("hi bank")

bank.ondragover = (event)=>
    event.preventDefault();

const onDropCard= (event)=>{
   console.log("bank drop")
   const id = event.dataTransfer.getData('id');
   const target=document.getElementById(id);
   console.log(target);
   bank.appendChild(target); 
} 

bank.ondrop = onDropCard;

