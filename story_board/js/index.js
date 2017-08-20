$(handleDragStop);
$(init);

function init() {
    $('.tick').draggable({
        containment: '.subRow',
        cursor: 'move',
        snap: '.subCol',
        stop: function(event, ui){
            var currentPos = $('#makeMeDraggable').position();
            Cookies.set('position', currentPos.top );
            alert(Cookies.get('position'));
            handleDragStop(event, ui);
        }
    });
}

function handleDragStop(event, ui) {
    var offsetXPos = parseInt( ui.offset.left );
    var offsetYPos = parseInt( ui.offset.top );
    $Cookies.set('location', {x: offsetXPos, y: offsetYPos});
}

function initialize(){

    database = firebase.database();

    colMaster = document.getElementsByClassName("colContainer");   

}

function writeData(){
    firebase.database().ref().set({

    });
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
 