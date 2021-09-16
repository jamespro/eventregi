const protocol = window.location.protocol;
let host = window.location.host;
if (window.location.hostname === 'localhost') {
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
    console.log('this does output to browser here (api.js: register):',data);
    console.log('uuid:', data.uuid);
    localStorage.setItem('uuid', data.uuid);
    localStorage.setItem('showcode', data.showcode);
    //TODO: Do something after you get a successful response
    //TODO: display success message, or dialog, or have another page load with instructions, or a configurable redirect URL
    actions.setSubmitting(false);
    //Not sure where, if anywhere, this goes to. Was trying to return it to use it in redirection.
    return {uuid: data.uuid};
}

export async function addItems (values, actions) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    }
    const response = await fetch(API_SERVER+'/api/addItems', requestOptions);
    const data = await response.json();
    console.log('this does output to browser here (api.js:addItems):',data);
    console.log('uuid:', data.uuid);
    localStorage.setItem('uuid', data.uuid);
    localStorage.setItem('showcode', data.showcode);
    actions.setSubmitting(false);
    //Not sure where, if anywhere, this goes to. Was trying to return it to use it in redirection.
    return null;
}

export async function getUser(values) {
    //OK THIS NEVER EVEN GETS CALLED????
    console.log(' getUser values:', values);
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    }
//RESUME HERE 20210915-20:40:46

    //maybe this GET isn't formatted or set up properly?
    // or it should be a POST, even thoug it is retrieving data?
    const response = await fetch(API_SERVER+'/api/user', requestOptions);
    const data = await response.json();
    console.log('data from getUser:', data);
    return data;
}
