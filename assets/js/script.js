document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "answer-one") {
				alert("You clicked a button");
			}
            else if (this.getAttribute("data-type") === "answer-two") {
				alert("You clicked 2 button");
			}
            else if (this.getAttribute("data-type") === "answer-three") {
				alert("You clicked 3 button");
			}
            else if (this.getAttribute("data-type") === "answer-four") {
				alert("You clicked 4 button");
			}
            else {
				let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
		});
    }
})

//Asks a random sports question to the user//
function askQuestion () {
    const questions = ["How many test match wickets does Shane Warne have?", "How many times have Livepool won the Champions League?", "Where is the Snooker UK Championship held?", "Which of these rugby teams are NOT part of the 6Nations?", "Who has won the men's singles at Wimbledon the most times?"];
    const random = Math.floor(Math.random() * questions.length);
    let questionAsked = (random, questions[random]);
    document.getElementById("sports-question").textContent = questionAsked;
}

askQuestion();