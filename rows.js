const rows=document.querySelectorAll('.row');

const color= [
        '#ff807b',
        '#febd7f',
        '#fefe7f',
        '#7fff80',
        '#7fc0f9',
        '#fd7ffd'
]

console.log('hi rows')
const onDragOver = (event)=>{
  event.preventDefault();
}

const onDrop = (event)=>{
  event.preventDefault();
  
  const cardDraggedID= event.dataTransfer.getData('id');
  const cardDragged= document.getElementById(cardDraggedID);
  const target= event.target;
  target.appendChild(cardDragged);
  console.log('dropped');

}

rows.forEach((row, index)=>{
  const label= row.querySelector('.label');
  label.style.backgroundColor= color[index];
  row.ondragover = onDragOver;
  row.ondrop = onDrop;
})

