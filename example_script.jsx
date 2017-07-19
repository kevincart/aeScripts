var message = "You just sent a variable to an alert";
var err = function err(errString) {
    alert(errString);
    }
app.onError = err;

alert(message);

app.newProject();
