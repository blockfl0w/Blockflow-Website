// all cursor code here
const cusCursor = document.getElementById("customCursor");
const Twitter = document.getElementById("twitWhite");
const link = document.getElementById("link");
const tiwtButton = document.getElementById("twitButton");
let cursorActive = false;
window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//initialise js-confetti
//find canvas
const canvas = document.getElementById("confetti");

const jsConfetti = new JSConfetti();

function moveCursor(e) {
	let scroll = window.scrollY;
	let offsetX = cusCursor.clientWidth / 2;
	let offsetY = cusCursor.clientHeight / 2;
	let x = e.clientX - offsetX;
	let y = e.clientY + scroll - offsetY;

	cusCursor.style.top = y + "px";
	cusCursor.style.left = x + "px";
}
document.addEventListener("mousemove", (e) => {
	moveCursor(e);
});

document.addEventListener("mousedown", (e) => {
	if (cursorActive === false) {
		cusCursor.style.width = "1.5vw";
	} else {
		cusCursor.style.width = "2.5vw";
	}

	moveCursor(e);
});

document.addEventListener("mouseup", () => {
	if (cursorActive === false) {
		cusCursor.style.width = "2.5vw";
	} else {
		cusCursor.style.width = "4vw";
	}
});

function showIcon(icon) {
	cusCursor.style.width = "4vw";
	cusCursor.style.backgroundColor = "rgb(228, 228, 228)";
	console.log("TWITTER");
	//Show icon
	switch (icon) {
		case "Twitter":
			Twitter.style.display = "block";
			break;
		case "link":
			link.style.display = "block";
	}
	cursorActive = true;
}
function resetCursor(icon) {
	cusCursor.style.width = "2.5vw";
	cusCursor.style.backgroundColor = "transparent";
	console.log("RESET");
	switch (icon) {
		case "Twitter":
			Twitter.style.display = "none";
			break;
		case "link":
			link.style.display = "none";
			break;
	}
	cursorActive = false;
}
// remove twit button
// tiwtButton.addEventListener("pointerenter", () => {
// 	showIcon("Twitter");
// });
// tiwtButton.addEventListener("pointerleave", () => {
// 	resetCursor("Twitter");
// });
document.getElementById("projects").addEventListener("pointerenter", () => {
	showIcon("link");
});
document.getElementById("projects").addEventListener("pointerleave", () => {
	resetCursor("link");
});
document.getElementById("about").addEventListener("pointerenter", () => {
	showIcon("link");
});
document.getElementById("about").addEventListener("pointerleave", () => {
	resetCursor("link");
});
document.getElementById("resume").addEventListener("pointerenter", () => {
	showIcon("link");
});
document.getElementById("resume").addEventListener("pointerleave", () => {
	resetCursor("link");
});
// end of cursor code
// Begining of Hero random words hero section code
const hellos = {
	/* english*/ 1: "Hello",
	/* spanish*/ 2: "Hola",
	/* german */ 3: "Hallo",
	/* italian */ 4: "Ciao",
	/* bosnian */ 5: "Zdravo",
	/* cantonese */ 6: "你好",
	/* estonian */ 7: "Tere",
};
const qualities = {
	1: "creative",
	2: "problem solver",
	3: "frontend devloper",
	4: "designer",
	5: "quick thinker",
	6: "",
};
const greeting = document.getElementById("greeting");

function generateRandomPhrase(max, obj) {
	let num = Math.floor(Math.random() * max) + 1;
	return obj[num] + "";
}
let i = 0;
function typeText(txt, elm) {
	const speed = 150;
	let interval;
	if (txt === "") {
		clearTimeout(interval);
		setTimeout(() => {
			eraseText(elm);
		}, 10000);
	} else {
		interval = setTimeout(() => {
			elm.innerText += txt.substr(0, 1);
			typeText(txt.substr(1, txt.length), elm);
		}, speed);
	}
}
function eraseText(elm) {
	const speed = 100;
	let interval;
	if (elm.innerText == "") {
		clearTimeout(interval);
		setTimeout(() => {
			greetingText();
		});
	} else {
		interval = setTimeout(() => {
			elm.innerText = elm.innerText.substring(0, elm.innerText.length - 1);
			eraseText(elm);
		}, speed);
	}
}
function greetingText() {
	setTimeout(() => {
		let txt = generateRandomPhrase(7, hellos);
		typeText(txt, greeting);
	}, 1000);
}

let n = 0;
document.addEventListener("DOMContentLoaded", () => {
	// //unlocks on multilingual achivement
	// // if (achivements.multilingual === true) {
	greetingText();
	// // }
	// qualitiesText();
});

//scroll nav bar make white thing
function getScrollPercent() {
	var h = document.documentElement,
		b = document.body,
		st = "scrollTop",
		sh = "scrollHeight";
	return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}
document.addEventListener("scroll", (e) => {
	let y = getScrollPercent();
	const nav = document.getElementById("nav");
	const blackImg = document.getElementById("black");
	const whiteImg = document.getElementById("white");
	if (y > 0) {
		nav.style.backgroundColor = "white";
		nav.style.color = "#333";
		whiteImg.style.display = "none";
		blackImg.style.display = "block";
	}
	if (y < 1) {
		nav.style.backgroundColor = "transparent";
		nav.style.color = "white";
		whiteImg.style.display = "block";
		blackImg.style.display = "none";
	}
});
//All achivements code goes here (detcting and maintnence shit)
let achivementDesc = {
	Multilingual: [
		"transcribe the website into a diffrent language",
		"Unlocks multi-language hello",
	],
	Konami: ["use the konami code", "reward to be decided"],
	"Just keep trying": [
		"keep trying to send a invalid email",
		"punishment to be decided",
	],
	Confetti: ["you really like confetti huh", "every click causes confetti"],
};
let achivements = [
	"multilingual",
	"konami",
	"Confetti",
	"scroller",
	"me?",
	"Baby steps",
	"50/50",
	"Mastery",
	"Inspector",
	"Detective",
];
let unlockedAchivements = ["konami"];

function getAndSetPercentage() {
	//figure out percentage x/y *100

	let percent = (unlockedAchivements.length / achivements.length) * 100;
	let txt =
		unlockedAchivements.length +
		"/" +
		achivements.length +
		" (" +
		percent +
		")";

	//change percentadge on dial
	document.getElementById("unlocked").innerText = txt + "";
	document.body.style.setProperty("--percentage", percent);
}
//konami code
const code = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"b",
	"a",
];

let index = 0;

document.addEventListener("keydown", (e) => {
	if (e.key === code[index]) {
		index++;
	} else {
		index = 0;
	}

	if (index === code.length) {
		konamicodeReward();
		index = 0;
	}
});

function konamicodeReward() {
	let search = unlockedAchivements.find("konami");
	console.log(search);
	unlockAchivement();
}
function unlockAchivement(achivement) {}
