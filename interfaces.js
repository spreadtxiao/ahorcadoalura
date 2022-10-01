function inicio() {
    pantallaJuego.style.display = "none";
    pantallaInicio.style.display = "block";
    pantallaAgregarPalabra.style.display = "none";
    numeroErrores = 0;
    document.getElementById("nuevaPalabra").value = "";
 }
 
 function nuevaPalabra() {
    pantallaJuego.style.display = "none";
    pantallaInicio.style.display = "none";
    pantallaAgregarPalabra.style.display = "block";
    letrasUsadas = [];
    document.getElementById("nuevaPalabra").focus();
 }
 
 function principal() {
    pantallaJuego.style.display = "block";
    pantallaInicio.style.display = "none";
    pantallaAgregarPalabra.style.display = "none";
    start = true;
    iniciar();
 }
 