const sectionButtonIncoming = document.querySelector(".sectionButtonIncoming");
const sectionButtonOutgoing = document.querySelector(".sectionButtonOutgoing");
const sectionButtonSummary = document.querySelector(".sectionButtonSummary");
const sectionIncoming = document.querySelector(".sectionIncoming");
const sectionOutgoing = document.querySelector(".sectionOutgoing");
const sectionSummary = document.querySelector(".sectionSummary");
const sentToFrom = document.querySelector(".sentToFrom");
const timeReceivedSent = document.querySelector(".timeReceivedSent");

sectionButtonIncoming.addEventListener("click", () => {
  sectionIncoming.classList.remove("hidden");
  sectionOutgoing.classList.add("hidden");
  sectionSummary.classList.add("hidden");
  sentToFrom.textContent = "Sent from";
  timeReceivedSent.textContent = "Time received";
});

sectionButtonOutgoing.addEventListener("click", () => {
  sectionOutgoing.classList.remove("hidden");
  sectionSummary.classList.add("hidden");
  sectionIncoming.classList.add("hidden");
  sentToFrom.textContent = "Sending to";
  timeReceivedSent.textContent = "Time sent";
});

sectionButtonSummary.addEventListener("click", () => {
  sectionSummary.classList.remove("hidden");
  sectionOutgoing.classList.add("hidden");
  sectionIncoming.classList.add("hidden");
});
