"use strict";
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM READY");
  const moodForm = document.querySelector("#moodRing");
  const myMood = document.querySelector("#myMood");

  moodForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const moodInput = moodForm.querySelector("input[name=mood]:checked");
    myMood.innerText = moodInput.value;
  });
});
