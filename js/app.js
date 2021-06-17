//global

let body = document.querySelector("body");

// day and night code
var night = false;
let time_btn = document.querySelector(".time");

time_btn.addEventListener("click", function () {
    if (night === false) {
        body.classList.add("night");
        time_btn.src = "img/icons8-crescent-moon-100.png";
        night = true;
    } else if (night === true) {
        body.classList.remove("night");
        time_btn.src = "img/icons8-sun-96.png";
        night = false;
    }
})


//// BMI code
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let sub_btn = document.querySelector("#sub_btn");
let answer = document.querySelectorAll(".answer");
let bmi;
sub_btn.addEventListener("click", BMI);

function BMI() {
    //debugger
    var height_value = height.value;
    var weight_value = weight.value;
    if (height_value.trim() === "" || weight_value.trim() === "") {
        alert("please fill all the fild");
    } else if (eval(height_value) === 0) {
        alert("its infinit")
    } else if (eval(height_value) < 0 || eval(weight_value) < 0) {
        alert("its negative")
    } else {

        bmi = eval(weight_value) / ((eval(height_value) / 100) ** 2);

        answer.forEach(function (item) {
            item.textContent = Math.round(bmi);
        })
        if (bmi <= 19) {
            body.classList.remove("none", "active_page2", "active_page3", "active_page4");
            body.classList.add("active_page1");

        } else if (bmi >= 20 && bmi <= 25) {
            body.classList.remove("none", "active_page1", "active_page3", "active_page4");
            body.classList.add("active_page2");


        } else if (bmi >= 26 && bmi <= 30) {
            body.classList.remove("none", "active_page1", "active_page2", "active_page4");
            body.classList.add("active_page3");

        } else if (bmi > 31) {
            body.classList.remove("none", "active_page1", "active_page2", "active_page3");
            body.classList.add("active_page4");
        }
    }
    height.value = " ";
    weight.value = " ";
}

let back_btn = document.querySelectorAll(".back_btn")
back_btn.forEach(function (item) {
    item.addEventListener("click", function () {
        body.classList.remove("active_page1", "active_page2", "active_page3", "active_page4");
        body.classList.add("none")
    });
});