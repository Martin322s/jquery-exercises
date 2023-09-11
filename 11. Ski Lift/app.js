window.addEventListener('load', solve);

function solve() {
    let $firstName = $('#first-name');
    let $lastName = $('#last-name');
    let $peopleCount = $('#people-count');
    let $dateFrom = $('#from-date');
    let $daysCount = $('#days-count');
    let $nextBtn = $('#next-btn');
    let $ticketList = $('.ticket-info-list');
    let $confirmList = $('.confirm-ticket');

    $nextBtn.on('click', (e) => {
        e.preventDefault();

        if ($firstName.val() === '' || $lastName.val() === '' ||
            $peopleCount.val() === '' || $dateFrom.val() === '' || $daysCount.val() === '') {
            alert('All fields must be filled required!');
        } else {
            let $liElement = $('<li>').attr('class', 'ticket');
            let $articleInfo = $('<article>');
            let $pName = $('<h3>').text(`Name: ${$firstName.val()} ${$lastName.val()}`);
            let $pDate = $('<p>').text(`From date: ${$dateFrom.val()}`);
            let $pDays = $('<p>').text(`For ${$peopleCount.val()} days`);
            let $pPeople = $('<p>').text(`For ${$peopleCount.val()} people`);
            let $buttonEdit = $('<button>').attr('class', 'edit-btn').text('Edit');
            let $buttonContinue = $('<button>').attr('class', 'continue-btn').text('Continue');

            $articleInfo.append($pName);
            $articleInfo.append($pDate);
            $articleInfo.append($pDays);
            $articleInfo.append($pPeople);
            $articleInfo.append($buttonEdit);
            $articleInfo.append($buttonContinue);

            $liElement.append($articleInfo);
            $ticketList.append($liElement);

            $nextBtn.attr('disabled', 'true');
            $('input').val('');
            $('select').val('');
        }
    });
}