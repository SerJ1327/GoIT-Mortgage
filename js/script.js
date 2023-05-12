import { banks } from "./models/banks.js";

$(".js-open-modal").click(function (e) {
  e.preventDefault();
  const modal = $(".js-modal");
  modal.addClass("is-show");
  $(".js-modal-overlay").addClass("is-show");
});

$(".js-close-modal").click(function (e) {
  $(this).parent(".js-modal").removeClass("is-show");
  $(".js-modal-overlay").removeClass("is-show");
});

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // event.preventDefault();

  const {
    elements: { bankName, interestRate, maxLoan, minPayment, loanTerm },
  } = event.target;

  let r = banks.some((el) => el.name === bankName.value);

  if (r) {
    alert("Такий банк вже додано!");
  } else {
    //   ! потрібно додати генерування id + додати в масив банків
  }
}
