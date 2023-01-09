document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.querySelector("#name");
    nameInput.addEventListener("keyup", () => {
      const greet = document.querySelector("#greet");
      greet.textContent = `Hello ${nameInput.value}`;
    });
  });
  