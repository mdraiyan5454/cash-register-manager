// const billAmount = document.querySelector("#bill_amount");
// const cashGiven = document.querySelector("#cash_given")
// const checkButton = document.querySelector("#check_button");
// const message = document.querySelector("#error_message");
// const noOfNotes =document.querySelectorAll(".no_of_notes");

// const availableNotes = [2000,500,100,20,10,5, 1];
// checkButton.addEventListener("click", function validationBillAndCashAmount(){
//     hideMessage();
// // /-----parse input value as anumbers
//     const billAmountValue = parseFloat(billAmount.value);
//     const cashGivenValue = parseFloat(cashGiven.value);

     
//     if(billAmount.value > 0){
//         if(cashGiven.value >= billAmount.value){
//             const amountToBeReturned = cashGiven.value - billAmount.value;
//             calculateChange(amountToBeReturned);

//         } else {
//           showMessage(
//             "Do Wanna Wash Plates?");
//         }
//     }else {
//         showMessage("Invalid Bill Amount");
//     }
// });
// function calculateChange(amountToBeReturned) {
//     for( let i = 0; i < availableNotes.length; i++ ){
//         const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
//         amountToBeReturned %= availableNotes[i];
//         noOfNotes[i].innerText =numberOfNotes;}

// }
// function hideMessage(){
//     message.style.display = 'none';
// }
// function showMessage(msg) {
//     // console.log("here");
//     message.style.display = "block";
//     message.innerText = msg;
// }





// document.getElementById("check_button").addEventListener("click", function() {
//     var billAmount = parseFloat(document.getElementById("bill_amount").value);
//     var cashGiven = parseFloat(document.getElementById("cash_given").value);
    
//     if (isNaN(billAmount) || isNaN(cashGiven)) {
//         document.getElementById("error_message").innerText = "Please enter valid numbers.";
//         return;
//     }
    
//     var changeAmount = cashGiven - billAmount;
//     if (changeAmount < 0) {
//         document.getElementById("error_message").innerText = "Cash given is less than bill amount.";
//         return;
//     }
    
//     document.getElementById("error_message").innerText = "";
    
//     var notes = [2000, 500, 100, 20, 10, 5, 1];
//     var noteCounts = [];
//     for (var i = 0; i < notes.length; i++) {
//         noteCounts.push(Math.floor(changeAmount / notes[i]));
//         changeAmount %= notes[i];
//     }
    
//     var noteElements = document.querySelectorAll(".no_of_notes");
//     for (var i = 0; i < noteElements.length; i++) {
//         noteElements[i].innerText = noteCounts[i];
//     }
// });








document.getElementById("check_button").addEventListener("click", function() {
    var billAmount = parseFloat(document.getElementById("bill_amount").value);
    var cashGiven = parseFloat(document.getElementById("cash_given").value);
    
    if (isNaN(billAmount) || isNaN(cashGiven)) {
        document.getElementById("error_message").innerText = "Please enter valid numbers.";
        return;
    }
    
    var changeAmount = cashGiven - billAmount;
    if (changeAmount < 0) {
        document.getElementById("error_message").innerText = "Cash given is less than bill amount.";
        return;
    }
    
    document.getElementById("error_message").innerText = "";
    
    var notes = [2000, 500, 100, 20, 10, 5, 1];
    var noteCounts = [];
    for (var i = 0; i < notes.length; i++) {
        noteCounts.push(Math.floor(changeAmount / notes[i]));
        changeAmount %= notes[i];
    }
    
    var noteElements = document.querySelectorAll(".no_of_notes");
    for (var i = 0; i < noteElements.length; i++) {
        noteElements[i].innerText = noteCounts[i];
    }
    
    // Calculate and display balance
    var balance = cashGiven - billAmount - notes.reduce((acc, note, index) => acc + noteCounts[index] * note, 0);
    document.getElementById("balance_message").innerText = "Balance: " + balance.toFixed(2);
});
