function ejemp1(){
const num= parseInt(document.getElementById("num1").value);
const edad=18;
let resul= "";
if(num >=edad){resul="puedes votar  ";
}else {
    resul="podras votar a tener 18"
}
document.getElementById("ejem1").innerText=resul;
};

function ejemp2(){
const h= parseFloat(document.getElementById("num1").value);
const p= parseFloat(document.getElementById("num2").value);
let pt=0
if(h>40){pt=(40*p)+((h-40)*p*2);
}
else {
   pt=h*p
}
document.getElementById("ejem1").innerText="su sueldo semanal "+pt;
};

function ejemp3(){
const num= parseInt(document.getElementById("num1").value);
let opciones="puedes comprar :";
if(num >=251){opciones+=" anillo $251,";}
if(num >100 || num<251){opciones+=" flores $101-250,";};
if(num >10 || num<101){opciones+=" chocolate $11-100,";};
if(num >0 || num<11){opciones+=" tarjeta $10-menos,";};
if(num<1){opciones="insuficiente presupuesto"};
document.getElementById("ejem1").innerHTML=opciones;
};

function ejemp4(){
const num= parseInt(document.getElementById("num1").value);
let preciot=0;
if(num<3){preciot =num*5;}
else if(num <6){preciot=10+(num-2)*4;}
else if(num <11){preciot=22+(num-5)*3;}
else if(num>10){preciot=37+(num-10)*2;}
document.getElementById("ejem1").innerHTML="pagara = $"+preciot;
};
let n1=""
let n2=""
let n3=""
let e1=0
let e2=0
let e3=0
let v=0
function elmenor(x,y){
document.getElementById("ejem1").innerHTML="menor  :"+x+" con "+y+" años edad";
};
function ejemp5(){
const nom=document.getElementById("num1").value;
const edad= parseInt(document.getElementById("num2").value);
if (v==0){n1=nom;e1=edad};
if (v==1){n2=nom;e2=edad};
if (v==2){n3=nom;e3=edad;
if(e1<e2 && e1<e3){elmenor(n1,e1)}
if(e2<e1 && e1<e3){elmenor(n2,e2)}
if(e3<e2 && e1<e1){elmenor(n3,e3)}
}
v+=1
if(v==3){v=0;n1="";n2="";n3="";e1=0;e2=0;e3=0}
};

function ejemp6(){
const num= parseFloat(document.getElementById("num1").value);
let pt=0
if(num>=200){pt =num-(num*0.15);}
else if(num>=100){pt =num-(num*0.12);}
else{pt =num-(num*0.1)}

document.getElementById("ejem1").innerHTML="pagara = "+pt;
};

function ejemp7(){
const e= parseInt(document.getElementById("num1").value);
const p= parseFloat(document.getElementById("num2").value);
let b=0
let inv=""
if(e>18){
    if(p>=9){b=2000}
    else if(p>=7.5){b=1000}
    else if(p>=6){b=500}
    else{inv=", mejorar sus promedios para recibir una beca "}
}
else{
    if(p>=9){b=3000}
    else if(p>=8){b=2000}
    else if(p>=6){b=100}
    else{inv=", mejorar sus promedios para recibir una beca "}
}
document.getElementById("ejem1").innerHTML=`tendra una beca  :$${b}${inv} `;
};

 function ejemp8(){
const e= document.getElementById("num1").value;
const s= document.getElementById("num2").value;
let st=0
let ste=0
let sts=0

if(s>3500){sts=s*1.1}
else if(s>1000){sts=s*1.15}
else{sts=s*1.15};
if(e>2){ste=s*1.2}
else if(e>=5){ste=s*1.3};
if(sts>=ste){st=sts}
else{st=sts}
document.getElementById("ejem1").innerHTML=`bono de :$${st} `;
};

 function ejemp9(){
const op = document.querySelector('input[name="tipo"]:checked');

const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const m4 = document.getElementById("m4");
let c=0
if(op.value==="a"){
c=1200
if(m1.checked){c=c*1.1};
if(m2.checked){c=c*1.05};
if(m3.checked){c=c*1.05};
if(m4.checked){c=c*1.2}
else{c=c*1.1};
}
if(op.value==="b"){
c=950
if(m1.checked){c=c*1.1};
if(m2.checked){c=c*1.05};
if(m3.checked){c=c*1.05};
if(m4.checked){c=c*1.2}
else{c=c*1.1};
}
document.getElementById("ejem1").innerHTML=`costo de :$${c} `;
};
 function ejemp10(){
const km=parseFloat(document.getElementById("km").value)
const p=parseFloat(document.getElementById("p").value)
const d=document.querySelector('input[name="op"]:checked');
let c=0
if(d.value=="m"){
   c=km*750;
}else if(d.value=="pv"){
    c=km*800;
}else if(d.value=="a"){
    c=km*1200;
}else if(d.value=="c"){
    c=km*1800;
};
if(p<c){
let pmc=c-p
document.getElementById("ejem1").innerHTML=`no tiene suficiente dinero,le faltan $${pmc} pesos, `;
}
else if(p>=c){
document.getElementById("ejem1").innerHTML=`tendra costo de :$${c} y le quedaran $${p-c} `}
else{document.getElementById("ejem1").innerHTML=`complete los campos correctamente`}
};

function ejemp11(){
const edad= parseInt(document.getElementById("num1").value);
let b=edad*100
if(edad>5){b=1000;};
document.getElementById("ejem1").innerHTML="tendra un bono de = $"+b;
};

function ejemp12(){
const h= parseInt(document.getElementById("num1").value);
const ph= parseFloat(document.getElementById("num2").value);
let pt=0
if(h>=41 && h<=45){pt =(40*ph)+((h-40)*ph*2);}
else if(h>=46 && h<=50){pt =(40*ph)+(5*ph*2)+((h-45)*ph*3);}
else if(h>50){document.getElementById("ejem1").innerHTML="no permitido trabajar mas de 50 horas ";}
else{pt=h*ph}

if(h<51){document.getElementById("ejem1").innerHTML="pagara = $"+pt;}
};

function ejemp13(){
const al= parseFloat(document.getElementById("num1").value);
let pi=0
if(al>100){pi=20}
else if(al>49){pi=35}
else if(al>19){pi=40}
else{pi=70}

document.getElementById("ejem1").innerHTML="cada uno pagara = $"+pi;
};