console.log ("Olá Heroi Você está prestes á entrar na Sala de Gregory Morbius o Vilão de Todo Mapplelandia, Mas antes deves se ter alguns itens: Uma Maçã, armadura divina, espada celestial e 1 poção da Deusa Elsa")

let nomeDoHeroi = "Senhor Mapple";
let experienciaDoHeroi = 7500;
let nivelDoHeroi;

let temMaca = true;
let temArmaduraDivina = true;
let temEspadaCelestial = true;
let temPocaoDaDeusaElsa = true;

do {
    if (experienciaDoHeroi < 1000) {
        nivelDoHeroi = "Ferro";
    } else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
        nivelDoHeroi = "Bronze";
    } else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
        nivelDoHeroi = "Prata";
    } else if (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 8000) {
        nivelDoHeroi = "Platina/Diamante";
    } else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
        nivelDoHeroi = "Ascendente";
    } else if (experienciaDoHeroi >= 10001) {
        nivelDoHeroi = "Radiante";
    }

    if (nivelDoHeroi === "Platina/Diamante" || nivelDoHeroi === "Ascendente" || nivelDoHeroi === "Radiante") {
    
        if (temMaca && temArmaduraDivina && temEspadaCelestial && temPocaoDaDeusaElsa) {
            console.log(`O ${nomeDoHeroi} está no nível de ${nivelDoHeroi}. Pode enfrentar o Gregory Morbius, mesmo bem equipado tome muito cuidado...Boa Sorte!`);
            break;
        } else {
            console.log(`O herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}, mas falta algum item essencial. Continue procurando.`);
    
            temMaca = true;
            temArmaduraDivina = true;
            temEspadaCelestial = true;
            temPocaoDaDeusaElsa = true;
        }
    } else {
        console.log(`Agora ${nomeDoHeroi} está no nível de ${nivelDoHeroi}. Precisa de mais treinamento.`);
    
        experienciaDoHeroi += 1000;
    }
} while (true);
