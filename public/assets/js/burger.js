$(document).on('click', '#submit-button', function (event) {
    event.preventDefault();
    console.log('submit pressed');
    $.ajax({
        url: '/api/burger',
        method: 'POST',
        data: {
            burger_name: $('#user-burger').val().trim()
        }
    }).then(function (serverResponse) {
        console.log(serverResponse);
    })
    location.reload();
});

$(document).on('click', '.devour-button', function (event) {
    event.preventDefault();
    let id = $(this).attr('data-id');
    $.ajax({
        url: '/api/burger/' + id,
        method: 'PUT',
        data: {
            burger_name: $('#user-burger').val().trim()
        }
    }).then(function (serverResponse) {
        console.log(serverResponse);
    });
    location.reload();
    console.log('devoured');
});

$(document).on('click', '.delete-button', function (event) {
    event.preventDefault();
    console.log('deleted');
    let id = $(this).attr('data-id');
    $.ajax({
        url: '/api/burger/' + id,
        method: 'DELETE',
        data: {
            burger_name: $('#user-burger').val().trim()
        }
    }).then(function (serverResponse) {
        console.log(serverResponse);
    });
    location.reload();
});