
const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (password.value === "" || email.value === "") {
    alert("Заполните все поля");
    event.currentTarget.reset();
    return;
  }
  const user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);

  event.currentTarget.reset();
});
