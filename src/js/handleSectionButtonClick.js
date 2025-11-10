const sectionButtonIncoming = document.querySelector(".sectionButtonIncoming");
const sectionButtonOutgoing = document.querySelector(".sectionButtonOutgoing");
const sectionButtonSummary = document.querySelector(".sectionButtonSummary");
const sectionIncoming = document.querySelector(".sectionIncoming");
const sectionOutgoing = document.querySelector(".sectionOutgoing");
const sectionSummary = document.querySelector(".sectionSummary");

sectionButtonIncoming.addEventListener("click", () => {
  sectionIncoming.classList.remove("hidden");
  sectionOutgoing.classList.add("hidden");
  sectionSummary.classList.add("hidden");
});

sectionButtonOutgoing.addEventListener("click", () => {
  sectionOutgoing.classList.remove("hidden");
  sectionSummary.classList.add("hidden");
  sectionIncoming.classList.add("hidden");
});

sectionButtonSummary.addEventListener("click", () => {
  sectionSummary.classList.remove("hidden");
  sectionOutgoing.classList.add("hidden");
  sectionIncoming.classList.add("hidden");
});
