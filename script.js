function timeZone() {
    time = new Date();
    console.log(time);
    document.getElementById("time").innerHTML = time;
}
setInterval(timeZone);

const year = 2023;
let qs = prompt("Do you want to see my wave page? So input current year.");
while (true) {
    if (qs == year) {
        alert("Congratulations!! Please click ok !" );
        break;
    }
    else if (qs == "exit") {
        alert("thanks! please click ok !");
        break;
    }
    else {
       qs= prompt("wrong input! Please try again!");
    }

}




