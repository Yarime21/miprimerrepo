// funciona como un condicional, se utiliza para evaluaciones complejas cle
const EDAD = 60;
let mensaje = "";

// if (EDAD == 5){
//     mensaje = "es un infante";
// } else if (EDAD == 18){
//     mensaje = "Es un adolecente"
// }else if (EDAD == 30){
//     mensaje = "Es mayor de edad";
// }

switch (EDAD) {
    case 5:
        mensaje = "es un infante";
        break;
    case 18:
        mensaje = "Es un adolecente";
        break;
    case 30:
        mensaje = "Es mayor de edad";
        break;
    default:
        mensaje = "anciano";
               
    
}
console.log(mensaje);
