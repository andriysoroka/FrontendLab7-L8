var res1, res2, check,
	a = parseInt(prompt("write a", a)),
	b = parseInt(prompt("write b", b)),
	c = parseInt(prompt("write c", c)),
	D = Math.pow(b, 2) - (4 * a * c),
	result = D > 0 ? `Discriminant = ${D} bigger than 0, so we have x1 = ${res1 = (-b - Math.sqrt(D)) / (2 * a)}, x2 = ${res2 = (-b + Math.sqrt(D)) / (2 * a)}`
			: D < 0 ? `Discriminant = ${D} less than 0, so we do not have x1 and x2`
			: `Discriminant = ${D} equal 0, so we have  x =  ${- b / (2 * a)}`;
//check = (isNaN(D)) ? "You have not written numbers, please reload this page" : p; // can be to check if user write numbers
//console.log(check);
console.log(result);

