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


//for (var j =1; j <= 12; j++){
//    for (var k = 1; k <= 7; k++){
        //console.log(document.getElementById(j+ "" +k).getElementsByClassName("icheckbox_flat-green"));
        //console.log(document.getElementById(j+ "" +k).getElementsByClassName("icheckbox_flat-green"));
        // if (document.getElementById(j+ "" +k).firstChild.checkbox_check.is(':checked')) {
        //
        //     console.log("yay");
        // }
        //  if ($('.checkbox_check:first-child').is(':checked')) {
        //      console.log("GOTTEEM");
        //  }
     //}
 //}

 function my_function() {
     console.log("------------------------------");
     var tempArray = [];
     for (var j =1; j <= 12; j++){
         for (var k = 1; k <= 7; k++) {
             //console.log($('#'+j+""+k).children().hasClass('checked'));
             if($('#'+j+""+k).children().hasClass('checked')){
                 console.log("CHECKED BOX: " + j + "" + k);
                 tempArray.push(1);

             } else {
                 tempArray.push(0);
             }
         }
     }

    // all of the emails
     console.log("Hello lors");
     var emailList = []
     for(var i = 0; i <$("#emailInviteList")[0].children.length; i++    ){
         
        emailList.push(document.getElementById("stock"+i).value);
     }
     console.log(emailList);

     var activityList = []

     for(var i = 0; i < (document.getElementsByClassName("selected").length - 2); i++    ){
         if ($("#datatable-checkbox").children().hasClass('selected')) {

            activityList.push(document.getElementsByClassName("selected")[i].children[2].innerHTML);
            
         }
     }
     console.log(activityList);


 }

//button.id = "fuk";
//document.getElementById("fuk").addEventListener("click", my_function);

//for (var j =1; j <= 12; j++){
      //   for (var k = 1; k <= 7; k++){
       //      if(document.getElementById(j+ "" +k).getElementsByClassName("icheckbox_flat-green").checked) {
        //         console.log("CHECKED BOX: " + j + "" + k);
         //    }
        // }
