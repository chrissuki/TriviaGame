
var seconds = 29;
var questionNumber = 0;
var correct = 0;
var wrong = 0;
var outOfTime = 0;
var questionsAsked = 0;
var screen = [];

var question1 = {
	question : "What kind of triangle is this?",
	answer: ["right", "acute","obtuse","left"],
	correct : 2,
	image : "assets/images/obtuse.png",
	web : "https://www.khanacademy.org/math/geometry/hs-geo-foundations/hs-geo-angles/v/acute-right-and-obtuse-angles"
}

var question2 = {
	question: "What is the total of all the internal angles of this parrellegram?",
	answer: ["270","360","400","370"],
	correct: 1,
	image: "assets/images/parallelogram.png",
	web : "https://www.khanacademy.org/math/geometry/hs-geo-foundations/hs-geo-polygons/v/sum-of-the-exterior-angles-of-convex-polygon"
}

var question3 = {
	question: "What is the name of this shape?",
	answer: ["pentagon","hexagon", "octogon", "decagon"],
	correct: 0,
	image:"assets/images/pantagon.png",
	web : "https://www.youtube.com/watch?v=1WGC_q3Pls4"
}

var question4 = {
	question: "What is the area of a circle?",
	answer: ["π d^2","π r","π d","π r^2"],
	correct: 3,
	image:"assets/images/circle.png",
	web : "https://www.khanacademy.org/math/basic-geo/basic-geo-area-and-perimeter/area-circumference-circle/v/area-of-a-circle"
}

var question5 = {
	question: "What is the surface are of a cube that is 2 cm X  2 cm X 2 cm ?",
	answer: ["4", "24", "16", "6"],
	correct: 1,
	image:"assets/images/cube.png",
	web : "https://www.youtube.com/watch?v=k3F5cftV8oU"
}

screen[question1, question2,question3, question4, question5];
//screen.push(question1);
//screen.push(question2);
//screen.push(question3);
//screen.push(question4);
//screen.push(question5);

// pushes all object into array screen
//for (var i = 0; i < 2 ; i++){
	//tempObject = "question" + (i + 1);
	//screen.push.JSONparse(tempObject);
//}

function timer(){
	$("#countdown").html("Time Remaining: " + seconds);
	seconds --;
	if (seconds === -1) {
		clearInterval(intervalTimer);
		wrongDisplay(true);
	}
}

function clearDisplay(){
	$("#answerBox3").remove();
}

function correctDisplay(){
	console.log("right2");
	$("#pic").attr("src","http://www.broward.org/Kids/EnvironmentalKidsClub/PublishingImages/Correct.gif");
	$("#pic").css("width", "90%");
	$("#questionBox").remove();
	$("#answerBox0").remove();
	$("#answerBox1").remove();
	$("#answerBox2").remove();
	$("#answerBox3").remove();
	correct++;
	clearDisplay();
	questionNumber = (questionNumber + 1) % 5;
	questionsAsked++;
	//setTimeout(createdisplay,1000);
}

function wrongDisplay(timedOut){
	if (timedOut === true){
		$("#pic").attr("src","https://i.ytimg.com/vi/FufHFu6u5rQ/maxresdefault.jpg");
		outOfTime++;
	}
	else{
		$("#pic").attr("src","https://t4.ftcdn.net/jpg/00/78/72/95/240_F_78729571_OKDR6xCOJ6jIRCZabIbvxYq4iFx3WvRl.jpg");
		wrong++;
	}
	
	$("#pic").css("width", "90%");
	$("#answerBox0").remove();
	$("#answerBox1").remove();
	$("#answerBox2").remove();
	//console.log("number = " + screen[questionNumber].correct);
	//console.log("correct answer = " + screen[questionNumber].answer[number]);
	var number = screen[questionNumber].correct;
	$("#answerBox3").html("<h2>The corect answer was... " + screen[questionNumber].answer[number] + "</h2>");
	clearDisplay();
	createdisplay();
}

function checkanswer(guess){
	//if answer righ
	console.log(screen[questionNumber].correct + "index");
	console.log(guess + "guess");
	//turn off timer
	clearInterval(intervalTimer);
	//if correct
	if (screen[questionNumber].correct == guess){
		console.log("right");
		//correctDisplay();
	}
	else{
		//wrongDisplay(false);
	}

}

function createdisplay() {
	
	$("#pic").attr("src",screen[questionNumber].image);
	var questionBox = $("<h2 id = 'questionBox'>" + screen[questionNumber].question + "</h2>");
	$("#display").append(questionBox);
	//$("#countdown").append(questionBox);// why does questionbox disappear when you update html in parent countdown?
	var answerBox = $("<h3 id = 'answerBox0' onclick = 'checkanswer(0)'> " + screen[questionNumber].answer[0] + "</h3>");
	$("#display").append(answerBox);
	var answerBox = $("<h3 id = 'answerBox1' onclick = 'checkanswer("+i+")'> " + screen[questionNumber].answer[1] + "</h3>");
	$("#display").append(answerBox);
	var answerBox = $("<h3 id = 'answerBox2' onclick = 'checkanswer(2)'> " + screen[questionNumber].answer[2] + "</h3>");
	$("#display").append(answerBox);
	var answerBox = $("<h3 id = 'answerBox3' onclick = 'checkanswer(3)'> " + screen[questionNumber].answer[3] + "</h3>");
	$("#display").append(answerBox);
	if (seconds == 0){
		wrongDisplay()
	}
}
//?????how do I put this in a loop with i as checkanswer checkanswer(i)?
//screen = [question1, question2,question3, question4, question5];
// for (var i = 0; i < 4; i ++){
// 		//console.log(screen[questionNumber].answer[i]);
// 		var choice = screen[questionNumber].answer[i];
// 		var answerBox = $("<h3 id = 'answerBox' onclick = 'checkanswer(i)'>" + choice + "</h3>");
// 		$("#display").append(answerBox);
// 	}  every i became a 4....

function start(){
	var countdown = $("<h2 id = 'countdown'>Time Remaining: " +  seconds +  "</h2>");
	intervalTimer = setInterval(timer,1000);
	$("#title").append(countdown);
	$("#intro-start").attr("src","");
	$("#intro-start").css("margin","0px 0px 0px 0px");
	$("#intro-start").css("height","0");
	questionNumber = Math.floor (Math.random() * screen.length);
	console.log(questionNumber + "question #");
	createdisplay();
}

//clearInterval(intevalTimer);




// 360 degrees suqare question 2
//https://www.khanacademy.org/math/geometry/hs-geo-foundations/hs-geo-polygons/v/sum-of-the-exterior-angles-of-convex-polygon

// acute triange question 1
//https://www.khanacademy.org/math/geometry/hs-geo-foundations/hs-geo-angles/v/acute-right-and-obtuse-angles

// latin roots question 3
//https://www.youtube.com/watch?v=1WGC_q3Pls4

// area of circle question 4
//https://www.khanacademy.org/math/basic-geo/basic-geo-area-and-perimeter/area-circumference-circle/v/area-of-a-circle

// surface area question 5
// https://www.youtube.com/watch?v=k3F5cftV8oU
