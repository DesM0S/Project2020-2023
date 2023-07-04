function  valid (form){
	var name = form.username.value;
	var password = form.password.value;
	if (password == ""){

		alert("добро пожаловать " + name);
		
	}else{
		alert("введины не правельные данные");
	}
}