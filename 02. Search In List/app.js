function search() {
    $(`#towns li`).css('font-weight', 'normal');

    let inputValue = $('#searchText').val();

    let towns = $(`#towns li:contains(${inputValue})`).css('font-weight', 'bold');
    let count = towns.toArray().length;

    $('#result').text(`${count} matches found.`);
}