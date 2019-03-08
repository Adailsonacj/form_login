
function autenticar(form) {
	registered = {
		user: 'adailsonacj@live.com',
		pass: 123
	}
	var posts = await fetch('https://calm-coast-69939.herokuapp.com/getuser')
	

	var user = form.user.value
	var pass = form.pass.value
	if (user == registered.user && pass == registered.pass) {
		window.open('page.html')
	}
}

