const messages = [
  "This beautiful sayang makes me nervous!",
  "You are my darksky.",
  "I am so lucky to have you in my life.",
  "You and your voice are my favorite things in the world.",
  "Why are you so attractive?",
  "I love you soooooooooooooooooooooooo uuuuuuuuuuuuuuuuccchhhhh",
  "You make even the simplest moments so speacial.",
  "With you, every day feels like a dream.",
  "You are my everything, my always, my forever.",
  "I love you hehhehehhehee!",
  "MMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWAAAAAAAAHHHHHHH",
  "sayangkuuuuuuuuuuuuuuuu, minummmmmmmmmmmmmmmmm",
  "eep more, my sayang. I'm just here hehe",
  "this eepy sayang"
];

let clickCount = 0;

function generateBabyNote() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const messageElement = document.getElementById("message");
  messageElement.textContent = messages[randomIndex];

  clickCount++;
  if (clickCount === 5) {
    const proceed = confirm(
      "You've been clicking the button for five times. Hm... Do you want to go to the next page or stay on this page????"
    );
    if (proceed) {
      window.location.href = "confirmation.html";
    }
  } else if (clickCount > 6) {
    document.body.innerHTML = "<h1>ERROR: Too many clicks! LEAVE DONT COME BACK YOURE NOT MNC</h1>";
    document.body.style.color = "red";
    document.body.style.textAlign = "center";
    document.body.style.paddingTop = "20%";
  }
}