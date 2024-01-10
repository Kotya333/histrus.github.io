let btn1 = document.getElementById("btnkr");
let btn2 = document.getElementById("btnri");
let btn3 = document.getElementById("btnus");
let btn4 = document.getElementById("btnru");

let btns = [btn1, btn2, btn3, btn4];

let body = document.getElementsByTagName("body")[0];

for (let i = 0; i < 4; ++i) {
    btns[i].addEventListener("mouseover", function () {
        btns[i].classList.toggle("btn-dark");
        btns[i].classList.remove("btn-go");
    });
    btns[i].addEventListener("mouseout", function () {
        btns[i].classList.remove("btn-dark");
        btns[i].classList.toggle("btn-go");
    });
    btns[i].addEventListener("click", function () {
        btns[i].style.backgorund = "#870f0f";
    })
}

let scrl_btn = document.getElementById("scb1");
scrl_btn.addEventListener("mouseover", function () {
    let scrl_btn_symb = document.getElementById("scbtext");
    scrl_btn_symb.style.transform = "rotate(180deg)";
})
scrl_btn.addEventListener("mouseout", function () {
    let scrl_btn_symb = document.getElementById("scbtext");
    scrl_btn_symb.style.transform = "rotate(0deg)";
})
let count_click_scrl_btn = 1;
let sound = new Audio("audio/gRs.mp3");
scrl_btn.addEventListener("click", function () {
    if (count_click_scrl_btn % 2 == 0) {

        let scrl_btn_symb = document.getElementById("scbtext");
        let hym = document.querySelector(".hymn");
        hym.style.height = "180px";
        scrl_btn_symb.style.transform = "rotate(180deg)";
        sound.pause();
        ++count_click_scrl_btn;
        return 0;
    }
    let scrl_btn_symb = document.getElementById("scbtext");
    let hym = document.querySelector(".hymn");
    hym.style.height = "850px";
    scrl_btn_symb.style.transform = "rotate(180deg)";
    sound.play()
    ++count_click_scrl_btn;
})

window.addEventListener("scroll", function () {
    let disp = scrollY;
    let putin_army_btn = document.getElementById("putin_army_btn");
    console.log(disp);
    if (disp >= 300) {
        putin_army_btn.style.top = disp + 100 + "px";
    } else {
        putin_army_btn.style.top = "-25%";
    }
})

let putin_army_btn = document.getElementById("putin_army_btn");
putin_army_btn.addEventListener("click", function () {
    let putin_army_btn_text = document.querySelector(".putin_army_btn_text");
    let video = document.querySelector(".putin_video");
    let gen_video = document.querySelector(".putin_gen_video");
    console.log(putin_army_btn_text.textContent);
    if (putin_army_btn_text.textContent == "Закончить!") {
        putin_army_btn_text.innerText = "Разминочка";
        gen_video.classList.remove("vis");
        gen_video.classList.toggle("unvis");
        gen_video.pause();
        return 0;
    }
    putin_army_btn_text.innerText = "Закончить!";
    gen_video.classList.remove("unvis");
    gen_video.classList.toggle("vis");
    gen_video.play();
})

function del_promt() {
    let promt = document.getElementsByClassName('promt')[0];
    setTimeout(function(){
        promt.style.opacity = "0";
    },100)
    setTimeout(function(){
        promt.remove();
    },1000)
}

function check_promts(){
    if(document.getElementsByClassName("promt").length == 0) return true;
    return false;
}

let btns_go = document.getElementsByClassName("btn-go"); 
let cards = document.getElementsByClassName('country');
for (let i = 0; i < btns_go.length; ++i) {
    cards[i].addEventListener("mouseout", function () {
        if(!check_promts() && cards[i].classList.contains("mch-hover") == false){        
            del_promt();
        }
    })
    btns_go[i].addEventListener("click", function () {
        if(!check_promts()) return false;
        let promt = document.createElement('div');
        promt.classList.add('promt');
        promt.style.left = (btns_go[i].getBoundingClientRect().x - 395) + "px";
        promt.style.top = (btns_go[i].getBoundingClientRect().y - 170) + "px";
        promt.addEventListener("click", function () {
            del_promt();
        })    
        promt.addEventListener("mouseover", function () {   
            cards[i].classList.add('mch-hover');
        })
        promt.addEventListener("mouseout", function () {
            let cards = document.getElementsByClassName('country');
            cards[i].classList.remove('mch-hover');
        })
        console.log(promt.getBoundingClientRect().x);  
        body.append(promt);
        setTimeout(function(){
            promt.style.opacity = "1";
        },100)
    });
}

/*let btns_go = document.getElementsByClassName("btn-go");
let bl = false;
for (let i = 0; i < btns_go.length; ++i) {
    btns_go[i].addEventListener("click", function () {
        if(btns_go[i].textContent == "На хазар"){
            el.backgorundImage = "url('img/rurik.png')";
        }
        if(bl){
            return 0;
        }
        let el = document.createElement("div");
        bl = true;
        el.style.width = "500px";
        el.style.height = "250px";
        el.style.display = "flex";
        el.style.position = "fixed";
        el.style.top = "30%";
        el.style.left = "33.5%";
        setTimeout(function(){
            el.style.left = "33.5%";
        },100)
        el.style.left = "-40.5%";
        el.classList.add("arborder");
        el.addEventListener("click", function(){
            bl = false;
            el.remove();
        })
        document.body.append(el);
    });
} */