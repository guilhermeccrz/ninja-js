//	DEPURAÇÃO JS
//	CONSOLE.LOGS & DEPURAÇÃO EM BREAKPOINTS UTILIZANDO FIREBUG E /OU WEBKIT DEVTOOLS DO CHROME;
function log(){
	try{
		 console.log.apply(console,arguments);		
	}

	catch(e){
		try{
			opera.postErrr.apply(opera,arguments);
		}
		catch(e){
			alert(Array.prototype.join.call(arguments," "));
		}
	}

}

var a = "teste";
log(a);
//	UTILIZAR STEP INTO E STEP OVER NO FIREBUG PARA ENTRAR EM UM MÉTODO DO BREAKPOINT

//	CASOS DE TESTES SIMPLES PARA ASSERT

function assert(value,desc){
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(desc));
	document.getElementById("results").appendChild(li);
}

window.onload = function(){
	assert(true,"Passou no teste seu larápio!");
	assert(false,"Xiii, falhou na missão.")
}