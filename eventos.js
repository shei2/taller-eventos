document.getElementById('div').addEventListener('click',function(){
    alert('Hola! Soy el div!');
})

document.getElementById('boton').addEventListener('click',function(event) {
   
   
    event.stopPropagation();
    alert('Hola!');
   });
