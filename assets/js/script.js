document.addEventListener("DOMContentLoaded", function() {
	let userAnswer = "";
	let buttons = document.getElementsByTagName("button");
	

	for (let button of buttons) {
		//Get answer from user via event listener on the buttons
		button.addEventListener("click", function() {
			
			if (this.getAttribute("data-type") === "answer-one") {
				userAnswer = "a";
			}
            else if (this.getAttribute("data-type") === "answer-two") {
				userAnswer = "b";
			}
            else if (this.getAttribute("data-type") === "answer-three") {
				userAnswer = "c";
			}
            else if (this.getAttribute("data-type") === "answer-four") {
				userAnswer = "d";
			}

			//Determine if user has the correct answer to question
			if (document.getElementById("sports-question").textContent == "How many test match wickets does Shane Warne have? a) 542 b) 623 c) 679 d) 708") {
				if (userAnswer == "d") {
					alert("That's correct!");
					askQuestion()
				} 
				else {
					alert("That's not correct =(");
					askQuestion();
				}
			}
			else if (document.getElementById("sports-question").textContent == "How many times have Livepool won the Champions League? a) 5 b) 6 c) 8 d) 10") {
				if (userAnswer == "b") {
					alert("That's correct");
					askQuestion();
				}
				else {
					alert("That's not correct =(");
					askQuestion();
				}
			}
            else if (document.getElementById("sports-question").textContent == "Where is the Snooker UK Championship held? a) York b) Cardiff c) London d) Hull") {
				if (userAnswer == "a") {
					alert("That's correct");
					askQuestion()
				}
				else {
					alert("That's not correct =(");
					askQuestion();
				}
			}
			else if (document.getElementById("sports-question").textContent == "Which of these rugby teams are NOT part of the 6Nations? a) France b) Wales c) Georgia d) Italy") {
				if (userAnswer == "c") {
					alert("That's correct");
					askQuestion()
				}
				else {
					alert("That's not correct =(");
					askQuestion();
				}
			}
			else if (document.getElementById("sports-question").textContent == "Who has won the men's singles at Wimbledon the most times? a) Roger Federer b) Rafael Nadal c) Novak Djockovic d) Pete Sampras") {
				if (userAnswer == "a") {
					alert("That's correct");
					askQuestion()
				}
				else {
					alert("That's not correct =(");
					askQuestion();
				}
			}

			
		});

    }

	askQuestion();
});



//Asks a random sports question to the user//
function askQuestion () {
    const questions = ["How many test match wickets does Shane Warne have? a) 542 b) 623 c) 679 d) 708", "How many times have Livepool won the Champions League? a) 5 b) 6 c) 8 d) 10", "Where is the Snooker UK Championship held? a) York b) Cardiff c) London d) Hull","Which of these rugby teams are NOT part of the 6Nations? a) France b) Wales c) Georgia d) Italy", "Who has won the men's singles at Wimbledon the most times? a) Roger Federer b) Rafael Nadal c) Novak Djockovic d) Pete Sampras"];
    const random = Math.floor(Math.random() * questions.length);
    let questionAsked = (random, questions[random]);
	document.getElementById("sports-question").textContent = questionAsked;
}


