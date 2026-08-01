const conceptData = {
  resilience: {
    title: "Brain resilience",
    body: "Brain resilience asks why some injured brains endure, adapt, and recover better than others. In my work, resilience is read through microvascular flow, BBB integrity, pericyte response, and behavioral recovery after stroke.",
    keyword: "resilience"
  },
  co2: {
    title: "CO₂ probe",
    body: "CO₂ is not only an intervention. I want to use it as a physiological probe — a way to ask how the microvasculature responds, where reserve remains, and when reperfusion can still be rescued.",
    keyword: "CO₂"
  },
  noreflow: {
    title: "No-reflow",
    body: "No-reflow is the silent failure of reperfusion: the artery opens, but the microcirculation does not fully return. This is where pericytes, BBB disruption, inflammation, and tissue vulnerability may intersect.",
    keyword: "flow"
  },
  golden: {
    title: "No-reflow golden time",
    body: "The golden time is not only about reopening a vessel. My deeper question is when the microvascular bed is still plastic enough to recover — before no-reflow becomes fixed, spreading, and irreversible.",
    keyword: "time"
  },
  atlas: {
    title: "Atlas mapping",
    body: "The atlas is a future map of infarct core, penumbra, BBB leakage, microvascular perfusion, pericyte change, and recovery. The goal is to locate where resilience remains and where vulnerability begins.",
    keyword: "atlas"
  },
  story: {
    title: "Science storytelling",
    body: "I translate emotions into language, language into concepts, and concepts into stories — so that rigorous science can become human, memorable, and connected.",
    keyword: "story"
  }
};

const chips = document.querySelectorAll(".concept-chip");
const title = document.getElementById("lens-title");
const body = document.getElementById("lens-body");
const keyword = document.getElementById("lens-keyword");
const lens = document.querySelector(".concept-lens");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const key = chip.dataset.concept;
    const data = conceptData[key];
    if (!data) return;

    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");

    lens.animate(
      [
        { opacity: 0.72, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" }
    );

    title.textContent = data.title;
    body.textContent = data.body;
    keyword.textContent = data.keyword;
  });
});
