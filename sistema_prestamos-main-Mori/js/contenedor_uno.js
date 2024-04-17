let pantallitaNombre = document.getElementById('pantalla')

function agregarPalabra(parametro){
document.getElementById('pantalla').value += parametro

}

function borrarCadaPalabra(){
//document.getElementById('pantalla').value = ''
pantallitaNombre.value = pantallitaNombre.value.slice(0, -1)
}