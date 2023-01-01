'use strict'


let col0El = document.getElementById('col0');
let col1El = document.getElementById('col1');
let col2El = document.getElementById('col2');
let col3El = document.getElementById('col3');
let col4El = document.getElementById('col4');
let col5El = document.getElementById('col5');
let col6El = document.getElementById('col6');
let col7El = document.getElementById('col7');
let col8El = document.getElementById('col8');
let playGroundEl = document.getElementById('playGround');

// global veriables

let a, b, c, d, e, f, g, h, i,address

let PlayAudioFile = new Audio('select.mp3');
let WonAudioFile = new Audio('Won-Match.mp3');

let winner = '';

let arrOfarr = [[a, b, c], [d, e, f], [g, h, i], [a, d, f], [b, e, h], [c, f, i], [a, e, i], [c, e, g]];

let indexArr = [0,1,2,3,4,5,6,7,8]

function switchFn(colomId, player) {

    PlayAudioFile.play();

    switch (colomId) {
        case 0:
            col0El.innerText = player;
            a = player;
            address = indexArr.indexOf(0)
            break;
        case 1:
            col1El.innerText = player;
            b = player;
            address = indexArr.indexOf(1)
            break;
        case 2:
            col2El.innerText = player;
            c = player;
            address = indexArr.indexOf(2)
            break;
        case 3:
            col3El.innerText = player;
            d = player;
            address = indexArr.indexOf(3)
            break;
        case 4:
            col4El.innerText = player;
            e = player;
            address = indexArr.indexOf(4)
            break;
        case 5:
            col5El.innerText = player;
            f = player;
            address = indexArr.indexOf(5)
            break;
        case 6:
            col6El.innerText = player;
            g = player;
            address = indexArr.indexOf(6)
            break;
        case 7:
            col7El.innerText = player;
            h = player;
            address = indexArr.indexOf(7)
            break;
        case 8:
            col8El.innerText = player;
            i = player;
            address = indexArr.indexOf(8)
    }
    indexArr.splice(address, 1);

    arrOfarr = [[a, b, c], [d, e, f], [g, h, i], [a, d, f], [b, e, h], [c, f, i], [a, e, i], [c, e, g]];
}

function cons(colomId,player) {
    
    switchFn(colomId, player);

    conditionChecking(arrOfarr);

    if (winner === '') {
        setTimeout(computerChoice, 1200)
    }
    
    if (winner === 'Player1') {
        console.log('Player 1 win')
    }
}

function computerChoice() {
    let compChoice = indexArr[Math.floor(Math.random() * indexArr.length)]
    switchFn(compChoice,'o');
    conditionChecking(arrOfarr);
    if (winner === 'Player2') {
        console.log('Player 2 win')
    }
}

function conditionChecking(arrOfarr) {
    
    arrOfarr.forEach(k => {
        let v = k.every(y=>{
            return (y==='x')
        })
        let u = k.every(y=>{
            return (y==='o')
        })
        if(v){
            AnounceWinner('You')
        }
        if (u) {
            AnounceWinner('Computer')
        }
    })
}

function AnounceWinner(a) {
    winner = a;
    playGroundEl.innerHTML = `<h1 class='YouWonMatch'>${a}<br><br> Won the match...!!!</h1><button onclick="location.reload()" class="btn">Play Game</button>`
    WonAudioFile.play();
}