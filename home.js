const conceptData = {
  resilience: { title: "Brain resilience", body: "Why do some injured brains endure, adapt, and recover better than others? Resilience can be read through microvascular flow, the blood-brain barrier, cellular response, and recovery.", keyword: "resilience" },
  microvascular: { title: "Microvascular flow", body: "Reperfusion is only the beginning. The microvascular bed determines how blood, oxygen, and possibility return to vulnerable tissue after injury.", keyword: "flow" },
  noreflow: { title: "No-reflow", body: "No-reflow describes a silent failure of reperfusion: the vessel opens, but microcirculation does not fully return. It is where vulnerability may become fixed.", keyword: "no-reflow" },
  golden: { title: "Golden time", body: "The golden window asks when the microvascular bed remains plastic enough to recover — before damage becomes widespread and irreversible.", keyword: "time" },
  story: { title: "Science storytelling", body: "Science storytelling connects rigorous observation with human understanding, so research can remain precise, memorable, and open to conversation.", keyword: "story" }
};

const chips = document.querySelectorAll(".concept-chip");
const title = document.getElementById("lens-title");
const body = document.getElementById("lens-body");
const keyword = document.getElementById("lens-keyword");
const lens = document.querySelector(".concept-lens");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const data = conceptData[chip.dataset.concept];
    if (!data) return;
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    title.textContent = data.title;
    body.textContent = data.body;
    keyword.textContent = data.keyword;
    lens.animate([{ opacity: .72, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" });
  });
});
