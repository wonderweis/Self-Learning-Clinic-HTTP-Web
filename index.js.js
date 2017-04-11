let http = require('http');
//let fs = require('fs');
let requireReadLine = require("readline");
let readline = requireReadLine.createInterface({
	input: process.stdin, output: process.stdout
});


console.log("\n............................Command-Line-API APP...........................");
console.log("\n............................STAR WARS CHARACTERS...........................");
console.log("\n...An IDEA from SWAPI and Starwars DATABANK for those that love Star Wars...");

let showCommands = "\n\tAvailable Commands\n" +  
	'**  "xters" - Command to consume api and Lists out all star-wars major characters\n' +
    '**   NOTE -- "All commands are in small letters!"\n' +
    '**   TO QUIT AT ANYTIME PRESS "CTRL+C" TWICE';

let xterPrompt = '\nSTAR WARS CHARACTERS ARE AVIALABLE BY ID. e.g 1 - for Luke Skywalker!';

appStart();
function appStart() {
    readline.question("\nPLEASE ENTER 'ok' TO CONTINUE \n>>>", function(answer){
    	if(answer.trim() === "ok"){
    		console.log(showCommands);
    		readline.setPrompt(">>>");
			readline.prompt();
    	}else{
    		console.log('PRESS "CTRL+C" TWICE TO QUIT');
    	}
    });
}

function getApi(host,id){
	let url = host + id +'/';
	console.log("Performing GET Request...");
	let request = http.get(url,function(res){
		let body = "";
		res.on('data', function(data){
			body = body + data;
			console.log(body);
			readline.setPrompt(">>>");
			readline.prompt();
		});
	});
}

//CHARACTERS ID
function getXterApi(){
	console.log(xterPrompt);
	readline.question("ENTER ID \n>>>",function(answer){
		let id = answer;
		let host = 'http://swapi.co/api/people/';
		getApi(host,id);
	});
}

}
//USER INPUT VERIFICATION
readline.on('line',function(line){
	let lineResponse = line;
	if(line === "xters") {
		getXterApi();
	}
	else{
		console.log("CHOOSE FOR CHARACTERS, ONLY!");
	}
});

