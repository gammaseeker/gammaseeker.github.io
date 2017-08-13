function initialize(){
    colMaster = document.getElementsByClassName("colContainer");   
}

function revealContent(contentId){
    disableAllItm();
    document.getElementById(contentId).style.display = "block";
}

function disableAllItm(){
    for(var i = 0; i < colMaster.length; i++){
        colMaster[i].style.display = "none";
    }
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
 