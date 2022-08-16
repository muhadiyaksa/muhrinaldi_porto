const hero = document.querySelector(".hero");
const emailTujuan = document.querySelector("#email");
const subjekTujuan = document.querySelector("#subject");
const bodyTujuan = document.querySelector("#body");

const tombolKirim = document.querySelector("#kirim");
tombolKirim.addEventListener("click", function () {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailTujuan.value !== "" && emailTujuan.value.match(validRegex) && subjekTujuan.value !== "" && bodyTujuan.value !== "") {
    tombolKirim.setAttribute("href", `mailto:${emailTujuan.value}?subject=${subjekTujuan.value}&body=${bodyTujuan.value}`);
  } else {
    alert("Value Is not valid");
  }
});
