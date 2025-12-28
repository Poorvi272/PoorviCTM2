const intro1 = document.getElementById("intro-video-1");
const intro2 = document.getElementById("intro-video-2");
const nameVideo = document.getElementById("name-video");
const bgVideo = document.getElementById("bg-video");
const tap = document.getElementById("tap-to-start");
const content = document.getElementById("content");
const overlay = document.querySelector(".overlay");

const questions = [
  { q: "INSTI REVERSED IS?", a: "ITSNI" },
  { q: "CAMPUS → ?", a: "SUPMAC" }
];

tap.onclick = () => {
  tap.style.display = "none";
  playIntro1();
};

function playIntro1() {
  intro1.play();
  intro1.onended = playIntro2;
}

function playIntro2() {
  intro1.classList.add("hidden");
  intro2.classList.remove("hidden");
  intro2.play();
  intro2.onended = showNameScreen;
}

function showNameScreen() {
  intro2.classList.add("hidden");
  nameVideo.classList.remove("hidden");
  overlay.classList.remove("hidden");
  nameVideo.play();
  content.classList.remove("hidden");
}

function startSignal() {
  const name = username.value.trim();
  if (!name) return;

  nameVideo.pause();
  nameVideo.classList.add("hidden");

  bgVideo.classList.remove("hidden");
  bgVideo.play();

  screen-name.classList.add("hidden");
  screen-story.classList.remove("hidden");

  story-text.innerText =
`HI ${name}
SOMETHING IS WRONG AT INSTI
THIS IS WHERE IT BEGINS`;
}

function startTest() {
  screen-story.classList.add("hidden");
  screen-question.classList.remove("hidden");

  const q = questions[Math.floor(Math.random()*questions.length)];
  localStorage.setItem("ans", q.a);
  question-text.innerText = q.q;
}

function submitAnswer() {
  screen-question.classList.add("hidden");
  answer.value.toUpperCase() === localStorage.getItem("ans")
    ? screen-success.classList.remove("hidden")
    : screen-fail.classList.remove("hidden");
}
