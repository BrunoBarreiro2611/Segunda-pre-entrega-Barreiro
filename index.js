let personas = [];
let continuar = true;
function esEdadValida(edad) {
    return !isNaN(edad) && edad >= 0 && edad <= 110;
}
function calcularPromedio(edades) {
    if (edades.length === 0) return null;
    return edades.reduce((sum, edad) => sum + edad, 0) / edades.length;
}
function mostrarMensaje(mensaje) {
    alert(mensaje);
}
function iniciarSimulador() {
    while (continuar) {
        let edadInput = prompt('Ingresa una edad (0 - 110) o deja vacío para finalizar:');
        if (edadInput === '') {
            continuar = false; 
        } else {
            let edad = parseInt(edadInput);
            
            if (esEdadValida(edad)) {
                personas.push(new Persona(edad));
                mostrarMensaje(`Edad ${edad} registrada.`);
            } else {
                mostrarMensaje('Por favor, ingresa una edad válida (0 - 110).');
            }
        }
    }
    let edadesFiltradas = personas.filter(persona => persona.edad > 30).map(persona => persona.edad);
    if (edadesFiltradas.length > 0) {
        let edadPromedio = calcularPromedio(edadesFiltradas);
        mostrarMensaje(`La edad promedio de las personas mayores a 30 años es: ${edadPromedio.toFixed(2)} años.`);
    } else {
        mostrarMensaje('No hay personas mayores a 30 años registradas.');
    }
}
function Persona(edad) {
    this.edad = edad;
}
document.addEventListener('DOMContentLoaded', (event) => {
    iniciarSimulador();
});
