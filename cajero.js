
const usuarios = [

    {nombre: 'leo', clave: '1234', saldo: 500},
    {nombre: 'nata', clave: '4321', saldo: 1000},
    {nombre: 'dany', clave: '2121', saldo: 200}

]

// let fotoUsuario = document.getElementById("imgUs");

const validarUsuario = () => {

    let usuario = document.getElementById("usuarioInput").value;

    if (usuario === usuarios[0].nombre){
        window.location = 'clave.html';
        // fotoUsuario.src= "imagenes/cachorro.jpg";
    } else if (usuario === usuarios[1].nombre){
        window.location = 'clave.html';
        // fotoUsuario.src= "imagenes/gato.jpg";
    } else if (usuario === usuarios[2].nombre){
        window.location = 'clave.html';
        // fotoUsuario.src= "imagenes/lobo.jpg";
    } else {
        alert ('El Usuario no existe')
    };

    localStorage.setItem("usuarioActual", usuario);

}

const validarClave = () => {

    let clave = document.getElementById("password").value;

    let usuario = localStorage.getItem("usuarioActual");

    if (clave === usuarios[0].clave && usuario === usuarios[0].nombre){
        window.location = 'menu.html'
    } else if (clave === usuarios[1].clave && usuario === usuarios[1].nombre){
        window.location = 'menu.html'
    } else if (clave === usuarios[2].clave && usuario === usuarios[2].nombre){
        window.location = 'menu.html'
    } else {
        alert ('Clave incorrecta')
    }

}

const retirar = (dinero) => {  
        
    let usuario = localStorage.getItem("usuarioActual");

    if (usuario === usuarios[0].nombre && dinero <= usuarios[0].saldo){
        total = (usuarios[0].saldo - dinero)
        usuarios[0].saldo = total
        alert (`saldo actual ${total}`)
    } else if (usuario === usuarios[1].nombre && dinero <= usuarios[1].saldo){
        total = (usuarios[1].saldo - dinero)
        usuarios[1].saldo = total
        alert (`saldo actual ${total}`)
    } else if (usuario === usuarios[2].nombre && dinero <= usuarios[2].saldo){
        total = (usuarios[2].saldo - dinero)
        usuarios[2].saldo = total
        alert (`saldo actual ${total}`)
    } else {
        alert ('Solicitud invalida')
    }
    
}

const retirarOtro = () => {  
        
    let usuario = localStorage.getItem("usuarioActual");

    let valorRetirado = parseFloat (prompt ('cuanto quieres retirar'));

    if (usuario === usuarios[0].nombre && valorRetirado <= usuarios[0].saldo){
        let total = (usuarios[0].saldo - valorRetirado)
        usuarios[0].saldo = total
        alert (`saldo actual ${total}`)
    } else if (usuario === usuarios[1].nombre && valorRetirado <= usuarios[1].saldo){
        let total = (usuarios[1].saldo - valorRetirado)
        usuarios[1].saldo = total
        alert (`saldo actual ${total}`)
    } else if (usuario === usuarios[2].nombre && valorRetirado <= usuarios[2].saldo){
        let total = (usuarios[2].saldo - valorRetirado)
        usuarios[2].saldo = total
        alert (`saldo actual ${total}`)
    } else {
        alert ('Solicitud invalida')
    }
    
}

const consignar = () => {

    let usuario = localStorage.getItem("usuarioActual");

    let valorConsignado = parseFloat (prompt ('cuanto quieres consignar'));

    if (usuario === usuarios[0].nombre && valorConsignado !== null && valorConsignado !== ""){
        let total = usuarios[0].saldo + valorConsignado;
        usuarios[0].saldo = total
        alert (`saldo actual ${total}`)
    } else if (usuario === usuarios[1].nombre && valorConsignado !== null && valorConsignado !== ""){
        let total = usuarios[1].saldo + valorConsignado;
        usuarios[1].saldo = total
        alert (`saldo actual ${total}`)
    } else if (usuario === usuarios[2].nombre && valorConsignado !== null && valorConsignado !== ""){
        let total = usuarios[2].saldo + valorConsignado;
        usuarios[2].saldo = total
        alert (`saldo actual ${total}`)
    } else {
        alert ('Solicitud invalida')
    }

}

const miSaldo = () => {

    let usuario = localStorage.getItem("usuarioActual");

    if (usuario === usuarios[0].nombre){
        alert (`Su saldo actual es de ${usuarios[0].saldo}`)
    } else if (usuario === usuarios[1].nombre){
        alert (`Su saldo actual es de ${usuarios[1].saldo}`)
    } else if (usuario === usuarios[2].nombre){
        alert (`Su saldo actual es de ${usuarios[2].saldo}`)
    } else {
        alert ('Solicitud invalida')
    }
}

function salir() {
    
    localStorage.removeItem("usuarioActual");
    
    location.href = "index.html";
  }


