function encrypt(){



	var python = require("python-shell");
	var path = require("path");

	var plain_text = document.getElementById("plain_text").value;
	var key = document.getElementById("key_en").value;

	var options = {
		scriptPath : path.join(__dirname , '/../engine/'),
		args : [plain_text,key]
	};


	var text = new python('encrypt.py' , options);

	text.on('message' , function(message){
		document.getElementById("cipher_text").innerHTML=message;
	})
}

function decrypt(){
	var python = require("python-shell");
	var path = require("path");

	var cipher_text = document.getElementById("ciphered_text").value;
	var key = document.getElementById("key_de").value;

	var options = {
		scriptPath : path.join(__dirname , '/../engine/'),
		args : [cipher_text,key]
	};

	var text = new python('decrypt.py' , options);

	text.on('message' , function(message){
		document.getElementById("decrypted_text").innerHTML=message;
	})
}
