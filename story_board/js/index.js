function initialize(){
    
}

function startDrag(e){
    e.dataTransfer.setData("Text", e.target.id); 
}

function allowDrag(e){
    e.preventDefault();
}

function dropElement(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data));
}