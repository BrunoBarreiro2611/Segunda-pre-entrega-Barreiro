let personas = [];

function esEdadValida(edad) {
    return !isNaN(edad) && edad >= 0 && edad <= 110;
}
function calcularPromedio(edades) {
    if (edades.length === 0) return null; 
    return edades.reduce((sum, edad) => sum + edad, 0) / edades.length;
}
function mostrarMensaje(mensaje) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = mensaje;
}
function agregarEdad() {
    const edadInput = document.getElementById('edadInput').value;
    const edad = parseInt(edadInput);
    
    if (edadInput === '') {
        mostrarMensaje('Por favor, ingresa una edad.');
        return;
    }
    if (esEdadValida(edad)) {
        personas.push(new Persona(edad));
        mostrarMensaje(`Edad ${edad} registrada.`);
        document.getElementById('edadInput').value = ''; 
        guardarDatos(); 
    } else {
        mostrarMensaje('Por favor, ingresa una edad válida (0 - 110).');
    }
}
function calcularPromedioEdades() {
    if (personas.length === 0) {
        mostrarMensaje('No hay edades registradas. Agrega al menos una.');
        return;
    }
    
    let edades = personas.map(persona => persona.edad);
    let edadPromedio = calcularPromedio(edades);
    
    mostrarMensaje(`La edad promedio es: ${edadPromedio.toFixed(2)} años.`);
}
function Persona(edad) {
    this.edad = edad;
}
function cargarDatos() {
    const datosGuardados = localStorage.getItem('personas');
    if (datosGuardados) {
        personas = JSON.parse(datosGuardados); 
        console.log('Datos cargados desde localStorage:', personas);
    }
}
function guardarDatos() {
    localStorage.setItem('personas', JSON.stringify(personas)); 
}
document.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos(); 
    const btnListo = document.getElementById('btnListo');
    btnListo.addEventListener('click', agregarEdad);
    const btnCalcularPromedio = document.getElementById('btnCalcularPromedio');
    btnCalcularPromedio.addEventListener('click', calcularPromedioEdades);
});

