$(document).ready(function (){
    $("button").on("click", createStudent);
    $("form").on("submit", calculation);
    $("button").on("click", sortStudentByName);
    $("button").on("click", sortStudentByPercent);
    $("button").on("click", sortByName);
    $("button").on("click", sortByPercent);
});

function calculation(event){
    event.preventDefault();
}

let student = [];

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
    student.push(studentObject);

    $("#objectFirst").text(`First Name: ${studentObject.firstName}`)
    $("#objectLast").text(`Last Name: ${studentObject.lastName}`)
    $("#objectPercentage").text(`Percentage: ${percentage}%`)
    $("#objectLetterGrade").text(`Letter Grade: ${letterGrade}`)

    clearAndPrint();

    // $("#arrayStudent").empty();
    //
    // for (let obj of student){
    //     let studentArray = `${obj.firstName}<br> ${obj.lastName}
    //     <br> ${obj.pointsEarned}<br> ${obj.pointsPossible}<br><br>`;
    //     $("#arrayStudent").append(studentArray)
    // }

    return student;
}

function sortStudentByName(a, b)
{
    if (a.lastName < b.lastName)
        return -1
    else if (a.lastName > b.lastName)
        return 1
    else
        return 0
}

function sortStudentByPercent(a, b)
{
    if (a.pointsEarned < b.pointsEarned)
        return -1
    else if (a.pointsEarned > b.pointsEarned)
        return 1
    else
        return 0
}

function sortByName(){
    student.sort(sortStudentByName);

    clearAndPrint()
}

function clearAndPrint(){
    $("#arrayStudent").empty();
    for (let obj of student){
        let studentArray = `${obj.firstName}<br> ${obj.lastName}
        <br> ${obj.pointsEarned}<br> ${obj.pointsPossible}<br><br>`;
        $("#arrayStudent").append(studentArray)
    }
}


function sortByPercent(){
    student.sort(sortStudentByPercent);

    clearAndPrint()
}