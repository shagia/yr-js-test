//Initializing button statements, is there a better way to do this?

//On the first set of buttons, only let one be clicked

//

//Q1
var q1b1State = false;
var q1b2State = false;
var q1b3State = false;
var q1b4State = false;
var q1Status = 0;

//Q2
var q2b1State = false;
var q2b2State = false;
var q2b3State = false;
var q2Status = 0;

//Final solutions
var q1Solution = [];

//Each question has a list of responses
//Keep track of responses
//Dictionary of content and possible keywords??

/*$(document).ready(function() {
	if(q1Status == 2){
		$("#q1-error").show();
	};
});*/


//Q1 statements
$("#q1b1").click(function() {

	if(q1b1State == false && q1Status < 2) {
		q1b1State = true;
		q1Status = q1Status + 1;
		$(this).addClass('active');

		var buttonContent = $(event.target).text();
		q1Solution.push(buttonContent);
		console.log(buttonContent);


		console.log(this + ' ' + q1b1State + ', ' + q1Status);
	}

	else if (q1b1State == true) {
		q1b1State = false;		
		$(this).removeClass('active');
		q1Status = q1Status - 1;
		q1Solution.splice(1, buttonContent);
		console.log(q1Solution);
		console.log(this + ' ' + q1b1State + ', ' + q1Status);
	}
});

$("#q1b2").click(function() {
	if(q1b2State == false && q1Status < 2) {
		q1b2State = true;
		q1Status = q1Status + 1;

		var buttonContent = $(event.target).text();
		q1Solution.push(buttonContent);
		console.log(buttonContent);

		$(this).addClass('active');
		console.log(this + ' ' + q1b2State + ', ' + q1Status);
	}

	else if (q1b2State == true) {
		q1b2State = false;
		q1Status = q1Status - 1;	
		$(this).removeClass('active');
		console.log(this + ' ' + q1b2State + ', ' + q1Status);
	}
});
$("#q1b3").click(function() {
	if(q1b3State == false && q1Status < 2) {
		q1b3State = true;
		q1Status = q1Status + 1;
		$(this).addClass('active');

		var buttonContent = $(event.target).text();
		q1Solution.push(buttonContent);
		console.log(buttonContent);

		console.log(this + ' ' + q1b3State + ', ' + q1Status);
	}

	else if (q1b3State == true) {
		q1b3State = false;
		q1Status = q1Status - 1;		
		$(this).removeClass('active');
		console.log(this + ' ' + q1b3State + ', ' + q1Status);
	}
});
$("#q1b4").click(function() {
	if(q1b4State == false && q1Status < 2) {
		q1b4State = true;
		q1Status = q1Status + 1;
		$(this).addClass('active');

		var buttonContent = $(event.target).text();
		q1Solution.push(buttonContent);
		console.log(buttonContent);

		console.log(this + ' ' + q1b4State + ', ' + q1Status);
	}

	else if (q1b4State == true) {
		q1b4State = false;
		q1Status = q1Status - 1;		
		$(this).removeClass('active');
		console.log(this + ' ' + q1b4State + ', ' + q1Status);
	}
});

$("#q1NP").click(function() {
	if ($(".active") [0]){
		console.log('test');
	}
	else {
		console.log("You must select at least one option!");
	}
});

//Q2 statements
$("#q2b1").click(function() {

	if(q2b1State == false) {
		q2b1State = true;
		q2Status = q2Status + 1;
		$(this).addClass('active');
		console.log(this + ' ' + q2b1State + ', ' + q2Status);
	}

	else if (q2b1State == true) {
		q2b1State = false;		
		$(this).removeClass('active');
		q2Status = q2Status - 1;
		console.log(this + ' ' + q2b1State + ', ' + q2Status);
	}



});

$("#q2b2").click(function() {

	if(q2b2State == false) {
		q2b2State = true;
		q2Status = q2Status + 1;
		$(this).addClass('active');
		console.log(this + ' ' + q2b2State + ', ' + q2Status);
	}

	else if (q2b2State == true) {
		q2b2State = false;		
		$(this).removeClass('active');
		q2Status = q2Status - 1;
		console.log(this + ' ' + q2b2State + ', ' + q2Status);
	}



});

$("#q2b3").click(function() {

	if(q2b3State == false) {
		q2b3State = true;
		q2Status = q2Status + 1;
		$(this).addClass('active');
		console.log(this + ' ' + q2b3State + ', ' + q2Status);
	}

	else if (q2b3State == true) {
		q2b3State = false;		
		$(this).removeClass('active');
		q2Status = q2Status - 1;
		console.log(this + ' ' + q2b3State + ', ' + q2Status);
	}



});

//Big boxes, jesus

$("#box1").click(function() {
$(this).addClass('active-box');

});
$("#box2").click(function() {
$(this).addClass('active-box');
});
$("#box3").click(function() {
$(this).addClass('active-box');
});
$("#box4").click(function() {
$(this).addClass('active-box');
});
$("#box5").click(function() {
$(this).addClass('active-box');
});
$("#box6").click(function() {
$(this).addClass('active-box');
});
$("#box7").click(function() {
$(this).addClass('active-box');
});
$("#box8").click(function() {
$(this).addClass('active-box');
});
$("#box9").click(function() {
$(this).addClass('active-box');
});
$("#box10").click(function() {
$(this).addClass('active-box');
});
$("#box11").click(function() {
$(this).addClass('active-box');
});
$("#box12").click(function() {
$(this).addClass('active-box');
});



//The logic should let a user click a button and check how many buttons have been clicked. If under 2, let them click another or the same button, if exactly 2, kill the function until they click one that's active, which'll bring them back down to 1 or 0.

//Make a template where only one button in a row can be clicked, and another where multiple can be.

//Maybe the buttons can have a "true" class, and jquery can check each respective chapter's buttons for said 'true' buttons and their attatched number when pressing the "next page" ID.

//In the background after the page is over (when someone presses next page) it can select the outcome based on what the user chose, and display it when the overall quiz is over. 