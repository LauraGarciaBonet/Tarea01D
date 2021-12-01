'use strict';

// funciones propias que espere dos números y devuelva su MediaKeyStatusMap, resta, multiplicación y división

let a;
let b;
let op;
let result;

const operation =(a,b, op)=>{
    if(op === '+'){
        return result=a+b;
    }else if(op === '-'){
        return result=a-b;
    }else if(op === '/'){
        return result=a/b;
    }else{
        return result=a*b;
    }
}
console.log(operation(4,6,'+'));
console.log(operation(4,6,'-'));
console.log(operation(4,6,'/'));
console.log(operation(4,6));

//crear una función que calcule el área de un triángulo

const areaT =(a, b)=>{
return result= ((a*b)/2);
}
console.log(areaT(6,4));
// crea una función que calcule el perímtro de un rectángulo

const per=(a,b)=>{
return result = ((a*2)+(b*2));
}
console.log(per(6,4));

// función que evalúe 5 datos de empleados y nos devuelva su nombre y quién es el que tiene mayor sueldo

const workers=[
    {name:'Pedro',
    sueldo: 500},
    {name:'Juan',
    sueldo: 200},
    {name:'Lorena',
    sueldo: 800},
    {name:'Felipe',
    sueldo: 400},
    {name:'Clara',
    sueldo: 100},
]

for(let worker of workers){
    let sueldo= 800;
    if(worker.sueldo >= sueldo){
        console.log(worker.name, sueldo);
    }
}

// en un hospital existen 3 áreas pediatría, urgencias y traumatología. presupuesto anual se reparte: urgencia: 37%, pediatria: 42%, traumatología: 21%. Calcular la cantidad de dinero que recibirá cada area para cualquier monto presupuestal.

const areas=[
    {
        name:'urgencia',
        prc:37
    },
    {
        name:'pediatria',
        prc:42
    },
    {
        name:'traumatología',
        prc:21
    }
]

let ppto=(pptoTotal)=>{
areas.map(area=>{
let pptoArea= (pptoTotal*area.prc)/100;
console.log(`El presupuesto para ${area.name} es de ${pptoArea}`);
});

}
ppto(3000);

//Determinar la cantidad de dinero que recibirá un trabajador por concepto de horas extras. Cuando exceda las 40hrs, las primeras 8 se pagan al doble y si exceden se pagan al triple.

let hrs;
const priceHr=5;
const hrExt=10;
const hrExt2=15;
function hrsExt(hrs){
 let extras;
if(hrs <= 8){
     extras=hrExt*hrs;
     console.log(`El trabajador recibe ${extras}$ por ${hrs} horas extras'`);
    }else if(hrs > 8){
        extras=hrExt2*hrs;
        console.log(`El trabajador recibe ${extras}$ por ${hrs} horas extras'`);  
    }else{
        console.log('No ha trabajado horas extras');
    }
}
hrsExt();

// Programa que pida cargar una fecha, verificar si dicha fecha corresponde a la navidad.

function getData(){
    const nav= '2021-12-24';
    let inputDate = document.getElementById('date').value;
    console.log(nav === inputDate ? 'Es Navidad': 'Es '+inputDate);
}

//Qué porcentaje de hombres y de mujeres hay en un grupo de estudiantes.

let students=400;
let women=40;
let men= students-women;
let percResult=()=>{
    let resultW;
    let resultM;
    resultW=(women/students)*100;
    resultM=(men/students)*100;
    console.log('Hay un '+ resultM +'% de hombres' +' y '+ resultW +'% de Mujeres');
};

percResult();
