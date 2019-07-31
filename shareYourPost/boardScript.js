   var options = {
       theme: 'snow',
       modules: {
           toolbar: false
       },
       readOnly: true
   };
   var board = new Quill('.editor', options);

   var myMain;
   document.getElementById('bt').addEventListener('click', createCanvas => {
       //board.setText('Hello world');
   });
