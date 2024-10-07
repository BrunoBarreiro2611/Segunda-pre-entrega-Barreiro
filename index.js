let edades = [];
let continuar = true;

while (continuar) {
    let edadInput = prompt('Ingresa una edad (0 - 110) o deja vacío para finalizar:');
    if (edadInput === '') {
        continuar = false; 
    } else {
        let edad = parseInt(edadInput);
        
        if (!isNaN(edad) && edad >= 0 && edad <= 110) {
            edades.push(edad);
            alert(`Edad ${edad} registrada.`);
        } else {
            alert('Por favor, ingresa una edad válida (0 - 110).');
        }
    }
}
if (edades.length > 0) {
    let edadPromedio = edades.reduce((sum, edad) => sum + edad, 0) / edades.length;
    alert(`La edad promedio es: ${edadPromedio.toFixed(2)} años.`);
} else {
    alert('No se han registrado edades suficientes.');
}