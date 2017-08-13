function initialize(){
    
}

function startDrag(e){
    e.dataTransfer.setData("source", e.target.src); 
}

function allowDrag(e){
    e.preventDefault();
}

function dropElement(e){
    e.preventDefault();
    var imgSrc = e.dataTransfer.getData("source");
    var newImg = document.createElement("img");
    newImg.src = imgSrc;
    e.target.appendChild(newImg);
}