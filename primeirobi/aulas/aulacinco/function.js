function calculaAreaRetangulo(base, altura) {
    let area = base * altura;
    return base * altura;
}

function calculaAreaQuadrado(lado) {
    return calculaAreaRetangulo(lado, lado);
}
console.log(calculaAreaQuadrado(4));
console.log(calculaAreaRetangulo(4, 6));

