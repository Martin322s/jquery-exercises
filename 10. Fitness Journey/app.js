window.addEventListener('load', solve);

function solve() {
    let $name = $('#name');
    let $email = $('#email');
    let $contactNumber = $('#contact-number');
    let $classType = $('#class-type');
    let $classTime = $('#class-time');
    let $nextBtn = $('#next-btn');
    let $infoList = $('.class-info');
    let $confirmList = $('.confirm-class');

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
            $('select').val('');


            $buttonEdit.on('click', (e) => {
                e.preventDefault();

                let inputValues = $('.personal-info').children().toArray().map(x => x.textContent);
                $name.val(inputValues[0]);
                $email.val(inputValues[1]);
                $contactNumber.val(inputValues[2]);
                $classType.val(inputValues[3]);
                $classTime.val(inputValues[4]);

                $nextBtn.removeAttr('disabled');
                e.target.parentNode.parentNode.remove();
            });

            $buttonContinue.on('click', (ev) => {
                $confirmList.append(ev.target.parentNode.parentNode);
                let $btnCncel = $('<button>').attr('class', 'cancel-btn').text('Cancel');
                let $btnConfirm = $('<button>').attr('class', 'confirm-btn').text('Confirm');
                $('.edit-btn').replaceWith($btnCncel);
                $('.continue-btn').replaceWith($btnConfirm);

                $btnCncel.on('click', (ev) => {
                    ev.target.parentNode.parentNode.remove();
                    $nextBtn.removeAttr('disabled');
                });

                $btnConfirm.on('click', () => {
                    let $heading = $(`
                        <h1 id="thank-you">
                            Thank you for scheduling your appointment, we look forward to seeing you!
                        </h1>
                    `);
                    let $doneBtn = $('<button id="done-btn">Done</button>');
                    $('div#main').replaceWith($heading, $doneBtn);

                    $doneBtn.on('click', () => {
                        location.reload();
                    })
                });
            });
        }
    });
}