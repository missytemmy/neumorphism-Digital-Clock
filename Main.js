let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");
let ampm = document.querySelector("#ampm");
let day = document.querySelector(".active");

// Days Name
let dayPack = document.querySelector(".days");

// Day Names Changing
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];




function clock() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let dName = date.getDay();

    ampm.innerHTML = hh >= 12 ? "PM" : "AM";
    let hcheck = hh > 12 ? hh - 12 : hh;
    let mcheck = mm < 10 ? "0" + mm : mm;
    let scheck = ss < 10 ? "0" + ss : ss;

    hr.innerHTML = hcheck < 10 ? "0" + hcheck : hcheck;

    mn.innerHTML = mcheck;
    sc.innerHTML = scheck;

    day.innerHTML = days[dName];
}


setInterval(clock, 1000);