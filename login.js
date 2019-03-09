
function autenticar(form) {

	var requestURL = 'https://calm-coast-69939.herokuapp.com/getuser'
	var request = new XMLHttpRequest()
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	registered = request.response

	var user = form.user.value
	var pass = form.pass.value
	if (user == registered.user && pass == registered.pass) {
		window.open('page.html')
	}
}

