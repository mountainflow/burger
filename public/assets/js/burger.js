$(document).on('click', '#submit-button', function (event) {
    event.preventDefault();
    $.ajax({
        url: '/api/burger',
        method: 'POST',
        data: {
            burger_name: $('#user-burger').val().trim()
        }
    });
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
    });
    location.reload();
});

$(document).on('click', '.delete-button', function (event) {
    event.preventDefault();
    let id = $(this).attr('data-id');
    $.ajax({
        url: '/api/burger/' + id,
        method: 'DELETE',
        data: {
            burger_name: $('#user-burger').val().trim()
        }
    });
    location.reload();
});