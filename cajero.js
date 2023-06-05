
const usuarios = [

    {nombre: 'leo', clave: '1234', saldo: 1000},
    {nombre: 'nata', clave: '4321', saldo: 500},
    {nombre: 'dany', clave: '2121', saldo: 200}

]

const validarUsuario = () => {

    let usuario = document.getElementById("usuarioInput").value;

    let fotoUsuario = document.getElementById("imgUs");

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
        let total = (usuarios[0].saldo - dinero)
        alert (`saldo actual ${total}`)
    }   
    
}

const retirarOtro = () => {  
        
    let usuario = localStorage.getItem("usuarioActual");

    let valorRetirado = parseFloat (prompt ('cuanto quieres retirar'));

    if (usuario === usuarios[0].nombre && valorRetirado <= usuarios[0].saldo){
        let total = (usuarios[0].saldo - valorRetirado)
        alert (`saldo actual ${total}`)
    }   
    
}

const consignar = () => {

    let usuario = localStorage.getItem("usuarioActual");

    let valorConsignado = parseFloat (prompt ('cuanto quieres consignar'));

    if (usuario === usuarios[0].nombre && valorConsignado !== null && valorConsignado !== ""){
        let total = usuarios[0].saldo + valorConsignado
        alert (`saldo actual ${total}`)
    }

}

const miSaldo = () => {

    let usuario = localStorage.getItem("usuarioActual");

    if (usuario === usuarios[0].nombre){
        alert (`Su saldo actual es de ${usuarios[0].saldo}`)
    }
}

function salir() {
    
    localStorage.removeItem("usuarioActual");
    
    location.href = "index.html";
  }


