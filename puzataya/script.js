let episodesArr = "10 8 6 8 7 6 8 8 10 4".split(" "); //Спасибо любимой
let rollingFrames = 8;
let pageStatus = "season";

let die = document.querySelector(".die");
let description = document.querySelector(".description");

let generateRandomNumbers = (amount, maxValue) => {
    let arr = [];
    for(let i = 0; i < amount; i++){
        arr.push(Math.floor(Math.random() * maxValue) + 1);
    }
    return arr;
}


let selectedSeason;
die.addEventListener("click", () => {
    let ranomNumbers;
    if(pageStatus === "season"){
        ranomNumbers = generateRandomNumbers(rollingFrames, episodesArr.length);
        selectedSeason = ranomNumbers[ranomNumbers.length - 1]
    }
    else{
        ranomNumbers = generateRandomNumbers(rollingFrames, episodesArr[selectedSeason - 1]);
    }

    let prevTimeout = 100;
    console.log(ranomNumbers);
    for(let i = 0; i < rollingFrames; i++){
        setTimeout(() => {
            die.innerHTML = ranomNumbers[i];
            if(i === rollingFrames - 1){
                if(pageStatus === "season"){
                    setTimeout(() => {
                        description.innerHTML = "Так, " + selectedSeason + " сезон... <br> А серия какая?";
                    }, 1000)
                    pageStatus = "episode";
                }else{
                    description.innerHTML = "Результат: " + selectedSeason + " сезон, " + ranomNumbers[ranomNumbers.length - 1] + " серия. <br> Ура, смотреть пузатую с любимой ❤️";
                }
            }
        }, prevTimeout * (1.5 ** i))
    }
})