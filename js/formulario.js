let btnRegistrar=document.getElementById('RegistrarTurno')

btnRegistrar.onclick = (event)=>{
    event.preventDefault()
    alert('Ya reservaste el turno')
};
/*

let nombre = prompt("Ingrese nombre");
let apellido = prompt("Ingresa el apellido");
let documento= prompt("Ingrese su numero de documento");
*/

/*
class Personita {
    constructor(nombrePaciente, apellidoPaciente, documentoPaciente) {
        this.nombreSession = nombrePaciente  ;
        this.apellidoSession = apellidoPaciente ;
        this.documentoSession = documentoPaciente;
    }
};

*/

//let paciente= new Personita(nombre,apellido,documento);

//Aca obtengo el listado de pacientes registrados

//const pacienteRegistrado = JSON.parse(localStorage.getItem("listaPacientes"));
//const paciente=[];



//Ahora itero pacienteRegistrado con for ..of para transformar todos sus objetos a tipo paciente
/*for(const objeto of pacienteRegistrado)
    paciente.push(new personita(objeto) );
//Ahora tengo objeto pacientes y puedo usarle los metodos

for (const Paciente of personita)
    console.log(personitas);
*/


/*
localStorage.setItem('nombre', 'fran');


sessionStorage.setItem('Nombre','Francis');


sessionStorage.setItem('Nombre',nombreSession);
sessionStorage.setItem('Apellido',apellidoSession);
sessionStorage.setItem('Documento',documentoSession);

*/

let mibotonsito = document.getElementById("mybutton");
mybutton.addEventListener("click",probandoFuncion);

function probandoFuncion(){
  alert("anduvo");
}
