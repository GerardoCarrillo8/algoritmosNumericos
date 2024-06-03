function calcularAmortizacion(monto, plazo, tasaInteresMensual) {
    const tabla = [];
    let saldo = monto;
    const cuotaFija = monto / plazo;

    for (let periodo = 1; periodo <= plazo; periodo++) {
        const interes = saldo * tasaInteresMensual;
        const abono = cuotaFija;
        const pago = interes + abono;
        saldo -= abono;

        tabla.push({
            periodo: periodo,
            saldo: saldo.toFixed(2),
            interes: interes.toFixed(2),
            abono: abono.toFixed(2),
            pago: pago.toFixed(2)
        });
    }
    return tabla;
}


function generarTabla(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const monto = parseFloat(document.getElementById('monto').value);
    const plazo = parseInt(document.getElementById('plazo').value);
    const tasaInteresMensual = parseFloat(document.getElementById('tasa').value) / 100;

    const tablaAmortizacion = calcularAmortizacion(monto, plazo, tasaInteresMensual);
    const resultadoTabla = document.getElementById('resultadoTabla');
    resultadoTabla.innerHTML = '';

    tablaAmortizacion.forEach(fila => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fila.periodo}</td>
            <td>Q${fila.saldo}</td>
            <td>Q${fila.interes}</td>
            <td>Q${fila.abono}</td>
            <td>Q${fila.pago}</td>
        `;
        resultadoTabla.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('amortizacionForm');
    form.addEventListener('submit', generarTabla);
});