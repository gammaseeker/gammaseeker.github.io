(function(){
    // Initialize Firebase
    
        var config = {
            apiKey: "AIzaSyDNnreA9L89hgbGbZm333oF5tVBrZYcjlo",
            authDomain: "test-54f7f.firebaseapp.com",
            databaseURL: "https://test-54f7f.firebaseio.com",
            projectId: "test-54f7f",
            storageBucket: "test-54f7f.appspot.com",
            messagingSenderId: "564818280226"
        };
        firebase.initializeApp(config);

        //Get elements
        const preObject = document.getElementById('object');
        const ulList = document.getElementById('list');

        //Create references
        const dbRefObject = firebase.database().ref().child('object');
        const dbRefList = dbRefObject.child('hobbies');

        //Sync object changes
        //dbRefObject.on('value', snap => console.log(snap.val()));
        dbRefObject.on('value', snap =>{
            preObject.innerText = JSON.stringify(snap.val(), null, 3);
        });

        //Sync list changes
        dbRefList.on('child_added', snap => {
            const li = document.createElement('li');
            li.innerText = snap.val();
            li.id = snap.key;
            ulList.appendChild(li);
        });

         dbRefList.on('child_changed',snap => {
             const liChanged = document.getElementById(snap.key);
             liChanged.innerText = snap.val();
         });

         dbRefList.on('child_removed',snap => {
             const liRemoved = document.getElementById(snap.key);
             liRemoved.remove();
         });
}());

 $( init );  
function init() {
  $('#makeMeDraggable').draggable({
        //containment: 'body',
        cursor: 'move',
        stop: function() {
            var currentPos = $(this).position();
            Cookies.set('top', currentPos.top);
            Cookies.set('left', currentPos.left)
            
            
        }
 });
}

function save() {
    var savedPosition = Cookies.get('top');
    var savedLeft = Cookies.get('left');
    alert('Top: ' + savedPosition + ' Left: ' + savedLeft);
    value = savedPosition + 'px';
    value2 = savedLeft + 'px';
    $(this).css({ 'top': value, 'left': value2 });           
}
