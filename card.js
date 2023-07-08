var dataB = {
Mali:200,
Gera:290,
Maui:67
}
//se recupera el valor del usuario en el localstorage
var consultar = 0;
  var registrado = localStorage.getItem('usuario');

  //se apunta el avento hacia el botón saldo.
let saldo = document.getElementById("saldo")
saldo.addEventListener("click",function consulta(){
  //la variable consultar recupera el saldo desde la función consultaSaldo
    var consultar = consultaSaldo();
  //se agrega un inner para mostrar el saldo en la web.  
let mostrar = document.getElementById('mostrar')
mostrar.innerHTML = `Tu saldo disponible es: $${consultar}.00`;
})

function consultaSaldo(){
  //consulta de el valor del registado en el objeto dataBase.
    let SaldoTotal = dataB[registrado];
    //seteo en el localstorage del valor del saldo total
    localStorage.setItem(registrado,SaldoTotal)
    //retorno del valor del saldo total actual.
    return SaldoTotal;
}

//apuntar la variable depósito al botón y agregar función al dar clic
let deposito = document.getElementById("deposito");
deposito.addEventListener("click", function depositar(){
  //se crea la variable mostrar, donde se ingresará el código generado en el inner.html
    let mostrar = document.getElementById('mostrar')
    mostrar.innerHTML ='<div><span>Ingrese el monto a depositar:</span></div><div><input id="monto" type="text" name="ingresar" placeholder="$\t\t"/></div><div><button id ="enviar" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored my-button">Depositar</button></div>   ';
    let enviar = document.getElementById("enviar")
    //se apunta al dom del imput para recuperar el valor al dar clic en ingresar.
    enviar.addEventListener("click",function agregarDeposito(){
      let ingresarMonto = parseInt(document.getElementById("monto").value);
      if (isNaN(ingresarMonto)){
        window.alert("ingrese un monto válido")
      }
      else{
      let cargaSaldo = dataB[registrado]
      let nuevoSaldo = cargaSaldo + ingresarMonto
      if(nuevoSaldo<=990){
        dataB[registrado]=nuevoSaldo;
        mostrar.innerHTML = `<div>La cantidad ingresada fue: $ ${ingresarMonto}.00</div></br></br><div>Su nuevo saldo es: $${nuevoSaldo}.00</div>`
        console.log(ingresarMonto)
      }else{
        window.alert(`Está superando el máximo permitido en cuenta`)
      }
     }
    } ) 
})

let retiro = document.getElementById("retiro");
retiro.addEventListener("click",function retirar(){
let mostrar = document.getElementById('mostrar')
mostrar.innerHTML = '<div><span>Ingrese el monto a retirar:</span></div><div><input id="monto" type="text" name="ingresar" placeholder="$\t\t"/></div><div><button id ="enviar" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored my-button">Retirar</button></div>   ';
let enviar = document.getElementById("enviar")
//se apunta al dom del imput para recuperar el valor al dar clic en ingresar.
enviar.addEventListener("click",function agregarRetiro(){
  let retirar = parseInt(document.getElementById("monto").value);
  if (isNaN(retirar)){
    window.alert("ingrese un monto válido")
  }
  else{
  let cargaSaldo = dataB[registrado]
  let nuevoSaldo = cargaSaldo - retirar
  if(nuevoSaldo>=10){
    dataB[registrado]=nuevoSaldo;
    mostrar.innerHTML = `<div>La cantidad retirada fue: $ ${retirar}.00</div></br></br><div>Su nuevo saldo es: $${nuevoSaldo}.00</div>`
    console.log(retirar)
  }else{
    window.alert(`Saldo mínimo en la cuenta debe ser mayor o igual a $10.00`)
  }}
})})


/* 
Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.
*/
