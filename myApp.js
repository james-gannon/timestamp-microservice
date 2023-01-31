const form = document.getElementById("date-form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  console.log("Jimmy G waz here");
  const input = document.getElementById("date-input").value;
  if (!input) {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  } else {
    fetch(`/api/${input}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}
