const cards= document.querySelectorAll('.card');
const createButton=document.getElementById("id");
// const bank= document.querySelector('#bank');

function addCard (event) {
  const card= createCard();
  const bank = document.querySelector('#bank');
  bank.appendChild(card);
}

const deleteCard= (event)=>{
    const del = window.confirm('do you want to delete this card?')
   if(del){
    event.target.remove();
   }
}

const createCard =() =>{
const card = document.createElement('div');
card.classList.add('card');
card.setAttribute('draggable', 'true');
card.style.display='block';
card.id= Date.now();
card.ondragstart= onDragStart;
card.ondragend = onDragEnd;
card.onclick = deleteCard;
addImg(card);
return card;
}

const addImg = (card) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/x-png, image/gif, image/jpeg');
  input.style.visibility='hidden';
  const cardStyles = window.getComputedStyle(document.querySelector('.card'));
  const cardHeight = parseInt(cardStyles.height);
  const cardWidth =  parseInt( cardStyles.width);
  console.log(cardHeight, cardWidth);
  input.onchange=()=>{
     const image = new Image ( cardWidth, cardHeight);
     const file = input.files[0];
     console.log(file);

     const reader = new FileReader();
     reader.onload = (event) =>{
        image.src= event.target.result;
        image.style.pointerEvents= 'none';
        card.appendChild(image);
     }
     reader.readAsDataURL(file);
  }
   input.click();
}

const onDragStart= (event)=>{
   event.dataTransfer.setData('id', event.target.id);
   console.log('picked up');
   setTimeout(()=>{
    event.target.style.visibility = 'hidden';
   }, 50)
}

const onDragEnd=(event)=>{
  console.log('drag ended');
  event.target.style.visibility = 'visible';
}

cards.forEach((card)=>
  {
    card.ondragstart= onDragStart;
    card.ondragend = onDragEnd;
    card.onclick = deleteCard;
  })