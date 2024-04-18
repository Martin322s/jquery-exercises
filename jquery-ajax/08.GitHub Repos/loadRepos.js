function loadRepos() {
    let username = $('#username').val();
    let url = `https://api.github.com/users/${username}/repos`;

    $.ajax({
        method: 'GET',
        url,
        success: onSuccess,
        error: onError
    })

    function onSuccess(data) {
        console.log(data);
    }

    function onError(err) {
        console.log(err);
    }
}