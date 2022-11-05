//Victor Manuel Marroquin Castillo - 22-2869
const SalarioLiquido = (SalarioBase, Bonificacion, HorasExtra) => {
    if (SalarioBase > 40) {
        let HorasExtra = (SalarioBase - 40) * pago * 2;
        let SalarioLiquido = 40 * pago;
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de pago es: ${totalPago} y el pago extra es: ${HorasExtra}. 
        El total a pagar es: ${
            SalarioLiquido + HorasExtra
        }`;
    } else {
        let SalarioLiquido = SalarioBase * pago;
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de pago es: ${SalarioLiquido}`;
    }
};

document.querySelector("#pro_calc").addEventListener("click", (e) => {
    e.preventDefault();
    let SalarioBase = +document.querySelector("#horas_trabajadas").value;
    let pago = +document.querySelector("#precio_hora").value;
    calcularTotales(pago, SalarioBase);
});