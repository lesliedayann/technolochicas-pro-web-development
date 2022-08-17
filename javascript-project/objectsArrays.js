
// Room 2 

const persona1 ={
    nombre: 'Leslie',
    edad: 25,
    nacionalidad: 'mexicana',
    likesMusic: true,
    imprimeNombre: function(){
        console.log('1 Yo soy ', this.nombre );
    },
    mascota: {
        tipo: 'perro',
        raza: 'chichuahua',
        nombre: 'chiquis',
        imprimeNombre: function(){
            console.log('2 Yo soy ', this.nombre )
        }
    },
    idiomas: ['español', 'ingles', 'frances']
}

const persona2= {
    nombre: 'Vanya',
    edad: 15,
    nacionalidad: 'mexicana',
    likesMusic: true,
    mascota: {
        tipo: 'gato',
        raza: 'minino',
        nombre: 'michi' 
    },
    idiomas: ['español', 'ingles', 'frances', 'aleman']

}



persona1.imprimeNombre();
persona1.mascota.imprimeNombre()
// console.log("persona1", persona1)
// console.log('Funcion persona 1', persona1.imprimeNombre());
// console.log('Funcion persona 1', persona1.mascota.imprimeNombre());


console.log("Nombre de la persona 1", persona1.nombre)

console.log('Mascota de la persona 2', persona2.mascota)
console.log('Idiomas persona 2', persona2.idiomas)

for(let vuelta= 0; vuelta < persona2.idiomas.length; vuelta ++){
    console.log('Persona 2 habla: ', persona2.idiomas[vuelta])
}


// console.log('Idiomas persona 2', persona2.idiomas[3])

// console.log("Edad persona 1", persona1['edad'] )
// console.log('Mascota de la persona 1', persona1.mascota.nombre)

// console.log('Nombre de la persona 2', persona2['nombre'])
// console.log('Mascota de la persona 2', persona2.mascota.nombre)


const room2 = [ persona1, persona2]

for(let vuelta= 0; vuelta < room2.length; vuelta ++){
    console.log('Nombre: ', room2[vuelta].nombre);
    console.log('Edad: ', room2[vuelta].edad);
}

const frutas = ['Sandia', 'manzana', 'pera', 'naranja', 'fresa'];

// Agregar piña a mi array de frutas
frutas.push('piña')
console.log('Mis frutas, agregando piña: ',frutas)

// Cambiar la primer fruta por higo
frutas[0]='Higo';
console.log('Mis frutas cambiando Sandia por Higo: ',frutas)

// Agregar frambuesa a mi array de frutas
frutas.push('frambuesa');
console.log('Mis frutas agregando frambuesa: ',frutas);

// Eliminar la primer fruta
frutas.shift(); 
console.log('Mis frutas removiendo el primer elemento: ',frutas);


const calificaciones = [ 10, 10, 6, 7, 10, 5, 4];

const reprobado = calificaciones.find( calificacion => calificacion < 6);

let valorInicial=0;
const sumaCalificaciones = calificaciones.reduce( (valorPrevio, valorActual) => valorPrevio + valorActual, valorInicial) 

console.log(sumaCalificaciones)
const promedio = sumaCalificaciones / calificaciones.length;

const arriba8= calificaciones.map((calificacion) => calificacion>=8);


const aprobados = calificaciones.filter((calificacion) => calificacion >= 6)
console.log( aprobados)
