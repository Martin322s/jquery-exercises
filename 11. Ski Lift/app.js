window.addEventListener('load', solve);

function solve() {
    let $firstName = $('#first-name');
    let $lastName = $('#last-name');
    let $peopleCount = $('#people-count');
    let $dateFrom = $('#from-date');
    let $daysCount = $('#days-count');
    let $nextBtn = $('#next-btn');
    let ticketList = $('ticket-info-list');
    let $confirmList = $('confirm-ticket');

    $nextBtn.on('click', (e) => {
        e.preventDefault();

        if ($firstName.val() === '' || $lastName.val() === '' ||
            $peopleCount.val() === '' || $dateFrom.val() === '' || $daysCount.val() === '') {
            alert('All fields must be filled required!');
        } else {
            
        }
    });
}