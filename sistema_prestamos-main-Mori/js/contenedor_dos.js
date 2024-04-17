let pantallitaNumero = document.getElementById('pantalla2')

function agregarNumero(parametro){
document.getElementById('pantalla2').value += parametro

}

function borrarNumero(){
document.getElementById('pantalla2').value = ''
}

function borrarCadaNumero(){
pantallitaNumero.value = pantallitaNumero.value.slice(0, -1)
}
