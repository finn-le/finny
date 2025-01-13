const messages = [
    "minummmmmmmmmmmmmm, sayangkuuuuuuuuuu",
    "You are my darksky.",
    "I am so lucky to have you in my life.",
    "You and your voice are my favorite things in the world.",
    "You are beautiful, inside and out.",
    "I love you sooooooooooooo muuuuuuuuuuuuchhhh",
    "MMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWAAAAAAAAAAAHHHHHHH",
    "With you, every day feels like a dream.",
    "You are my everything, my always, my forever.",
    "I love you to the moon and back!"
  ];
  
  function generateBabyNote() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.getElementById("message");
    messageElement.textContent = messages[randomIndex];
  }