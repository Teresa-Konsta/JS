var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var customerOrder = ["Babaofan", "Congee", "Forcemeat", "Garum", "Harissa", "Jeok", "Jusselle",
    "Liquamen", "Maccu", "Misugaru", "Moretum", "Nettle stew", "Nian gao", "Noodles",
    "Oxygala", "Papadzules", "Soup", "Tamale", "Testaroli", "Tharida", "Tofu",
    "Torta de gazpacho", "Wonton", "Zongzi", "Tracta", "Börek", "Hummus", "Kuluban",
    "Lalab", "Rawon", "Rujak"];
var option = ["Take-away", "Take-away", "Take-away", "Take-away", "Eat-in", "Eat-in", "Eat-in",
    "Eat-in", "Eat-in", "Eat-in", "Take-away", "Take-away", "Take-away", "Take-away", 
    "Take-away", "Take-away", "Take-away", "Take-away", "Eat-in", "Eat-in", "Eat-in",
    "Eat-in", "Eat-in", "Eat-in", "Take-away", "Take-away", "Take-away", "Take-away", 
    "Take-away", "Take-away", "Eat-in",];
var customerName = ["(OLIVIA)", "(RUBY)", "(EMILY)", "(SAMUEL)", "(WILLIAM)", "(JESSICA)", "(DANIEL)", 
    "(ISAAC)", "(LUCAS)", "(MATTHEW)", "(GRACE)", "(SOPHIE)", "(CHLOE)", "(JAMES)", 
    "(MIA)", "(BENJAMIN)", "(EVIE)", "(LUKE)", "(LILY)", "(TYLER)", "(AMELIA)", 
    "(MAX)", "(ELLA)", "(RYAN)", "(CHARLOTTE)", "(ALEXANDER)", "(ISABELLE)", "(LEWIS)", 
    "(BELL)", "(DAISY)", "(ETHAN)"];

function addColumnHeaders() {
    var i = 0;
    while (i < 7) {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
        i++;
    }
}

function addCalendarDates() {
    var i = 1;
    var paragraphs = "";
    do {
        var tableCell = document.getElementById("01-" + i);
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[0].innerHTML = i;
        i++;
    } while (i <= 31);
}

function addCustomers() {
    var paragraphs = "";
    for (var i = 0; i < 31; i++) {
        var tableCell = document.getElementById("01-" + (i+1));
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[1].innerHTML = customerName[i];
        paragraphs[2].innerHTML = customerOrder[i];
        paragraphs[3].innerHTML = option[i];
    }
}
 
function setUpPage() {
    addColumnHeaders();
    addCalendarDates();
    addCustomers();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}