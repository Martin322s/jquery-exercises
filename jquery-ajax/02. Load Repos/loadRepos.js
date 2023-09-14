function loadRepos() {
    let url = `https://api.github.com/users/${$("#username").val()}/repos`;

    $.ajax({
        method: 'GET',
        url,
        success: onLoadSuccess,
        error: (err) => {
            console.log(err);
        }
    });

    function onLoadSuccess(repos) {
        let $reposList = $('#repos');

        $reposList.html('');

        repos.forEach(x => {
            $reposList.append($('<li>').text(x.name))
        });
    }
}