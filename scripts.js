/* innerHTML = div , h , buttons 
siqueremos modificar el valor de un input lo hacemos asi = document.getElementById('data').value = numero
} */

function pintarNumero(numero){
   // document.getElementById('data').value = numero
   pintarDatos(numero)
}

function pintarOperador(operador){
    //document.getElementById('data').value = operador
    pintarDatos(` ${operador} `)
}

function pintarDatos(dato){
    let valorInput = document.getElementById('data')
    //valorInput.value = valorInput.value + dato
    valorInput.value = `${valorInput.value}${dato}`

}

function limpiar(){
    document.getElementById('data').value = null
}

function mostrarResultado(){
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split(' ')

   /*
    if (arreglo[1] == '+') {
        let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
        document.getElementById('data').value = suma
    }
    else if (arreglo[1] =='-') {
        let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
        document.getElementById('data').value = resta
    } 
    else if (arreglo[1] =='*') {
        let multiplicacion = parseInt(arreglo[0]) * parseInt(arreglo[2])
        document.getElementById('data').value = multiplicacion
    } 
    else if (arreglo[1] =='/') {
        let division = parseInt(arreglo[0]) / parseInt(arreglo[2])
        document.getElementById('data').value = division
    }
    else{
        alert("Esa optcion no Existe")
    }       */
    
    switch (arreglo[1]) {
        case '+':
            let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
            document.getElementById('data').value = suma
        break;
        
       case '-':   
            let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
            document.getElementById('data').value = resta
        break;

        case '*':
            let multiplicacion = parseInt(arreglo[0]) * parseInt(arreglo[2])
            document.getElementById('data').value = multiplicacion
        break;

        case '/':
            let division = parseInt(arreglo[0]) / parseInt(arreglo[2])
            document.getElementById('data').value = division
            break;
    }
    
}

function dias(idButton){
    let dia = prompt("Escribe tu día favorito")
   

    switch (dia) {

        case 'lunes':
            alert ("Tu dia es lunes es el de mas pereza ")
            break;

        case 'martes':
            alert ("Tu dia es Martes es un dia lleno de sorpresas ")
            break;

        case 'miercoles':
            alert ("Tu dia es Miercoles es la mitad del hombligo ")
            break;

        case 'jueves':
            alert ("Tu dia es Jueves es el de relajarse ")
            break;

        case 'viernes':
            alert ("Tu dia es Viernes es dia de felicidad ")
            break;

        case 'sabado':
            alert ("Tu dia es Sabado es el dia de fiestas ")
            break;

         case 'domingo':
            alert ("Tu dia es Domingo es el dia de familia ")
            break;
           
        
    }

}

   

    