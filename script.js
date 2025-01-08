const roseBudImage = document.getElementById("roseBudImage");
const roseBloomImage = document.getElementById("roseBloomImage");
const quoteDiv = document.getElementById("quote");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const sections = document.querySelectorAll("section"); // Get all sections
const initialQuote = quoteDiv.innerHTML; // store the initial content
const backgroundMusic = document.getElementById("backgroundMusic");
const muteButton = document.getElementById("muteButton");
const muteIcon = document.getElementById("muteIcon");

let quotes = [
	"I love her cute mouth the most. It always wants to kiss me and give me love and it says the best things that make me feel so warm inside.",
	"I love her morals and values, they guide her in everything that she does and I love it.",
	"I love her ears, she likes to hide it with her long hair. But to me it is so beautiful, especially with her double loop earrings her parents gave her.",
	"I love her small and delicate hands. They are the best thing to hold. When she holds or hugs me and you feel the imprint, it is amazing.",
	"Ofc I love her beautiful face, boobs and butt. It turns me on all the time.",
	"I love her awkward laugh, in the beginning it sounded weird but I am now accustomed and I love it dearly.",
	"I love the way she writes like a boy and holds her pen weird. It is weird but I just love it because it is Adiibear's way of using a pen and writing.",
	"I love her knotty hair. It smells great and always gets in my face lol. But it feels so calming when it touches me. ",
	"I love that she likes stale jokes. I hate stale jokes but they make Adii laugh and I just love that smile of hers.",
	"I love her cute nose. She thinks it is ugly but I think it suits her and makes her beautiful.",
	"I love her cute feet in her Birkenstocks. The shoe is ugly but it keeps Adiibear's foot protected and nice.",
	"I love how she always so determined and strong-minded to do something. It speaks to her amazing character where she will do what she thinks is the best.",
	"I love how devoted she is to her religion. It speaks to her character and humility where she loves to give back to others.",
	"I love her voice, everything sounds so loving when she talks. Even when she is vex with me. I know she is vex because she loves me.",
	"I love her lack of rhythm, it is uniquely her and it adds to the fun times I have with her",
	"I love how she laughs when she makes fun of me or Barça. That bright smile lights up my heart although it still stings in the moment.",
	"I love how passionate she can get about something where she is all in with her elation and emotion.",
	"I love how excited she gets for good food. Just seeing that smile, her eyes light up and roll up is the best.",
	"I love her kind eyes. They just look so loving and pure. You can tell that her soul is truly special.",
	"I love how she always says proudly that she is an indian when someone say she is mixed or she looks like some other race. It brings a smile to my face when I hear how she say it",
];

let currentQuoteIndex = 0;
let isBudShowing = true;
let elementsHidden = false; // Track visibility state

// Set the source of the audio
backgroundMusic.src = "./our_song.mp3";

// Optional: Autoplay the music
backgroundMusic.autoplay = true;

muteButton.addEventListener("click", () => {
	if (backgroundMusic.muted) {
		backgroundMusic.muted = false;
		muteIcon.classList.remove("fa-volume-mute"); // Remove mute class
		muteIcon.classList.add("fa-volume-up"); // Add unmute class
	} else {
		backgroundMusic.muted = true;
		muteIcon.classList.remove("fa-volume-up"); // Remove unmute class
		muteIcon.classList.add("fa-volume-mute"); // Add mute class
	}
});

function handleClick() {
	if (isBudShowing) {
		roseBudImage.style.display = "none";
		roseBloomImage.style.display = "block";
	} else {
		roseBudImage.style.display = "block";
		roseBloomImage.style.display = "none";
	}

	isBudShowing = !isBudShowing;
	// Update the quote
	currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Cycle through quotes
	quoteDiv.innerHTML = `<p>${quotes[currentQuoteIndex]}</p>`;

	quoteDiv.style.display = "block"; // Show the quote
}

function toggleVisibility() {
	if (elementsHidden) {
		header.style.opacity = 0.8; // Make header visible
		footer.style.visibility = "visible";
		sections.forEach((section) => (section.style.visibility = "visible"));
	} else {
		header.style.opacity = 0; // Hide header content, but keep it clickable
		footer.style.visibility = "hidden";
		sections.forEach((section) => (section.style.visibility = "hidden"));
	}
	elementsHidden = !elementsHidden;
}

header.addEventListener("click", toggleVisibility);
roseBudImage.addEventListener("click", handleClick); // Attach to bud
roseBloomImage.addEventListener("click", handleClick); // Attach to bloom
