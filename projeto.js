let heroi = "aspas"
let xp = 15.00
let elo = ""

if (xp < 1.000) {
    elo = "ferro";

}
else if (xp >= 1.001 && xp <= 2.000) {
    elo = "bronze";


} else if (xp >= 2.001 && xp <= 5.000) {
    elo = "prata";

}
else if (xp >= 6.001 && xp <= 7.000) {
    elo = "ouro";

}
else if (xp >= 7.001 && xp <= 8.000) {
    elo = "Platina";

}
else if (xp >= 8.001 && xp <= 9.000) {
    elo = "Ascendente";

} else if (xp >= 9.001 && xp <= 10.000) {
    elo = "Imortal";
}

else if (xp >= 10.001) {
    elo = "Radiante";
}
console.log(`O Herói de nome ${[heroi]} está no nível de ${elo}`);
