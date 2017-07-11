var dollar, euro, hryvnia, euroGR, dollarGR,
 	euro = prompt("write euro", euro),
	dollar = prompt("write dollars", dollar),
	euroGR = parseInt(euro) * 29.75,
	dollarGR = parseInt(dollar) * 26.05;
alert(euro + " euros are equal " + euroGR + " UAH, " + dollar + " dollars are equal " + dollarGR + " UAH, one euro is equal " + 29.75/26.05 + " dollars.");
