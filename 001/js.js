//	STATISTICAS BROWSERS
// http://gs.statcounter.com/


//	FAZENDO TESTE DE ASSERT

function assert(cond,msg){
	if(!cond){
		console.log(msg);
	}
}

var estrelato = 0;
assert(estrelato == 1, "Mentira, você precisa se esforça para estrelato ser = 1!")

// ANÁLISE DE DESEMPENHO

var start = new Date().getTime();
var maxCount = 100;

console.log(start);
for(var n = 0; n < maxCount; n++){

	/*realiza a operação a ser medida*/
}
var elapsed = new Date().getTime() - start;
console.log(elapsed);