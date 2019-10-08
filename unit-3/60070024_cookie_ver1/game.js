fortuneBank = [
"วันนี้อากาศดี ลองออกไปเดิน จะพบกับสิ่งดีๆ ที่เฝ้ารอ",
"คนที่คุณกำลังกังวล เค้าก็คิดกับคุณเช่นเดียวกันนะ รู้มั้ย",
"มองหากำลังใจอยู่ ลองเริ่มจากให้กำลังใจคนที่คุณจะพบวันนี้ดูสิ รับรองคุณจะต้องแปลกใจ",
"ก้าวเท้าขวาออกก่อน แล้วท่องว่าอยากได้อะไรก่อนนอนคืนนี้",
"วันนี้เลข 2 คือเลขนำโชค",
"ทำตัวเองให้โดนแดดบ้าง!! จะโชคดีทั้งวัน"
];
function play(){
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");
	setTimeout(function(){
		getFortune();
	},3000);
}
function play2(){
	cookie2.classList.remove("cookie-show");
	cookie1.classList.add("cookie-show");
	cookie1.classList.remove("cookie-show");
	cookie1.classList.remove("cookie-hide");
	cookie2.classList.remove("cookie-hide");
}
a = prompt("What is your birth date?");
function getFortune(){
	rand = Math.floor(Math.random()*fortuneBank.length);
	fortune.innerText = fortuneBank[rand];
	fortune.style.opacity = 1;
	fortune.style.top = "96px";
}

