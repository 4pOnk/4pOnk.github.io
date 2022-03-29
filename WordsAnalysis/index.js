let textSizeBlock = document.querySelector('.textSize')
let textArea = document.querySelector('.text')

let shuffleArr = (arrS) => {
    let arr = arrS.slice(0, arrS.length);
    let newArr = [];
    let l = arr.length;
    for(let i = 0; i < l; i++){
        let id = Math.floor(Math.random() * (l - newArr.length));
        newArr.push(arr[id])
        arr.splice(id,1)
    }
    return newArr;
}

let scan = () => {
    let text = textArea.value;
    textSizeBlock.innerHTML = ''

    let allowedSymbols = '1234567890qwertyuiopasdfghjklzxcvbnmёйцукенгшщзхъфывапролджэячсмитьбю ';

    text = text.split('').map(s => s.toLowerCase()).map(s => s === '\n' ? ' ' : s).filter(s => allowedSymbols.indexOf(s) !== -1).join('').split(' ').filter(s => s !== '')

    let uniqueWords = [];
    for(let i = 0; i < text.length; i++){
        let id = Array.from(uniqueWords, (el => el.word)).indexOf(text[i])
        if(id === -1){
            uniqueWords.push({
                word: text[i],
                count: 1
            })
        }
        else{
            uniqueWords[id].count++;
        }
    }

    let sortedWords = uniqueWords.sort((a,b) => b.count - a.count)


    let drawTextSize = (words) => {
        let arr = shuffleArr(sortedWords.slice(0, words));
        let sum = 0;
        arr.forEach(el => {sum += el.count})

        arr.forEach(word => {
            let node = document.createElement('span');
            node.innerHTML = word.word;
            let fs = (word.count / sum * 100) * 10;
            node.style.fontSize = fs < 20 ? 20 : fs + 'px';
            textSizeBlock.append(node)
        })
    }

    drawTextSize(40);

}