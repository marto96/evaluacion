

function operacion(){
    
    var numero1 = document.getElementById('cajatexto1').value;
    var numero2 = document.getElementById('cajatexto2').value;
    var numero3 = document.getElementById('cajatexto3').value;
    var Resultado1 = document.getElementById('cajatexto4').value;
    var Resultado2= document.getElementById('cajatexto5').value;
   
      Resultado=((numero2*numero2)-4*numero1*numero3);
if(Resultado<0){

    alert("No hay solucion");

    }else{
        x1=(-numero2+Math.sqrt(Resultado))/(2*numero1);
        x2=(-numero2-Math.sqrt(Resultado))/(2*numero1);
        
        
         Resultado1 = document.getElementById('cajatexto4').value = x1;
         Resultado2 = document.getElementById('cajatexto5').value = x2;
    }
    return false;

       
}