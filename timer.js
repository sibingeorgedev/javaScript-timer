"use strict";

$(document).ready(() => {
	$("#progressbar").progressbar({
		value: 0
	});

	$("#start_timer").click(() => {
		let totalTime = $("#time").val();
		let interval = $("#interval").val();
		let isValid = true;

		// validate the time
		if (totalTime == "") {
			$("#time_error").text("This field is required.");
			isValid = false;
		} else if (isNaN(totalTime)) {
			$("#time_error").text("Time must be a number.");
			isValid = false;
		} else {
			$("#time_error").text("");
		}

		// validate the interval
		if (interval == "") {
			$("#interval_error").text("This field is required.");
			isValid = false;
		} else if (isNaN(interval)) {
			$("#interval_error").text("Interval must be a number.");
			isValid = false;
		} else {
			$("#interval_error").text("");
		}

		if (isValid) {
			totalTime = totalTime * 1000;
			interval = interval * 1000;
			let elapsedTime = 0;
			let timer = setInterval(() => {
				elapsedTime += interval;
				// calculate the progress as a percentage
				let progress = (elapsedTime / totalTime) * 100;

				// update the Progressbar value
				$("#progressbar").progressbar("value", progress);

				if (elapsedTime >= totalTime) {
					clearInterval(timer);
					$("#complete span").text("Time is up!");
				}
			}, interval);
		}
	});

	$("#time").focus();
});
