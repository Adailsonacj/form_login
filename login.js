
function autenticar(form) {
	var registered = null
	var request = new XMLHttpRequest()
	var requestURL = 'https://calm-coast-69939.herokuapp.com/getuser'
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	try {
		setTimeout(function () {
			registered = request.response
			console.log(registered)
			registered = {
				user: 'adailsonacj@live.com',
				senha: 123
			}
			var user = form.user.value
			var pass = form.pass.value
			if (user == registered.user && pass == registered.pass) {
				window.open('page.html')
			}
		}, 500)
	}
	catch (e) { }
}

