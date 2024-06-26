window.addEventListener("load", solve);

function solve() {
    let firstNameInputElement = $('#first-name');
    let lastNameInputElement = $('#last-name');
    let ageInputElement = $('#age');
    let genderSelectElement = $('#genderSelect');
    let dishInputElement = $('#task');
    let submitButton = $('#form-btn');
    let progressListElement = $('#in-progress');
    let finishedListElement = $('#finished');
    let clearBtnElement = $('#clear-btn');

    submitButton.on('click', (e) => {
        e.preventDefault();

        if (
            firstNameInputElement.val() === '' ||
            lastNameInputElement.val() === '' ||
            ageInputElement.val() === '' ||
            genderSelectElement.val() === '' ||
            dishInputElement.val() === ''
        ) {
            alert('All fields are required!');
            return;
        }

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

        let count = $('#progress-count').text();
        $('#progress-count').text(Number(count) + 1);
    });

    $(progressListElement).on('click', '.complete-btn', (e) => {
        let completedListElement = $(e.target).parent();
        $(completedListElement.children()[1]).remove();
        $(e.target).remove();
        $(completedListElement).remove();
        $(completedListElement).appendTo(finishedListElement);

        let count = $('#progress-count').text();
        $('#progress-count').text(Number(count) - 1);
    });

    $(progressListElement).on('click', '.edit-btn', function (e) {
        let listItem = $(this).parent();
        let details = $(listItem.find('article')[0]);

        let fullName = details.find('h4').text().split(' ');
        let genderAge = details.find('p').first().text().split(', ');

        firstNameInputElement.val(fullName[0]);
        lastNameInputElement.val(fullName[1]);
        genderSelectElement.val(genderAge[0]);
        ageInputElement.val(genderAge[1]);
        dishInputElement.val(details.find('p').last().text().replace('Dish description: ', ''));

        listItem.remove();

        let count = $('#progress-count').text();
        $('#progress-count').text(Number(count) - 1);
    });

    clearBtnElement.on('click', () => {
        $(finishedListElement).children().remove();
    });
}