// Using Quill, an open source html text editor

var myCustomToolBar = [
    ['bold', 'italic', 'underline', 'font', 'align', 'image', 'video', 'script', 'size', ]
];
var options = {
    theme: 'snow',
    debug: 'info',
    readOnly: false,
    placeholder: 'what do you feel now?',
    modules: {
        toolbar: myCustomToolBar
    }
};
var editor = new Quill('.editor', options);

function getEditorContents() {
    //console.log(editor.root.innerHTML);
    // use this method in the case you need to use plain html text.
}
var textObject;
var JSONstring;
var recievedJSON;
document.getElementById('subButton').addEventListener('click', clicked => {
    textObject = editor.getContents(0);
    JSONstring = JSON.stringify(textObject);
});

var ajax = new XMLHttpRequest();
this.onreadystatechange = function() {
    if (this.raedyState == 4 && this.status == 200) {
        recievedJSON = this.JSON.parse(ajax.responseText);
        var postBoardWindow = this.window.open('file:///C:/Users/INSPIRON/Desktop/shareYourPost/postBoard.html');
        postBoardWindow.getElementsByClassName('board').innerHTML = this.recievedJSON;
    } else {
        var postBoardWindow = this.window.open('file:///C:/Users/INSPIRON/Desktop/shareYourPost/postBoard.html');
        postBoardWindow.getElementsByClassName('board').innerHTML = this.recievedJSON;
    }
}
ajax.open('POST', '/database.php', true);
ajax.send(JSONstring);
