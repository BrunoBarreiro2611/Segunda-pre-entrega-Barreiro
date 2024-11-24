let personas = [];
function esEdadValida(edad) {
    return !isNaN(edad) && edad >= 0 && edad <= 110;
}
function agregarEdad() {
    const edadInput = document.getElementById('edadInput').value;
    const edad = parseInt(edadInput);
    if (edadInput === '') {
        mostrarMensaje('Por favor, ingresa una edad.');
        return;
    }
    if (esEdadValida(edad)) {
        personas.push({ edad: edad });
        mostrarMensaje(`Edad ${edad} registrada.`);
        localStorage.setItem('personas', JSON.stringify(personas));
        calcularPromedioEdad();
        document.getElementById('edadInput').value = '';
    } else {
        mostrarMensaje('Por favor, ingresa una edad válida (0 - 110).');
    }
}
function mostrarMensaje(mensaje) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = mensaje;
}
function calcularPromedioEdad() {
    if (personas.length === 0) {
        mostrarMensaje('No hay edades registradas.');
        return;
    }
    const sumaEdades = personas.reduce((total, persona) => total + persona.edad, 0);
    const promedio = sumaEdades / personas.length;
    const promedioDiv = document.getElementById('promedio');
    promedioDiv.textContent = `Edad promedio: ${promedio.toFixed(2)}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const datosGuardados = localStorage.getItem('personas');
    if (datosGuardados) {
        personas = JSON.parse(datosGuardados);
        calcularPromedioEdad(); 
    }
    const btnListo = document.getElementById('btnListo');
    btnListo.addEventListener('click', agregarEdad);
});
