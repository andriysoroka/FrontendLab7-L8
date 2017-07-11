var a, b, c, res1, res2, D, big0, less0, zero, x, res, p, nanka;
big0 = "bigger";
zero = "zero";
a = parseInt(prompt("write a", a));
b = parseInt(prompt("write b", b));
c = parseInt(prompt("write c", c));
D = Math.pow(b, 2) - (4 * a * c);
less0 = "Discriminant = " + D + " less than 0, so we don`t have x1 and x2";
res2 = ((-b) + Math.sqrt(D)) / (2 * a);
res1 = ((-b) - Math.sqrt(D)) / (2 * a);
p = (D > 0) ? (`x1 = ${res1}, x2 = ${res2}`)
			: (D < 0) ? less0
			: (x = - 2 / 2 * a);
//nanka = (isNaN(D)) ? "You have not written numbers, please reload this page" : p; // can be to check if user write numbers
//console.log(nanka);
console.log(p);

	