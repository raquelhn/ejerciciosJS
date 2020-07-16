//ejercicio 2



let hours= Math.floor(Math.random() * 61)
let pagoperhour = 10
let sueldo 

console.log(`las horas son ${hours}`)
if(hours<41){
    sueldo=hours*pagoperhour;
    console.log(sueldo)
}else if(hours>40){
    sueldo=hours*2*pagoperhour;
    console.log(sueldo)
}

//ejercicio 3
let presupuesto = Math.floor(Math.random() * 301)

console.log(`el presupuesto es ${presupuesto}`)
if(presupuesto<=10){
    console.log('compra tarjeta')
}else if(presupuesto>10 && presupuesto<=100){
    console.log('compra chocolates')
}else if(presupuesto>100 && presupuesto<=250){
    console.log('compra flores')
}else if(presupuesto>250){
    console.log('compra un anillo')
}

//ejercicio 4
let hourParking = Math.floor(Math.random() * 25)
let parkingPerHour
let cobro = hourParking*parkingPerHour
let cobroTotal
console.log(`las horas en el parking son ${hourParking}`)

if(hourParking<3){
    parkingPerHour=5;
    console.log(`el total a pagar es ${cobro}`)
}else if(hourParking>2 && hourParking<6){
    parkingPerHour= 4;
    cobroTotal=10 + (hourParking-2)*parkingPerHour
    console.log(`el total a pagar es ${cobroTotal}`)
}else if(hourParking>=6 && hourParking<11){
    parkingPerHour=3
    cobroTotal=22 + (hourParking-5)*parkingPerHour;
    console.log(`el total a pagar es ${cobroTotal}`)
}else if(hourParking>10){
    parkingPerHour=2
    cobroTotal=37 + (hourParking-10)*parkingPerHour;
    console.log(`el total a pagar es ${cobroTotal}`)
}

//ejercicio 8

let bono1
let bono2
let antiguedad=Math.floor(Math.random() * 66)
let salary=Math.floor(Math.random() * (4000-999)+999)

if(antiguedad>2 && antiguedad<5 ){
    bono1 = salary*0.20
}else if(antiguedad>=5){
    bono1 = salary*0.30
}

if(salary<1000){
    bono2 = salary*0.25
}else if(salary>1000 && salary <=3500){
    bono2=0.15*salary
}else if(salary>3500){
    bono2=salary*0.10
}

if (bono1>bono2){
    console.log(`se le da el bono por antiguedad: ${bono1}`)
} else if(bono1<bono2){
    console.log(`se le da el bono por sueldo: ${bono2}`)
}

//ejercicio 9
let rpta = Math.floor(Math.random() * (2)+1)
let tipoPoliza
let cuotaBase

console.log(rpta)
//tipo 1 es la poliza A, tipo 2 es las poliza B
if(rpta==1 ){
    tipoPoliza =1
    console.log('la poliza A')
    cuotaBase = 1200
}else{
    tipoPoliza=2
    console.log('la poliza B')
    cuotaBase=950
    
}
console.log(cuotaBase)

//se definio cuota base y tipo de poliza, ahora se vera los adicionales
let edad = Math.floor(Math.random() * (60)+18)
let drinkAlc = Math.random() < 0.5;
let glasses = Math.random() < 0.5;
let disease = Math.random() < 0.5;
let cargoTotal
 
if(drinkAlc){
    cargoTotal = cuotaBase+0.10*cuotaBase
}else if(glasses){
    cargoTotal = cuotaBase+0.05*cuotaBase
}else if(disease){
    cargoTotal = cuotaBase+0.05*cuotaBase
}else if(edad>40){
    cargoTotal = cuotaBase+0.20*cuotaBase
}else if(edad<=40){
    cargoTotal = cuotaBase+0.10*cuotaBase
}

console.log(`el cargo total es ${cargoTotal} `)

//ejercicio 11
let antig = Math.floor(Math.random() * (5)+1)
let bono

console.log(`la antiguedad es de ${antig}`)
switch (antig) {
    case 1:
        bono=100
        break;
    case 2:
        bono=200
        break;
    case 3:
        bono=300
        break;
    case 4:
        bono=400
        break;
    case 5:
        bono=500
        break;
}

console.log(`el bono sera de ${bono}`)

//ejercicio 17
let sal = Math.floor(Math.random() * 60000+1)
let paquete=''
console.log(sal)


    if(sal<10000) {
        paquete='se comprara un par de zapatos, dos camisas y dos pantalones'
    }else if(sal<20000 && sal>=10000){
        paquete='se comprará dos pares de zapatos, tres camisas y tres pantalones'
    }else if(sal<50000 && sal>=20000){
        paquete='se comprará una grabadora, tres pares de zapatos, cinco camisas y cinco pantalones.'
    }else if(sal>=50000){
        paquete='se comprara una televisión, un modular, tres pares de zapatos, cinco camisas y cinco pantalones.'
    }
    
console.log(`el paquete que podra comprar es ${paquete}`)

