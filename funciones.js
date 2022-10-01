function compararPalabra(palabraNueva) {
    for (let i = 0; i < palabras.length; i++) {
        if(palabras[i] == palabraNueva){
            return false;
        }        
    }
    return true;
}
function comprobacionLetraUsada(letra){
    for(let i = 0; i < letrasUsadas.length; i++){
        if(letra == letrasUsadas[i]){
            return true;
        }
    }
    return false;
}

function comprobacionLetra(letra) {
    if((letra > 64 && letra < 91) || letra == 192){
        if(!comprobacionLetraUsada(letra)){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

function generarPalabraSecreta(palabras){
    indice = Math.floor(Math.random() * palabras.length);
    return indice;
}

function iniciar(){
    pincel.clearRect(0,0,ancho,alto);
    numeroErrores = 0;
    numeroAciertos = 0;
    letrasUsadas = [];
    dibujarHorca();
    palabraSecreta = palabras[generarPalabraSecreta(palabras)];
    dibujarEspacios(palabraSecreta.length);
    start = true;
    window.onkeydown = jugar;
    if(activarTeclado()){
        document.getElementById("teclado").style.display = "table";
    }
    else{
        document.getElementById("teclado").style.display="none";
    }
 }

 function jugar(event) {
    let letra;
    if(event < 91){
        letra = event;
    }
    else{
        letra = event.keyCode;
    }
    let coincidencia = 0;
    if(start){
        if(numeroErrores<9){
            if(numeroAciertos < palabraSecreta.length){
                if(comprobacionLetra(letra)){
                    for (let i = 0; i < palabraSecreta.length; i++) {
                        if(palabraSecreta.charCodeAt(i) == letra){
                            coincidencia++;
                            if(letra == 192){
                                dibujarLetraCorrecta('Ñ',i);
                            }
                            else{
                                dibujarLetraCorrecta(String.fromCharCode(letra), i);
                            }
                        }                    
                    }
                    if(coincidencia == 0){
                        if(letra == 192){
                            dibujarLetraIncorrecta('Ñ', numeroErrores);
                        }
                        else{
                            dibujarLetraIncorrecta(String.fromCharCode(letra), numeroErrores);
                        }
                        letrasUsadas[letrasUsadas.length] = letra;
                        numeroErrores++;
                        dibujarHorca(numeroErrores);
                        if(numeroErrores == 9){
                            mensaje(false);
                            start = false;
                        }
                    }
                    else{
                        numeroAciertos+=coincidencia;
                        if(numeroAciertos == palabraSecreta.length){
                            mensaje(true);
                            start = false;
                        }
                        letrasUsadas[letrasUsadas.length] = letra;
                    }
                }
            }
            else{
                mensaje(true);
                start = false;
            }
        }
        else{
            mensaje(false);
            start = false;
        }
    }
 }

 function comprobacionNuevaPalabra(palabra) {
    let coincidencia = 0;
    if(palabra.length<9){
            for(let i = 0; i < palabra.length; i++){
                if(comprobacionLetra(palabra.charCodeAt(i))){
                    coincidencia++;
                }
            }
            if(coincidencia == palabra.length){
                return true;
            }
            else{
                return false;
            }
    }
    else{
        return false;
    }
 }

 function agregarPalabraSecreta(){
    let texto = document.getElementById("nuevaPalabra").value.toUpperCase();
    if(comprobacionNuevaPalabra(texto)){
        if(compararPalabra(texto)){
            palabras[palabras.length] = texto;
            document.getElementById("nuevaPalabra").value = "";
            principal();
        }
        else{
            alert("Esa palabra ya esta agregada");
        }
    }
    else{
        alert("Solo una palabra de 8 letras, sin signos especiales");
    }
 }

 function presionarTecla(tecla){
    jugar(tecla.value.charCodeAt(0));
 }

 function activarTeclado(){
    let navegador = navigator.userAgent;
    if(navegador.match(/Android/i) || navegador.match(/webOS/i) || navegador.match(/iPhone/i) || navegador.match(/iPad/i) || navegador.match(/iPod/i) || navegador.match(/BlackBerry/i) || navegador.match(/Windows Phone/i)) {
        return true;
    } 
    else{
        return false;
    }
 }