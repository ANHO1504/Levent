const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus"),
    number = document.querySelector(".number");

let a = 1;
plus.addEventListener("click", () => {
    a++;
    number.innerText = a;
})
minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        number.innerText = a;
    }
})

// ChangeLikeIcon
function ChangeIcon(icon) {
    icon.classList.toggle("fa-solid");
}



const show = document.querySelector(".show-info");
var flag = 0;
function ShowDetail() {

    if (flag == 1) {
        show.style.display = "block";
        flag = 0;
    }
    else {
        show.style.display = "none";
        flag = 1;
    }
}

//Change Img