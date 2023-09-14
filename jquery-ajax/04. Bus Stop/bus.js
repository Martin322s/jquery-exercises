function getInfo() {
    const baseUrl = 'https://businfo-77fd9.firebaseio.com/businfo';

    let busId = $('#stopId').val();

    $.ajax({
        method: 'GET',
        url: baseUrl + `/${busId}.json`,
        success: viewResponse,
        error: (res) => $('#stopName').text('Error')
    });
}

function viewResponse(res) {
    let busesElement = $('#buses');
    busesElement.empty();
    let stopNameElement = $('#stopName');
    if (!res) {
        stopNameElement.text('Error');
        return;
    }

    let stopName = res['name'];
    let buses = res['buses'];

    stopNameElement.text(stopName);

    for (let key in buses) {
        let busMinutes = buses[key];

        let li = $('<li>').text(`Bus ${key} arrives in ${busMinutes} minutes`);
        busesElement.append(li);
    }
}