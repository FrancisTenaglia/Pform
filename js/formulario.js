let today = new Date();
let btnRegistrar=document.getElementById('RegistrarTurno')

btnRegistrar.onclick = (event) => {
    let nombre = document.getElementById("inputNombre").value
    let apellido = document.getElementById("inputApellido").value
    let id = document.getElementById("inputID").value
    let area = document.getElementById("area").value
    let turno = document.getElementById("turno").value

    let usuario = {
        nombre: nombre,
        apellido: apellido,
        id: id,
        area: area,
        turno: turno, 
    }

    localStorage.setItem("user", JSON.stringify(usuario))
    event.preventDefault()
    alert('Ya reservaste el turno con el ID:'+ id +' ' +today )

};