const today = new Date();

const days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var day = days_of_week[new Date().getDay()];
var day = new Date().getDay();

//var box = '11';



// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }

switch (new Date().getMonth()) {
    case 0:
        month = "Jan";
        break;
    case 1:
        month = "Feb";
        break;
    case 2:
        month = "Mar";
        break;
    case 3:
        month = "Apr";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "Jun";
        break;
    case 6:
        month = "Jul";
        break;
    case 7:
        day = "Aug";
        break;
    case 8:
        day = "Sept";
        break;
    case 9:
        day = "Oct";
        break;
    case 10:
        day = "Nov";
        break;
    case 11:
        day = "Dec";
        break;
}

number = today.getDate();

for (var i = 0; i <= 6; i++) {
    $('#days_of_week').append("<th class='column-title'>" + days_of_week[day] + ", " + month + " " + number + "</th>\n");
    day = day % 6;
    day += 1;
    number += 1;

}
//
// for (var j =1; j <= 12; j++){
//     for (var k = 1; k <= 7; k++){
//         console.log(j + '' + k)
//         if ($('input.checkbox_check:first-child').is(':checked')) {
//             console.log("GOTTEEM");
//         }
//     }
// }
//
// function my_function(my_param) {
//     console.log(my_param);
// }
// my_function("test");