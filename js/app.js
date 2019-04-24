// Variável contendo uma função que "gera" cores aleatórias
var numberSquares = 6;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".square"); // Seleciona as divs 'squares'
var pickedColor = pickColor(); //cor escolhida
var colorDisplay = document.getElementById("colorDisplay"); // Seleciona a span com o id colorDisplay
var colorHeader = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset"); // Seleciona o botão "reset"
//Seleciona os botões 'easy' e 'hard'
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



// Níveis do Jogo: Fácil e Difícil
easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberSquares = 3
	colors = generateRandomColors(numberSquares); // Gera três cores
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];

		} else {
			squares[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberSquares = 6
	colors = generateRandomColors(numberSquares); // Gera três cores
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}

});


//Botão resetar
resetButton.addEventListener("click", function() {
	//Gerar novas cores
	colors = generateRandomColors(numberSquares);
	//Selecionar uma cor do  Array;
    pickedColor = pickColor(); 
    //Mudar o colorDisplay compativelmente com a cor selecionada
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    //Add cores aos quadrados
    for (var i = 0; i < squares.length; i++) {
    	squares[i].style.backgroundColor = colors[i];
    }

    colorHeader.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor; // Muda o conteúdo de RGB (no HTML) para a cor escolhida (colors[3])
messageDisplay.style.fontSize = "20px";
messageDisplay.style.textAlign = "center";

// Realiza um foor loop através das 6 divs.
for (var i = 0; i < squares.length; i++) {
	// adciona cores aos quadrados
	squares[i].style.backgroundColor = colors[i];

	// adciona o evento de click
	squares[i].addEventListener("click", function(){
		//Pega a cor do quadrado no qual o usurário clicou.
		var clickedColor = this.style.backgroundColor;
		//Compara a cor que o usuário clicou com a variável pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			colorHeader.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		    document.getElementById("correctEffect").play();
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			document.getElementById("wrongEffect").play();
		}
	});
}

function changeColor(color) {
	// Loop através das divs
	for (var i = 0; i < squares.length; i++) {
		// Muda compatívelmente as cores das divs para a cor pickedColor
		squares[i].style.backgroundColor = color;

	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//Criar um array
	var arr =[];
	//Realiza o loop
	for (var i = 0; i < num; i++) {
		// Adciona no arr
		arr.push(randomColor());

	}
	//Retorna o array
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; // Adcionar espaço depois da vírgula para não causar bugs.
}