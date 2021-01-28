// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function calcGrades() {

    //create variables
    var assign;
    var proj;
    var quiz;
    var exam;
    var intexScore;

    //assign variables
    assign = parseInt($("#assignments").val())*.5;
    proj = parseInt($("#projects").val()) * .1;
    quiz = parseInt($("#quizzes").val()) * .1;
    exam = parseInt($("#exams").val()) * .2;
    intexScore = parseInt($("#intex").val()) * .1;

    //chec to make sure inputs are valid
    if (!(assign > 0 && assign <= 50)) {
        alert("assignments grade is not filled out correctly");
        return false;
    }
    else if (!(proj >= 0 && proj <= 10)) {
        alert("project grades is not filled out correctly")
        return false;
    }
    else if (!(quiz >= 0 && quiz <= 10)) {
        alert("quiz grade is not filled out correctly");
        return false;
    }
    else if (!(exam >= 0 && exam <= 20)) {
        alert("exam grade is not filled out correctly");
        return false;
    }
    else if (!(intexScore >= 0 && intexScore <= 10)) {
        alert("Intex grade is not filled out correctly")
        return false;
    }

    //send alert
    var overall = assign + proj + quiz + exam + intexScore;
    alert("Overall Score: " + overall + "%");
}




