// connected to google spreadsheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzjrZetE2AIs2v2hSF0SdzOCj0f0fPOgiF_CkwfNyytqzq3SeFgcyt3ZUbZfrqWcy4U/exec";
const form = document.forms["halip26-contact-me"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset formnya
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year to the span with id "currentYear"
document.getElementById("currentYear").textContent = currentYear;
