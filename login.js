
   function autenticar() {
 	registered = {
 		user: 'adailsonacj@live.com', 
 		pass: 123123 		
 	}

 	var user = document.getElementById('user').value 
 	var pass = document.getElementById('pass').value
 	if(user == registered.user && pass == registered.pass){
 		alert("Usuário Logado!")
 	}
 }

  