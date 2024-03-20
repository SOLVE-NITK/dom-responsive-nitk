const data = [
  {
    title: "Dynamics analysis of Four bar mechanism",
    path: "exp-four-bar-mechanism-nitk",
  },
  {
    title: "Dynamics analysis of slider crank mechanism",
    path: "exp-slider-crank-mechanism-nitk",
  },
  {
    title: "Proell Governer",
    path: "exp-proell-governor-nitk",
  },
  {
    title: "Porter Governer",
    path: "exp-porter-governor-nitk",
  },
  {
    title: "Hartnell Governer",
    path: "exp-hartnell-governor-nitk",
  },
  {
    title: "Balancing of multiple mass in single plane",
    path: "exp-multiple-mass-in-single-plane-nitk",
  },
  {
    title: "Balancing of Multiple Mass in Multiple Plane",
    path: "exp-muliple-mass-in-multiple-plane-nitk",
  },
  {
    title: "Disc Type Flywheel",
    path: "exp-disc-type-flywheel-nitk",
  },
  {
    title: "Rim Type Flywheel",
    path: "exp-rim-type-flywheel-nitk",
  },
];

const filterInput = function (val) {
  const filteredArray = data.filter((d) =>
    d.title.toLowerCase().includes(val.toLowerCase())
  );
  displayExperiments(filteredArray);
};

const searchInput = document.querySelector(".search__input");
searchInput.addEventListener("input", function (e) {
  filterInput(e.target.value);
});

const row = document.querySelector(".row");
const displayExperiments = function (data) {
  row.innerHTML = "";
  data.forEach((d) => {
    if (!d.path) return;
    const col = document.createElement("div");
    col.classList.add("col");
    col.textContent = d.title;
    const intern = document.createElement("p");
    intern.classList.add("intern");
    // intern.textContent = d.intern;
    const link = document.createElement("a");
    link.classList.add("link");
    link.href = `${d.path}/index.html`;
    link.target = "_blank";
    // link.textContent = "Click Here";
    // col.appendChild(intern);
    link.appendChild(col);
    row.appendChild(link);
  });
};
displayExperiments(data);

console.log(data.map((d) => d.title));
