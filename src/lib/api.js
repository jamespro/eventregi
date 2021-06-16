const protocol = window.location.protocol;
let host = window.location.host;
if (window.location.hostname == 'localhost') {
    host = 'localhost:3333';
} else {
    host = 'eventregg.herokuapp.com';
}

let API_SERVER = protocol + '//' + host;

export async function register (values, actions) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    }
    const response = await fetch(API_SERVER+'/api/register', requestOptions);
    const data = await response.json();
    console.log(data);
    //TODO: Do something after you get a successful response
    //TODO: display success message, or dialog, or have another page load with instructions, or a configurable redirect URL
    actions.setSubmitting(false);
}
