let randomNumber1=Math.floor((Math.random()*6)+1);
console.log(randomNumber1);

if(randomNumber1==1)
document.body.children[2].children[0].setAttribute("src","dice1.png")
if(randomNumber1==2)
document.body.children[2].children[0].setAttribute("src","dice2.png")
if(randomNumber1==3)
document.body.children[2].children[0].setAttribute("src","dice3.png")
if(randomNumber1==4)
document.body.children[2].children[0].setAttribute("src","dice4.png")
if(randomNumber1==5)
document.body.children[2].children[0].setAttribute("src","dice5.png")
if(randomNumber1==6)
document.body.children[2].children[0].setAttribute("src","dice6.png")

let randomNumber2=Math.floor((Math.random()*6)+1);
console.log(randomNumber2);

if(randomNumber2==1)
document.body.children[2].children[1].setAttribute("src","dice1.png")
if(randomNumber2==2)
document.body.children[2].children[1].setAttribute("src","dice2.png")
if(randomNumber2==3)
document.body.children[2].children[1].setAttribute("src","dice3.png")
if(randomNumber2==4)
document.body.children[2].children[1].setAttribute("src","dice4.png")
if(randomNumber2==5)
document.body.children[2].children[1].setAttribute("src","dice5.png")
if(randomNumber2==6)
document.body.children[2].children[1].setAttribute("src","dice6.png")
if(randomNumber1>randomNumber2)
document.body.children[0].children[0].innerHTML="Player 1 wins"
if(randomNumber1<randomNumber2)
document.body.children[0].children[0].innerHTML="Player 2 wins"
if(randomNumber1==randomNumber2)
document.body.children[0].children[0].innerHTML="Draw!!play Again"