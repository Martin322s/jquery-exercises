window.addEventListener('load', solve);

function solve() {
    let $name = $('#name');
    let $email = $('#email');
    let $contactNumber = $('#contact-number');
    let $classType = $('#class-type');
    let $classTime = $('#class-time');
    let $nextBtn = $('#next-btn');
    let $classInfo = $('.class-info');

    $nextBtn.on('click', (e) => {
        e.preventDefault();

        if ($name.val() === '' || $email.val() === '' ||
            $contactNumber.val() === '' || $classType.val() === '' || $classTime.val() === '') {
            alert('All fields must be filled required!');
        } else {

        }
    });
}