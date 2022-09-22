const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

function createChat(from, message) {
	const chat = document.createElement("span");
	chat.innerHTML = message;

	if (from === "bot") {
		chat.classList.add("bot");
	} else if (from === "user") {
		chat.classList.add("user");
	}

	chatBox.appendChild(chat);
	chatBox.scrollTo(0, chatBox.scrollHeight);
}

function botReply(message) {
	const replies = {
		halo: "Halo juga!",
		hay: "yah sayang?",
		theo: "yah kenapa, kangen kah?",
		iya: "aku juga kangen loh",
		lagingapain: "lagi bersama mu :)",
		puisi: "oke, Sejak menemukan senyummu, buku-buku yang dibaca mataku selalu menceritakan senyummu :)",
		dadah: "see you manis ututu",
		eaa: "asikk deh"
	};
	let words = message.split(" ");
	words = words.map((word) => word.toLowerCase());

	let replied = false;

	words.forEach((word) => {
		if (Object.keys(replies).includes(word)) {
			createChat("bot", replies[word]);
			replied = true;
			return;
		}
	});

	if (!replied) createChat("bot", "apa yang nga ja blng ini");
}

function handleForm(e) {
	e.preventDefault();
	const message = chatInput.value;
	if (message === "") {
		return;
	} else {
		createChat("user", message);
	}
	chatInput.value = "";
	setTimeout(() => botReply(message), 500);
}

chatForm.addEventListener("submit", handleForm);
