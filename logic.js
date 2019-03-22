// var config = {
//     apiKey: "AIzaSyDjr-GGOG6PAx7jnnMKNtT_ssConRUBPU0",
//     authDomain: "train-timer-e81e2.firebaseapp.com",
//     databaseURL: "https://train-timer-e81e2.firebaseio.com",
//     projectId: "train-timer-e81e2",
//     storageBucket: "train-timer-e81e2.appspot.com"
//   };

//   firebase.initializeApp(config);

//   var database = firebase.database();

//add new train button
$("#submit").on("click", function (event) {
    event.preventDefault();

    //takes user input
    let trainName = $("#train-name-input").val().trim();
    let trainDestination = $("#destination-input").val().trim();
    let firstTrainTime = $("#first-time-input").val().trim();
    let trainFrequency = $("#frequency-input").val().trim();

    let newTrain = {
        name: trainName,
        destination: trainDestination,
        firstTime: firstTrainTime,
        frequency: trainFrequency
    };

    // database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTime);
    console.log(newTrain.frequency);

    alert("New train added.");

    // Create the new row
    var newRow = $("<tr>").append(
        $("<td>").text(newTrain.name),
        $("<td>").text(newTrain.destination),
        $("<td>").text(newTrain.frequency),
        $("<td>").text(newTrain.frequency),
        $("<td>").text(newTrain.frequency),
    );

    newRow.attr("class", "text-center");
    // newRow.append("<hr>");
    $("#train-schedule > tbody").append(newRow);
   



        // Clears all of the text-boxes
        $("#train-name-input").val("");
        $("#destination-input").val("");
        $("#first-time-input").val("");
        $("#frequency-input").val("");
});

//   // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
//   database.ref().on("child_added", function(childSnapshot) {
//     console.log(childSnapshot.val());

//     // Store everything into a variable.
//     var empName = childSnapshot.val().name;
//     var empRole = childSnapshot.val().role;
//     var empStart = childSnapshot.val().start;
//     var empRate = childSnapshot.val().rate;

//     // Employee Info
//     console.log(empName);
//     console.log(empRole);
//     console.log(empStart);
//     console.log(empRate);

//     // Prettify the employee start
//     var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");

//     // Calculate the months worked using hardcore math
//     // To calculate the months worked
//     var empMonths = moment().diff(moment(empStart, "X"), "months");
//     console.log(empMonths);

//     // Calculate the total billed rate
//     var empBilled = empMonths * empRate;
//     console.log(empBilled);



//     // Append the new row to the table
//     
//   });