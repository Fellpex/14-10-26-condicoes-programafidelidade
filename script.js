// const idade = prompt("Qual sua idade?")
// if (idade<=0) {
//     console.log("idade inexistente")
// } else if (idade<=12) {
//     console.log("Criança")
// } else if (idade<=17) {
//     console.log("Adolescente")
// } else if (idade<=40) {
//     console.log("Adulto")
// } else if (idade<=59) {
//     console.log("Jovem senhor")
// } else if (idade<=95) {
//     console.log("Idoso")
// } else {
//     console.log("Ta fazendo hora extra múmia, some daqui")
// }

const pontos = 2000
const anos = 2
if (pontos<=-1) {
    console.log("Ranking inexistente")
} else if (pontos<=99) {
    console.log("Bronze")
} else if (pontos<=499) {
    console.log("Prata")
} else if (pontos<=999) {
    console.log("Ouro")
} else if (pontos>=1000) {
    if (anos>=1){
        console.log("Diamante")
    } else (
        console.log("Faltam anso de casa")
)
}