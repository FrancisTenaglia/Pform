// Esta parte del codigo es la nueva, utilizando JSON y Storage con eventos, el resto comentado, fueron entregadas en proyecto anterior. Por eso la etiqueta de agenda.js en el HTML esta comentada.


//Constantes y variables

const formulario = document.getElementById('formulario');
const containerReservas = document.getElementById('containerTurnos');
const verReservas = document.getElementById('verTurnos');
const verFechas = document.getElementById('verFechas');
const botonEliminar = document.getElementById('eliminarTurnos');
let today = new Date();
let reservas = [];


//Si el localstorage tiene datos, los meto al array de Reservas

if (localStorage.getItem('reservas')) {
    let reserva = JSON.parse(localStorage.getItem('reservas'));

    for (let i = 0; i < reserva.length; i++) {
        reservas.push(reserva[i]);
    }
};

//Creo el objeto Reserva donde se va a guardar el dato de cada persona
class Reserva {
    constructor(nombre, apellido,id, area, turno, calendario, diaregistro){
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
        this.area = area;
        this.turno = turno;
        this.calendario = calendario;
        this.diaregistro = diaregistro;
    }
};

//Con esta funcion, agarro el objeto Reserva, y lo meto dentro del array Reservas para que queden guardados en el LS
function agregarReserva() {
    const nombre = document.getElementById('inputNombre').value;
    const apellido = document.getElementById('inputApellido').value;
    const id = document.getElementById('inputID').value;
    const area = document.getElementById('area').value;
    const turno = document.getElementById('turno').value;
    const calendario = document.getElementById('calendario').value;
    const diaregistro = today;
    const nuevaReserva = new Reserva(nombre, apellido, id, area, turno, calendario, diaregistro);
    reservas.push(nuevaReserva);

    localStorage.setItem('reservas',JSON.stringify(reservas));
    formulario.reset();
};

function mostrarTurnos() {
    containerMostrarTurnos.innerHTML = '';
    reservas.forEach((reserva) => {
        const div = document.createElement('div');
        div.innerHTML = `
                        <div>
                            <p>Nombre del paciente: ${reserva.nombre}</p>
                            <p>Apellido del paciente: ${reserva.apellido}</p>
                            <p>ID del paciente: ${reserva.id}</p>
                            <p>Fecha del turno: ${reserva.calendario}</p>
                            <p>El turno fue registrado: ${reserva.diaregistro}</p>
                        </div>
                        `

        containerMostrarTurnos.appendChild(div);
    })
};

function mostrarFechasOcupadas() {
    containerMostrarFO.innerHTML = '';
    reservas.forEach((reserva) => {
        const div = document.createElement('div');
        div.innerHTML = `
                        <div>
                            <p>Las fechas ocupadas son: ${reserva.calendario} para ${reserva.area}</p>
                        </div>
                        `
        containerMostrarFO.appendChild(div);
    })
};

function eliminarTurnos() {
    localStorage.clear(); 
    reservas = [];
};

//HOVER PARA LOS BOTONES
$(document).ready(function(){
    $("button").hover(function(){
      $(this).css("background-color", "grey");
      }, function(){
      $(this).css("background-color", "");
    });
  });

  $(document).ready(function(){
    $("#eliminarTurnos").hover(function(){
      $(this).css("background-color", "red");
      }, function(){
      $(this).css("background-color", "");
    });
  });


// LLAMADO DE FUNCIONES

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarReserva();
});

verReservas.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarTurnos();

});

verFechas.addEventListener('click',(e) => {
    e.preventDefault();
    mostrarFechasOcupadas();
});

botonEliminar.addEventListener('click',(e) => {
    eliminarTurnos()
});