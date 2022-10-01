
function dibujarLinea(ix,iy,fx,fy,color) {
    pincel.beginPath();
    pincel.moveTo(ix,iy);
    pincel.lineTo(fx,fy);
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.strokeStyle = color;
    pincel.stroke();
 }
 
 function dibujarCirculo(x, y, radio,color) {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*Math.PI);
    pincel.stroke();
 }
 
 function dibujarHorca(){
    let color = "#0A3871";
    switch (numeroErrores) {
       case 0:
          //suelo
          dibujarLinea(ancho*0.2,alto*0.7,ancho*0.8,alto*0.7,color);
          break;
    
       case 1:
          //palo
          dibujarLinea(ancho*0.3,alto*0.2,ancho*0.3,alto*0.7,color);
          break;
       case 2:
          //travesanho
          dibujarLinea(ancho*0.3,alto*0.2,ancho*0.7,alto*0.2,color);
          break;
       case 3:
          //cuerda
          dibujarLinea(ancho*0.7,alto*0.2,ancho*0.7,alto*0.3,color);
          break;
       case 4:
          //cabeza
          dibujarCirculo(ancho*0.7,(alto*0.3)+25,25,color);
          break;
       case 5:
          //dorso
          dibujarLinea(ancho*0.7,(alto*0.3)+50,ancho*0.7,alto*0.49,color);
          break;
       case 6:
          //pierna derecha
          dibujarLinea(ancho*0.7,alto*0.49,ancho*0.6,alto*0.59,color);
          break;
       case 7:
          //pierna izquierda
          dibujarLinea(ancho*0.7,alto*0.49,ancho*0.8,alto*0.59,color);
          break;
       case 8:
          //pierna derecha
          dibujarLinea(ancho*0.7,(alto*0.3)+50,ancho*0.6,alto*0.45,color);
          break;
       case 9:
          //brazo izquierdo
          dibujarLinea(ancho*0.7,(alto*0.3)+50,ancho*0.8,alto*0.45,color);
          break;
    }
 }
 
 function dibujarEspacios(cantidad) {
   let puntoInicial = 0.1;
   let puntoFinal = puntoInicial + 0.08;
   let altura = alto*0.84;
   let color = "#0A3871";
   if(cantidad % 2 == 0){
      for(let i = cantidad/2; i < 4;i++){
         puntoInicial+=0.1;
      }
      puntoFinal = puntoInicial +0.08;
      for(i=0; i < cantidad; i++){
         dibujarLinea(ancho*puntoInicial, altura, ancho*puntoFinal, altura,color);
         puntoInicial+= 0.1;
         puntoFinal= puntoInicial+0.08;
      }
   }
   else{
      puntoInicial = 0.05;
      for(let i = cantidad/2; i < 4;i++){
         puntoInicial+=0.1;
      }
      puntoFinal = puntoInicial +0.08;
      for(i=0; i < cantidad; i++){
         dibujarLinea(ancho*puntoInicial, altura, ancho*puntoFinal, altura,color);
         puntoInicial+= 0.1;
         puntoFinal= puntoInicial+0.08;
      }
   }
    
 }
 
 function dibujarLetra(letra,x,y,estilo,color) {
    pincel.fillStyle = color;
    pincel.font=estilo;
    pincel.fillText(letra,x,y);
 }
 
 function mensaje(estado) {
    if(estado){
      dibujarLetra("¡Felicidades ganaste!",ancho*0.35,alto*0.25,"1em 'Inter', sans-serif","green");
    }
    else{
      dibujarLetra("¡Fin del juego!",ancho*0.35,alto*0.25,"1em 'Inter', sans-serif","red");
    }
 }

 function dibujarLetraCorrecta(letra,posicion){
   let puntoInicial = 0.1;
   let cantidad = palabraSecreta.length;
   let altura = alto*0.83;
   let color = "#0A3871";
   if(cantidad % 2 == 0){
      for(let i = cantidad/2; i < 4;i++){
         puntoInicial+=0.1;
      }
      dibujarLetra(letra,(ancho * puntoInicial) + ((ancho * 0.1) * posicion),altura,"3em 'Inter', sans-seri",color);
   }
   else{
      puntoInicial = 0.055;
      for(let i = cantidad/2; i < 4;i++){
         puntoInicial+=0.1;
      }
      dibujarLetra(letra,(ancho * puntoInicial) + ((ancho * 0.1) * posicion),altura,"3em 'Inter', sans-seri",color);
   }   
 }

 function dibujarLetraIncorrecta(letra,posicion){
   let espacio = ancho * 0.06;
   let inicio = ancho * 0.1;
   dibujarLetra(letra, (inicio + (espacio * posicion)),alto * 0.94,"3em 'Inter', sans-serif","red");
 }