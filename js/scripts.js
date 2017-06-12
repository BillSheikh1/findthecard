$(document).ready(function() {

	var colours = ["red","red","blue"];

	shuffle(colours);

	function cardFill(card, colour) {
		card.fillStyle = colour;
		card.fill();
	}

	function end(card) {
		if(card == "blue") {
			$("#end").html("Winner <button id='reload' onclick='location.reload();'>Reload</button>");
		}
		else {
			$("#end").html("Loser <button id='reload' onclick='location.reload();'>Reload</button>");
		}
	}

	var c1 = document.getElementById('canvas');
	var c2 = document.getElementById('canvas');
	var c3 = document.getElementById('canvas');

	var cardOne = c1.getContext('2d');
	var cardTwo = c2.getContext('2d');
	var cardThree = c3.getContext('2d');

	var colourOne = colours.pop();
	var colourTwo = colours.pop();
	var colourThree = colours.pop();

	cardOne.beginPath();
	cardOne.lineWidth = "1";
	cardOne.strokeStyle = "black";
	cardOne.rect(50,50,150,300);
	cardOne.stroke();
	cardFill(cardOne, colourOne);

	
	cardTwo.beginPath();
	cardTwo.lineWidth = "1";
	cardTwo.strokeStyle = "black";
	cardTwo.rect(230,50,150,300);
	cardTwo.stroke();
	cardFill(cardTwo, colourTwo);

	
	cardThree.beginPath();
	cardThree.lineWidth = "1";
	cardThree.strokeStyle = "black";
	cardThree.rect(410,50,150,300);
	cardThree.stroke();
	cardFill(cardThree, colourThree);

	$("#start").click(function() {

		cardOne.beginPath();
		cardOne.lineWidth = "1";
		cardOne.strokeStyle = "black";
		cardOne.rect(50,50,150,300);
		cardOne.stroke();
		cardFill(cardOne,"white");

		cardTwo.beginPath();
		cardTwo.lineWidth = "1";
		cardTwo.strokeStyle = "black";
		cardTwo.rect(230,50,150,300);
		cardTwo.stroke();
		cardFill(cardTwo,"white");

		cardThree.beginPath();
		cardThree.lineWidth = "1";
		cardThree.strokeStyle = "black";
		cardThree.rect(410,50,150,300);
		cardThree.stroke();
		cardFill(cardThree,"white");

		$("#selectOne").click(function() {
		end(colourOne);
	});

	$("#selectTwo").click(function() {
		end(colourTwo);
	});

	$("#selectThree").click(function() {
		end(colourThree);
	});

	});
});