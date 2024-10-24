function calcularCosto(event) {
    event.preventDefault(); 

    
    let nombre = document.getElementById('nombre').value;
    let centro = document.getElementById('centro').value;
    let carrera = document.getElementById('carrera').value;

    // Definiendo las cuotas base
    let cuotaMensual = 125; 
    let matriculaCiclo = 200; 
    let pagoLaboratorios = 0;

    // Ajustes según la carrera seleccionada
    switch (carrera) {
        case "medicina":
            cuotaMensual += cuotaMensual * 0.75; 
            matriculaCiclo += matriculaCiclo * 1.25; 
            pagoLaboratorios = 30; 
            break;
        case "ingenieria":
            cuotaMensual += cuotaMensual * 0.50; 
            matriculaCiclo += matriculaCiclo * 0.50; 
            pagoLaboratorios = 7; 
            break;
        
    }

    // Calculando los costos anuales y totales
    const ciclosPorAno = 2;
    let pagoAnualCuotas = cuotaMensual * 12;
    let pagoAnualMatriculas = matriculaCiclo * ciclosPorAno;
    let pagoAnualLaboratorios = pagoLaboratorios * ciclosPorAno;
    let totalAnual = pagoAnualCuotas + pagoAnualMatriculas + pagoAnualLaboratorios;

    // Duración de la carrera según la carrera seleccionada
    let duracionCarrera;
    if (carrera === "licenciatura") {
        duracionCarrera = 4;
    } else if (carrera === "medicina") {
        duracionCarrera = 6;
    } else if (carrera === "ingenieria") {
        duracionCarrera = 5;
    }

    // Costo total de la carrera
    let costoTotalCarrera = totalAnual * duracionCarrera;

    // Generando la boleta de inscripción con document.write()
    document.write(`
        <h3>BIENVENIDOS A LA UNIVERSIDAD GUAPO GUARDADO</h3>
        <h4>BOLETA DE INSCRIPCIÓN</h4>
        <hr>
        <p><strong>Aspirante:</strong> ${nombre}</p>
        <p><strong>Carrera:</strong> ${carrera.charAt(0).toUpperCase() + carrera.slice(1)}</p>
        <p><strong>Tipo Centro Educativo:</strong> ${centro === "publico" ? "Público" : "Privado"}</p>
        <p><strong>Cuota Mensual:</strong> $${cuotaMensual.toFixed(2)}</p>
        <p><strong>Pago de Matrícula por Ciclo:</strong> $${matriculaCiclo.toFixed(2)}</p>
        <p><strong>Pago de Uso de Laboratorios por Ciclo:</strong> $${pagoLaboratorios.toFixed(2)}</p>
        <hr>
        <p><strong>Pago Anual en Concepto de Cuotas:</strong> $${pagoAnualCuotas.toFixed(2)}</p>
        <p><strong>Pago Anual en Concepto de Matrículas:</strong> $${pagoAnualMatriculas.toFixed(2)}</p>
        <p><strong>Pago Anual en Concepto de Uso de Laboratorios:</strong> $${pagoAnualLaboratorios.toFixed(2)}</p>
        <p><strong>Total, a Pagar Anualmente:</strong> $${totalAnual.toFixed(2)}</p>
        <hr>
        <p><strong>Costo Total de la Carrera:</strong> $${costoTotalCarrera.toFixed(2)}</p>
        <hr>
    `);
}
