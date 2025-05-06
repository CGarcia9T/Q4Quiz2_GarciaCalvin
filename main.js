function averageGrade() {
	let mathGrade = parseInt(document.getElementById('mathGrade').value);
	let socialGrade = parseInt(document.getElementById('socialGrade').value);
	let scienceGrade = parseInt(document.getElementById('scienceGrade').value);

	var averageInput = (mathGrade + socialGrade + scienceGrade) / 3;
	var finalAverage = Math.round(averageInput)

	if (isNaN(mathGrade) || isNaN(socialGrade) || isNaN(scienceGrade)) {
		window.alert("Please enter valid numeric grades for all subjects.");
		return;
	}

	if (finalAverage >= 94 && finalAverage <= 100) {
		window.alert("Your average grade is " + finalAverage + ". - Excellent.");
	} else if (finalAverage >= 87) {
		window.alert("Your average grade is " + finalAverage + ". - Above Satisfactory.");
	} else if (finalAverage >= 80) {
		window.alert("Your average grade is " + finalAverage + ". - Satisfactory.");
	} else if (finalAverage >= 75) {
		window.alert("Your average grade is " + finalAverage + ". - Needs Improvement.");
	} else if (finalAverage >= 70) {
		window.alert("Your average grade is " + finalAverage + ". - Poor.");
	} else {
		window.alert("Your average grade is " + finalAverage + ". - Failing.");
	}
}