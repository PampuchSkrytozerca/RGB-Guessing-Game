var numSquares = 6;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var modeBtn = document.querySelectorAll(".mode");
var resetBtn = document.getElementById("reset");
var h1 = document.querySelector("h1");
var hard = document.querySelector(".hard");


init();

function init() {
    setupButtons();
    setupSquares();
    
for(var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function() {
        for(var i = 0; i < squares.length; i++) {
            if(this.textContent === "Very Hard") {
            squares[i].classList.add("small");
            } else {
            squares[i].classList.remove("small");
            }
        }
    });
}

function setupButtons() {
    for(var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        modeBtn[2].classList.remove("selected");
        modeBtn[3].classList.remove("selected");
        this.classList.add("selected");
            if(this.textContent === "Very Hard") {
                numSquares = 16;
            } else if(this.textContent === "Hard") {
                numSquares = 9;
            } else if(this.textContent === "Medium") {
                numSquares = 6;
            } else {
                numSquares = 3;
            }
        reset();
        });
    }
}
    
function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var colorClicked = this.style.backgroundColor;
            if(colorClicked === pickedColor) {
                message.textContent = "Correct!";
                changeColors(pickedColor);
                resetBtn.textContent = "New Game?";
                h1.style.backgroundColor = pickedColor;
            } else {
                message.textContent = "Try Again";
                this.style.backgroundColor = "#232323"
            }
        });
    }
    reset();
    }
}

function reset() {
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        message.textContent = "Choose color"
        resetBtn.textContent = "Change Colors";
        for(var i = 0; i < squares.length; i++) {
            if(colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor = "#4682b4";
}

//nadawanie przyciskowi reset funkcji
resetBtn.addEventListener("click", function() {
    reset();
});


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
        
        return colors[random];
    }


function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
        

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(getRandomColors());
    }
    return arr;
}

//generowanie kolorow
function getRandomColors() {
//    generowanie r
    var r = Math.floor(Math.random() * 256);
    //    generowanie g
    var g = Math.floor(Math.random() * 256);
    //    generowanie b
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}











