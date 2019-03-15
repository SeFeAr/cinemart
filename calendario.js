// Array donde guardaremos los meses.
let mesactual = 0;
let meses = new Array();
let year = 2019;
meses [0] = "BIENVENIDO AL CINE XD";
meses[1] = new Array();
meses[2] = new Array();
meses[3] = new Array();
meses[4] = new Array();
meses[5] = new Array();
meses[6] = new Array();
meses[7] = new Array();
meses[8] = new Array();
meses[9] = new Array();
meses[10] = new Array();
meses[11] = new Array();
meses[12] = new Array();

meses[0][0] = "MESES"

meses[1][1] = "Enero";
meses[1][0] = 31;

meses[2][2] = "Febrero";
meses[2][0] = 28;

meses[3][3] = "Marzo";
meses[3][0] = 31;

meses[4][4] = "Abril";
meses[4][0] = 30;

meses[5][5] = "Mayo";
meses[5][0] = 31;

meses[6][6] = "Junio";
meses[6][0] = 30;

meses[7][7] = "Julio";
meses[7][0] = 31;

meses[8][8] = "Agosto";
meses[8][0] = 31;

meses[9][9] = "Septiembre";
meses[9][0] = 30;

meses[10][10] = "Octubre";
meses[10][0] = 31;

meses[11][11] = "Noviembre";
meses[11][0] = 30;

meses[12][12] = "Diciembre";
meses[12][0] = 31;



function probar(n){
  let concatenar = "";
  mesactual = document.getElementById("mes").value;
  document.getElementById("calendario").innerHTML = "";
  if(n === 0){
    if(!(Number(mesactual) === 1)){
      document.getElementById("mes").value = Number(mesactual) - 1;
      mesactual = document.getElementById("mes").value;
      document.getElementById("titulo").innerHTML = meses[mesactual][mesactual];
      mesnecesario = meses[mesactual][0];
      for(let i = 1; i  <= mesnecesario ; i++){
        concatenar += "<div class='numero' id='"+i+"'>"+i+"</div>";
      }
    }else{
      document.getElementById("mes").value = 12;
      year -= 1;
      document.getElementById("actualYear").innerHTML = year;
      mesactual = document.getElementById("mes").value;
      document.getElementById("titulo").innerHTML = meses[mesactual][mesactual];
      mesnecesario = meses[mesactual][0];
      for(let i = 1; i  <= mesnecesario ; i++){
        concatenar += "<div class='numero' id='"+i+"'>"+i+"</div>";
    }
  }
  }else if(n === 1){
    if(!(Number(mesactual) === 12)){
      document.getElementById("mes").value = Number(mesactual) + 1;
      mesactual = document.getElementById("mes").value;
      document.getElementById("titulo").innerHTML = meses[mesactual][mesactual];
      mesnecesario = meses[mesactual][0];
      for(let i = 1; i  <= mesnecesario ; i++){
        concatenar += "<div class='numero' id='"+i+"'>"+i+"</div>";
      }
    }else{
      document.getElementById("mes").value = 1;
      year += 1;
      document.getElementById("actualYear").innerHTML = year;
      mesactual = document.getElementById("mes").value;
      document.getElementById("titulo").innerHTML = meses[mesactual][mesactual];
      mesnecesario = meses[mesactual][0];
      for(let i = 1; i  <= mesnecesario ; i++){
        concatenar += "<div class='numero' id='"+i+"'>"+i+"</div>";
    }
    }
  }



  document.getElementById("calendario").innerHTML = concatenar;
}

