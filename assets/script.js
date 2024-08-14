const topics = ["HTML", "CSS", "Git", "JavaScript"];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
	for (let x = 0; x < topics.length; x++) {
		console.log(topics[x]);
	}
}

// function selectTopic() {
// 	if (randomTopic === "HTML") {
// 		console.log("Let's study HTML!");
// 	} else if (randomTopic === "CSS") {
// 		console.log("Let's study CSS!");
// 	} else if (randomTopic === "Git") {
// 		console.log("Let's study Git!");
// 	} else if (randomTopic === "JavaScript") {
// 		console.log("Let's study JavaScript!");
// 	} else {
// 		console.log("Please try again!");
// 	}
// }

// Good logic design. Reduce runtime.
function selectTopic() {
	switch (randomTopic) {
		case "HTML":
			console.log("let's study HTML!");
			break;
		case "CSS":
			console.log("let's study CSS!");
			break;
		case "Git":
			console.log("let's study Git!");
			break;
		case "JavaScript":
			console.log("let's study JavaScript!");
			break;
        default: 
            console.log('Please try again!');
	}
} 

console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic();