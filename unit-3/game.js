fortuneBank = [
"มังกี้ ดี ลูฟี่ (モンキー・D・ルフィ Monkey D. Luffy)",
"โรโรโนอา โซโล (ロロノア・ゾロ Roronoa zoro)",
"นามิ (ナミ NAMI)",
"ซันจิ (サンジ Sanji)",
"โทนี่ โทนี่ ช็อปเปอร์ (ニートニー・チョッパー Tony Tony Chopper)",
"นิโค โรบิน (ニコ・ロビン Nico Robin)"
];
function play(){
	a = prompt("คุณชอบเลขอะไร?");
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

function getFortune(){
	rand = Math.floor(Math.random()*fortuneBank.length);
	fortune.innerText = fortuneBank[rand];
	fortune.style.opacity = 1;
	fortune.style.top = "96px";
}
