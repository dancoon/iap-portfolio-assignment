function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var output = "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;

    document.getElementById('formOutput').innerHTML = output;
}
