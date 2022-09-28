// Code your solutions in this file
const writeTo = ["Guadalupe", "Ollie", "Aki"]
function writeCards(writeTo){
    for (const element of writeTo){
        console.log(`Thank you, ${element}, for the wonderful surprise gift!`)
    }
    return writeTo
}
writeCards(writeTo)