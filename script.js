let emojies = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"];

document.querySelector(".generate").addEventListener("click", () => {
  let text = document.querySelector(".text_inp").value.split(" ");
  let smiles = document.querySelector(".smiles_inp").value.split(" ");

  let pasta = [];
  let repeats = +document.querySelector(".repeats_inp").value;
  for (let i = 0; i < repeats; i++)
    text.forEach((val, id) => {
      pasta.push(val.split("_").join(" "));
      if(!document.querySelector('.checkbox').checked){
        pasta.push(smiles[(i * text.length + id) % smiles.length]);
      }else{
        pasta.push(emojies[Math.floor(Math.random() * (emojies.length))]);
      }
    });

  document.querySelector(".pasta").innerHTML = pasta.join(" ");

  document.querySelector('.flex').style.display = 'flex';
});

document.querySelector("img").addEventListener("click", () => {
    var copyText = document.querySelector(".pasta");
    let range = new Range();

    range.setStart(copyText, 0);
    range.setEnd(copyText, 1);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
  
  console.log('copied');
});
