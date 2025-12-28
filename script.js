const questions = [
  { q: "IF LHC BECOMES SLH IN THE UPSIDE DOWN, WHAT DOES SOM BECOME?", a: "MOS" },
  { q: "INSTI REVERSED IS?", a: "ITSNI" },
  { q: "WHICH COMES FIRST IN THE UPSIDE DOWN: H10 OR H2?", a: "H2" },
  { q: "DECODE: CAMPUS → ?", a: "SUPMAC" },
  { q: "IF LEFT BECOMES TFEL, WHAT DOES RIGHT BECOME?", a: "THGIR" }
];

const intro1 = document.getElementById("intro-video-1");
const intro2 = document.getElementById("intro-video-2");
const nameVideo = document.getElementById("name-video");
const bgVideo = document.getElementById("bg-video");

window.onload = () => {
  intro1.play().catch(() => {});
};

intro1.onended = () => {
  intro1.style.display = "none";
  intro2.classList.remove("hidden-video");
  intro2.volume = 1;
  intro2.play();
};

intro2.onended = () => {
  intro2.style.display = "none";

  nameVideo.classList.remove("hidden-video");
  nameVideo.play();

  document.querySelector(".overlay").classList.remove("hidden-video");
  document.getElementById("content").classList.remove("hidden");
};

function startSignal() {
  const name = document.getElementById("username").value.trim();
  if (!name) return;

  nameVideo.pause();
  nameVideo.classList.add("hidden-video");

  bgVideo.classList.remove("hidden-video");
  bgVideo.play();

  document.getElementById("screen-name").classList.add("hidden");
  document.getElementById("screen-story").classList.remove("hidden");

  document.getElementById("story-text").innerText =
`HI ${name},

SOMETHING IS WRONG AT INSTI.
SIGNALS ARE BLEEDING THROUGH.
THIS IS WHERE IT BEGINS.`;
}

function startTest() {
  document.getElementById("screen-story").classList.add("hidden");
  document.getElementById("screen-question").classList.remove("hidden");

  const random = questions[Math.floor(Math.random() * questions.length)];
  localStorage.setItem("answer", random.a);
  document.getElementById("question-text").innerText = random.q;
}

function submitAnswer() {
  const correct = localStorage.getItem("answer");

  document.getElementById("screen-question").classList.add("hidden");
  document.getElementById(
    correct ? "screen-success" : "screen-fail"
  ).classList.remove("hidden");
}
