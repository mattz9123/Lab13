$(document).ready(function (){
    $("button").on("click", createStudent);
    $("form").on("submit", calculation);
});

function calculation(event){
    event.preventDefault();
}

function createStudent(){
    let studentObject = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        pointsEarned: $("#pointsEarned").val(),
        pointsPossible: $("#pointsPossible").val()
    }
    let percentage = studentObject.pointsEarned / studentObject.pointsPossible * 100;
    let letterGrade = '';

    if (percentage > 90){
        letterGrade = 'A';
    }
    else if (percentage > 80){
        letterGrade = 'B';
    }
    else if (percentage > 70){
        letterGrade = 'C';
    }
    else if (percentage > 60){
        letterGrade = 'D';
    }
    else{
        letterGrade = 'F'
    }

    $("#objectFirst").text(`First Name: ${studentObject.firstName}`)
    $("#objectLast").text(`Last Name: ${studentObject.lastName}`)
    $("#objectPercentage").text(`Percentage: ${percentage}%`)
    $("#objectLetterGrade").text(`Letter Grade: ${letterGrade}`)

}
