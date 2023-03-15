alert("BIENVENIDO/A AL CALCULADOR DE PROMEDIO DE NOTAS\nObs: Considere que la nota mínima es 10 y la máxima es 100.")
let cantidadNotas = Number(prompt(alert("Ingrese la candidad de notas a promediar del Alumno:")))
let sumaNotas = 0
let promedio = 0
let promedioObtenido = 0
let resultadoObtenido = ""

for (let contador = 0; contador < cantidadNotas; contador++ ){
    let nota = Number(prompt(alert("Ingrese Nota n°" + (contador + 1))))
    while (isNaN(nota) || nota < 10 || nota > 100){        
        alert("El valor ingresado no tiene el formato de una nota")
        nota = Number(prompt(alert("Ingrese Nota n°" + (contador + 1))))        
    }
    sumaNotas = sumaNotas + nota    
}

function calculaPromedio(notas, cantidad){
    promedio = notas / cantidad
    return promedio
} 
function evaluacion(promedio){  
    let resultado  
    if (promedio <= 60){
        resultado = ". El alumno ha reprobado la asignatura con una nota menor a 50 con rendimiento MALO"
     }else if(promedio >= 60 && promedio < 70){
        resultado = ". El alumno ha aprobado la asignatura con rendimiento POCO SATISFACTORIO. "
     }else if(promedio >= 70 && promedio < 80){
        resultado = ". El alumno ha aprobado la asignatura con rendimiento ACEPTABLE. "
     }else if(promedio >= 80 && promedio < 90){
        resultado = ". El alumno ha aprobado la asignatura con rendimiento SATISFACTORIO. "
     }else if(promedio >= 90 && promedio <= 100){
        resultado = ". El alumno ha aprobado la asignatura con rendimiento Excelente. "
     }
     return resultado
}

promedioObtenido = calculaPromedio(sumaNotas, cantidadNotas)
resultadoObtenido = evaluacion(promedioObtenido)
alert("El promedio de notas del alumno es: " + promedioObtenido + resultadoObtenido)


