// Using Quill, an open source html text editor

var myCustomToolBar = [
    ['bold', 'italic', 'underline', 'font', 'align', 'image', 'video', 'script', 'size', ]
];
var options = {
    theme: 'snow',
    debug: 'info',
    readOnly: false,
    modules: {
        toolbar: myCustomToolBar
    }

};
var editor = new Quill('.editor', options);

document.getElementById('subButton').addEventListener('click', clicked => {
    var dataWithDeltaFormat = quill.getContetnts();
    console.log(dataWithDeltaFormat);
    alert("hello");
});