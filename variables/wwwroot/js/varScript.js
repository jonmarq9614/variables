var myDate = new Date(1996, 6, 11);
var myDate2 = convertToStringFormat(myDate);

var newDate = new Date(1996, 6, 11);
document.write(newDate.toLocaleString("fr-FR"));

document.write(myDate2);

function convertToStringFormat(myDate) {

    var dateString =
        ((myDate.getMonth() + 1).toString()
            .padStart(2, "0")
            +
            "/" +
            myDate.getDate().toString().padStart(2, "0") +
            "/" +
        myDate.getFullYear());


    return dateString;

}