const age = 20;
let percentage = 61;

const promise1 = new Promise(function(resolve, reject) {
	if (age > 18 && age < 30) {
		resolve("Promise 1 executed");
	} else {
		reject("Promise 1 rejected");
	}
});

const promise2 = new Promise(function(resolve, reject) {
	if (percentage > 50 && percentage < 70) {
		resolve("Promise 2 executed");
	} else {
		reject("Promise 2 executed");
	}
});

Promise.all([promise1, promise2])
.then (function success() {
	console.log("success");
})
.catch (function error() {
	console.log("reject");
})
.finally (function final() {
	console.log("we are into the final block");
});
	


