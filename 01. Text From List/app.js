function extractText() {
    let liElements = $('li');
    let textContent = liElements
        .toArray()
        .map(x => x.textContent);

    $('#result').text(textContent.join(', '));
}