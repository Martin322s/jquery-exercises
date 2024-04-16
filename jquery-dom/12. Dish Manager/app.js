window.addEventListener("load", solve);

function solve() {
    let firstNameInputElement = $('#first-name');
    let lastNameInputElement = $('#last-name');
    let ageInputElement = $('#age');
    let genderSelectElement = $('#genderSelect');
    let dishInputElement = $('#task');
    let submitButton = $('#form-btn');
    let progressListElement = $('#in-progress');
    let progressCountElement = $('progress-count');
    let userInputValues = {};

    submitButton.on('click', (e) => {
        e.preventDefault();

        if (
            firstNameInputElement.val() === '' ||
            lastNameInputElement.val() ||
            ageInputElement === '',
            genderSelectElement.val() === '' ||
            dishInputElement.val() === ''
        ) {
            alert('All fields are required!');
        } else {
            userInputValues.firstName = firstNameInputElement.val();
            userInputValues.lastName = lastNameInputElement.val();
            userInputValues.age = ageInputElement.val();
            userInputValues.gender = genderSelectElement.val();
            userInputValues.dishInfo = dishInputElement.val();
        }
    });
}