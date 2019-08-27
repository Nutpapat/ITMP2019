fortuneBank = [
"ลองยิ้มให้กระจกสิ แล้ววันนี้จะพบเรื่องดีๆแน่นอน",
"สีนำโชคของวันนี้คือ สีชมพู",
"วันนี้อากาศดี ลองออกไปเดินเล่นดูบ้าง จะพบสิ่งที่เฝ้ารอ",
"ลองหากิจกรรมใหม่ๆทำ แล้วจะร่าเริงขึ้นได้แน่",
"มองหากำลังใจอยู่ใช่ไหม ลองเริ่มจากการให้กำลังใจคนที่คุณพบวันนี้ดูสิ",
"เลขนำโชควันนี้คือเลข 8",
"บางเรื่องก็ปล่อยวางไปบ้าง จะสบายใจขึ้นเป็นกองเลย"
];

day = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];

setTimeout(function(){
    number = prompt("What do you Birth Date?Mon-1 Tue-2 Wen-3 thu-4 Fri-5 Sat-6 Sun-7");
    while (number > 7 || number < 1) {
        number = prompt("What do you Birth Date?Mon-1 Tue-2 Wen-3 thu-4 Fri-5 Sat-6 Sun-7");
        if (number > 0 && number < 8) {
            break;
        }
        else {
            alert("Alert Number 1-7");
        }
    }
}, 200);

function play(){
    cookie1.classList.add("cookie-hide");
    cookie2.classList.add("cookie-show");
    setTimeout(function(){
        getFortune();
    }, 2500);
}

function play2(){
    cookie2.classList.remove("cookie-show");
    cookie1.classList.remove("cookie-hide");
    fortune.style.opacity = 0;
    setTimeout(() => {
        cookie2.classList.add("cookie-hide");
        cookie1.classList.add("cookie-show");
    }, 10);
    setTimeout(() => {
        removeClassList();
    }, 2000);

    setTimeout(function(){
        number = prompt("What do you Birth Date?Mon-1 Tue-2 Wen-3 thu-4 Fri-5 Sat-6 Sun-7");
        while (number > 7 || number < 1) {
            number = prompt("What do you Birth Date?Mon-1 Tue-2 Wen-3 thu-4 Fri-5 Sat-6 Sun-7");
            if (number > 0 && number < 8) {
                break;
            }
            else {
                alert("Alert Number 1-7");
            }
        }
    }, 2100);
}

function getFortune(){
    fortune.innerText = "สำหรับคนเกิดวัน"+day[number-1]+": "+fortuneBank[number-1];
    fortune.style.opacity = 1;
    fortune.style.top = "96px";
}