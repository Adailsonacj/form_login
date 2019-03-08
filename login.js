
function autenticar(form) {
	registered = {
		user: 'adailsonacj@live.com',
		pass: 123
	}

	var user = form.user.value
	var pass = form.pass.value
	if (user == registered.user && pass == registered.pass) {
		window.open('page.html')
	}
}

