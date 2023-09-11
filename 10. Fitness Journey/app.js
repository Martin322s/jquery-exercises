window.addEventListener('load', solve);

function solve() {
    let $name = $('#name');
    let $email = $('#email');
    let $contactNumber = $('#contact-number');
    let $classType = $('#class-type');
    let $classTime = $('#class-time');
    let $nextBtn = $('#next-btn');
    let $infoList = $('.class-info');

    $nextBtn.on('click', (e) => {
        e.preventDefault();

        if ($name.val() === '' || $email.val() === '' ||
            $contactNumber.val() === '' || $classType.val() === '' || $classTime.val() === '') {
            alert('All fields must be filled required!');
        } else {
            let $liElement = $('<li>').attr('class', 'info-item');
            let $articleInfo = $('<article>').attr('class', 'personal-info');
            let $pName = $('<p>').text($name.val());
            let $pEmail = $('<p>').text($email.val());
            let $pPhone = $('<p>').text($contactNumber.val());
            let $pType = $('<p>').text($classType.val());
            let $pTime = $('<p>').text($classTime.val());
            let $buttonEdit = $('<button>').attr('class', 'edit-btn').text('Edit');
            let $buttonContinue = $('<button>').attr('class', 'continue-btn').text('Continue');

            $articleInfo.append($pName);
            $articleInfo.append($pEmail);
            $articleInfo.append($pPhone);
            $articleInfo.append($pType);
            $articleInfo.append($pTime);
            $articleInfo.append($buttonEdit);
            $articleInfo.append($buttonContinue);

            $liElement.append($articleInfo);
            $infoList.append($liElement);

            $nextBtn.attr('disabled', 'true');
            $('input').val('');
            $('select').val('')
        }
    });
}