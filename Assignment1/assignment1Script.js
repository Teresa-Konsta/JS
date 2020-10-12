function calculateBMR() {
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    //var activitySelection = document.getElementById("activitySelection").value;

    var heightInch = document.getElementById("inches").value;
    var heightFeet = document.getElementById("feet").value;
    var heightTotal = (heightFeet * 12) + heightInch;

    var weightPounds = document.getElementById("pounds").value;
    var weightStones = document.getElementById("stones").value;
    var weightTotal = (weightStones * 14) + weightPounds;

    var activity1 = document.getElementById("activity1");
    var activity2 = document.getElementById("activity2");
    var activity3 = document.getElementById("activity3");
    var activity4 = document.getElementById("activity4");
    var activity5 = document.getElementById("activity5");

    var BMRTotal = 0;
    
    if (gender == "Male") {
        var BMRmale = ((66 + (6.2 * weightTotal)) + (12.7 * heightTotal)) - (6.76 * age);
        if (activity1.checked || activity2.checked) {
            activity1 = 1.53;
            BMRTotal = BMRmale * activity1;
            alert(BMRTotal);
        }
        if (activity3.checked || activity4.checked) {
            activity3 = 1.76;
            BMRTotal = BMRmale * activity3;
            alert(BMRTotal);
        }
        else if (activity5.checked) {
            activity5 = 2.25;
            BMRTotal = BMRmale * activity5;
            alert(BMRTotal);
        }
        else {
            BMRTotal = BMRmale;
            alert(BMRTotal);
        }
    }

    else if (gender == "Female") {
        var BMRfemale = ((655.1 + (4.35 * weightTotal)) + (4.7 * heightTotal)) - (4.7 * age);
        if (activity1.checked || activity2.checked) {
            activity1 = 1.53;
            BMRTotal = BMRfemale * activity1;
            alert(BMRTotal);
        }
        if (activity3.checked || activity4.checked) {
            activity3 = 1.76;
            BMRTotal = BMRfemale * activity3;
            alert(BMRTotal);
        }
        else if (activity5.checked) {
            activity5 = 2.25;
            BMRTotal = BMRfemale * activity5;
            alert(BMRTotal);
        }
        else {
            BMRTotal = BMRfemale;
            alert(BMRTotal);
        }
    }
}
document.getElementById("calculatebmr").addEventListener("click", calculateBMR, false);
//document.getElementById("calculatebmr").onclick = calculateBMR;