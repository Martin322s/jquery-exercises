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
        let reposListElement = $('#repos');
        reposListElement.empty();
        console.log(data);
        data.forEach(x => {
            let liElement = $(`<li><a href="${x.clone_url}">${x.name}</a></li>`);
            reposListElement.append(liElement);
        });
    }

    function onError(err) {
        let reposListElement = $('#repos');
        reposListElement.empty();
        let liElement = $(`<li>${err}</li>`);
        reposListElement.append(liElement);
    }
}