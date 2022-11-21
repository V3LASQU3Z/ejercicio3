function elipse() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);

    var raiz = Math.sqrt((3 * a + b) * (a + 3 * b));
    var pi = Math.PI * a + Math.PI * b;
    var t = 3 - raiz / (a + b);
    P = pi * t;
    //document.getElementById('pe').innerHTML = raiz + "<br>" + pi + "<br>" + t + "<br>" + "PERIMETRO " + P;
    document.getElementById('pe').innerHTML = "<h3>El perímetro de la elipse es:</h3>" + P.toFixed(3) + " Aproximadamente";
}