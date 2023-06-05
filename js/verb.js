const skillcontent = document.getElementsByClassName("skills_content");
const skillsheader = document.querySelectorAll(".skills__header");
function toggleskills() {
  let itemclass = this.parentNode.className;
  for (let i = 0; i < skillcontent.length; i++) {
    skillcontent[i].className = "skills_content skills__close";
  }
  if (itemclass === "skills_content skills__close") {
    this.parentNode.className = "skills_content skills__open";
  }
}
skillsheader.forEach((el) => {
  el.addEventListener("click", toggleskills);
});
//services
const btnshow = document.querySelectorAll(".viewmore");
const closebtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const hidden = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnshow.length; i++) {
  btnshow[i].addEventListener("click", hidden);
}
const closebottom = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closebtn.addEventListener("click", closebottom);
overlay.addEventListener("click", closebottom);
function dis() {
  let time = new Date();
  let nowtime = `${time.getFullYear()}/${time.getMonth()}/${time.getDay()}: ${time.getHours()}:${time.getSeconds()}`;
  document.querySelector(".time__now").textContent = nowtime;
}
setInterval(dis, 1000);
