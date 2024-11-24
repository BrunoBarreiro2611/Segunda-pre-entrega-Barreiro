document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('grafico').getContext('2d');
    let myChart;
    function cargarDatosDesdeStorage() {
        const personas = JSON.parse(localStorage.getItem('personas'));
        if (!personas || personas.length === 0) {
            return null;
        }
        return personas;
    }
    function generarGrafico(datos) {
        if (myChart) {
            myChart.destroy(); 
        }
        const edades = datos.map(persona => persona.edad);
        const etiquetas = datos.map((_, index) => `Persona ${index + 1}`);
        myChart = new Chart(ctx, {
            type: 'bar', 
            data: {
                labels: etiquetas,
                datasets: [{
                    label: 'Edad de las Personas',
                    data: edades,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    const cargarDatosBtn = document.getElementById('cargarDatosBtn');
    cargarDatosBtn.addEventListener('click', () => {
        const personas = cargarDatosDesdeStorage();
        if (!personas || personas.length === 0) {
            alert('No hay datos para mostrar.');
        } else {
            generarGrafico(personas);
        }
    });
});


