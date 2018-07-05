    function solonumeros(e){
    
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(Key);
    numeros="0123456789";
    especiales="8-37-39-46";

    tecla_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            tecla_especial= true;
        }
    }
    
    if(numeros.indexOf(teclado)==-1 && !tecla_especial){
        return false;
    }
  }


  function retornar(num){

    var anterior=document.fo.valores.value;

    document.getElementById ("valores").value = anterior+num;
  }

  function eliminar()