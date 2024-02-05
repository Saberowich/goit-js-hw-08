const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event){
    event.preventDefault();
    const inputElements = document.querySelectorAll("input");
    const inputTrim = Array.from(inputElements).map(input => input.value.trim());
    const emptyInput = inputTrim.filter(input => input === "");

    if (emptyInput.length > 0 ){
        alert("All fields must be filled in");
    } else {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        form.reset();
    }
}
