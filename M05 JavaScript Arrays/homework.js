/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
 
}


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var tamaño = array.length
   return array[tamaño - 1]
}


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray = array.map((numeros) => {
      return numeros + 1
   })
   return nuevoArray

}


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabraJoin = palabras.join(' ')
   return palabraJoin
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var contieneElemento = array.includes(elemento)
   return contieneElemento 

}


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumNum = 0
   for(var i = 0; i < arrayOfNums.length; i++) {
      sumNum = sumNum + arrayOfNums[i]
      
   }
return sumNum

  
}


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var i = 0
   var sumaNumero = 0
   var resultadoPromedio = 0
   do
   {
      sumaNumero = sumaNumero + resultadosTest[i]
      resultadoPromedio = sumaNumero / resultadosTest.length
      i++
   }
   while(i < resultadosTest.length)
   return resultadoPromedio

   
}


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   
   var mayor = -1000000000000000

   for(let i = 0; i< arrayOfNums.length; i++) {
      if(arrayOfNums[i] > mayor) {
         mayor = arrayOfNums[i]
      }
   }
   return mayor
}


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multiplicar = 1
   if(arguments.length === 0) {
      return 0
   } else if(arguments.length === 1) {
      return arguments[0]
   } else {
      for(let i = 0; i < arguments.length; i++) {
         multiplicar = multiplicar * arguments[i]
      }
      return multiplicar
      
   }
   


}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var nuevoArray = []
   nuevoArray = array.filter(number => number > 18)
   return nuevoArray.length
}



function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   
      
      if(numeroDeDia >= 2 && numeroDeDia <= 6) {
         return "Es dia laboral"
      } else {
         return "Es fin de semana"
      }
 
   

   
      
   
}




function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numeroString = num.toString()

   for(let i = 0; i < numeroString.length; i++) {
      if(numeroString[0] == 9) {
         return true
      } else {
         return false
      }
   }
   
   

}



function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
 
  var arrayCopia = array
  var esIgual = false

  for(var i = 0; i < array.length; i++) {
   for(var j = 0; j< arrayCopia.length; j++) {
      if(array[i] === arrayCopia[j]) {
         esIgual = true
      } else {
         esIgual = false 
         break
      }
   }
  }
  return esIgual
 
}



function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var founds = []
   
  for(let i = 0; i<array.length; i++) {
   if(array[i] === "Enero" || array[i] === "Noviembre" || array[i] === "Marzo") {
       founds.push(array[i])
   }
   
  }
   if(founds.length === 3) {
      return founds
   } else {
   
      return "No se encontraron los meses pedidos" 
     
   }
}

  


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   numeros = [0,1,2,3,4,5,6,7,8,9,10]
   const tablaSeis = numeros.map(numero => numero * 6)
   return tablaSeis
}



function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayores_a_cien = []
  array.map((numero) => {
      if(numero > 100) {
         mayores_a_cien.push(numero)
      }
   })
   return mayores_a_cien
}


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var retornado;
   var arregloValores = []
   for(let i = 0; i <= 9; i++) {
      num = num + 2
      arregloValores.push(num)
      if(num === i) {
         retornado = "Se interrumpió la ejecución"
         break
      } else if(arregloValores.length === 10){
         retornado = arregloValores
      }
     
   }
   return retornado
}







function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var retornado;
   var arregloValores = []
   for(let i = 0; i <= 9; i++) {
      if(i === 5) {
         continue
      } 
      num = num + 2
      arregloValores.push(num)
      retornado = arregloValores
      
     
   }
   return retornado

}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
