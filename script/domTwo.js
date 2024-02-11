
function yellow() {
    document.body.style.background = "yellow";
}

const newarr = [2, 4, 5 ,5];


// option 2 
const purpleBg = document.getElementById('purple');

purpleBg.onclick = makePurple;

function makePurple() {
    document.body.style.background = 'purple';
}

// option 3

const greenBtn = document.getElementById('green');
greenBtn.onclick = function makeGreen(){
    document.body.style.background = 'green';
}



// option 4

const pinkBtn = document.getElementById('pink');
pinkBtn.addEventListener('click', makePink);

function makePink() {
    document.body.style.background = 'pink';
}

// option 5

const orangeBtn = document.getElementById('orange');

orangeBtn.addEventListener('click', function makeOrange() {
    document.body.style.background = 'orange';
})


// final jaita use korte hobe 

document.getElementById('aqua').addEventListener('click', function(){
    document.body.style.background = 'aqua';
})


// form to show Queston ***************************** const 2 bar decliar how 

document.getElementById('submit').addEventListener('click', function (){
    const comment = document.getElementById('comment');
    const commentText = comment.value;
    const showText = document.getElementById('showText');
    showText.innerText = commentText;
    comment.value = '';
})




























