window.addEventListener("load", solve);

function solve() {
    let firstNameInputElement = $('#first-name');
    let lastNameInputElement = $('#last-name');
    let ageInputElement = $('#age');
    let genderSelectElement = $('#genderSelect');
    let dishInputElement = $('#task');
    let submitButton = $('#form-btn');
    let progressListElement = $('#in-progress');

    submitButton.on('click', (e) => {
        e.preventDefault();

        if (
            firstNameInputElement.val() === '' ||
            lastNameInputElement.val() === '' ||
            ageInputElement.val() === '',
            genderSelectElement.val() === '' ||
            dishInputElement.val() === ''
        ) {
            alert('All fields are required!');
        } else {
            let newListElement = $(`
            <li class="each-line">
                <article>
                    <h4>${firstNameInputElement.val() + ' ' + lastNameInputElement.val()}</h4>
                    <p>${genderSelectElement.val() + ', ' + ageInputElement.val()}</p>
                    <p>Dish description: ${dishInputElement.val()}</p>
                </article>
                <button class="edit-btn">Edit</button>
                <button class="complete-btn">Mark as complete</button>
            </li>`);

            firstNameInputElement.val('');
            lastNameInputElement.val('');
            ageInputElement.val('');
            dishInputElement.val('');

            newListElement.appendTo(progressListElement);
            let count = Number($('#progress-count').text());
            $('#progress-count').text(++count);

            $('.edit-btn').on('click', (e) => {
                let liElement = $(e.target).parent();

                firstNameInputElement.val($('.each-line article h4').text().split(' ')[0]);
                lastNameInputElement.val($('.each-line article h4').text().split(' ')[1]);
                ageInputElement.val($('.each-line article p:nth-of-type(1)').text().split(', ')[1]);
                genderSelectElement.val($('.each-line article p:nth-of-type(1)').text().split(', ')[0]);
                dishInputElement.val($('.each-line article p:nth-of-type(2)').text());

                $(e.target).parent().remove();
            });
        }
    });
}