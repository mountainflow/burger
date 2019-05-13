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
    console.log('devoured');

})