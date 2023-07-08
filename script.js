
// declaramos los arreglos de las cuentas.

var cuentas = [
  { nombre: "Mali", password:'12345' },
  { nombre: "Gera", password: '7894' },
  { nombre: "Maui", password: '9999' }
]
//declaramos las variables a utilizar    
 var usuario,nombre,pass,datos,user,buscar,consultar;

 //agregamos un evento para capturar la información
var login = document.getElementById('ingresar');
login.addEventListener("click",function capturar(){
    var usuario = obtenerUsuario();
console.log(usuario)

});
function obtenerUsuario(){
    user = document.getElementById('usuario').value;
    pass = document.getElementById('pass').value;
    buscar = cuentas.find(database => database.nombre ===user);
    userPass = cuentas.find(database =>database.password===pass);
    if (buscar&&userPass){
        alert(`Bienvenid@ ${user}`)
        localStorage.setItem('usuario',user)
        window.open('Acceso.html',"_self")
        return user;
    } else {
        let alerta = document.getElementById('alerta');
        alerta.innerHTML = ("Usuario no encontrado o contraseña incorrecta, Verifique nuevamente.");
    }
}

// localStorage.clear();