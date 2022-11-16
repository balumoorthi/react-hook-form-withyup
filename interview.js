console.log("a");

setTimeout(() => console.log("b"),0);

Promise.resolve(() => console.log("c")).then((res)=>res());

console.log("d");

a
c
d
b


let data = {
  “country”:"India",
  "vehicle": {
      "name":"maruti",
      "model":"hatchback"
  }
};

let res = data;
res.vehicle.name = "honda";
console.log(data.vehicle.name)
console.log(res.vehicle.name)

honda
honda


var num = "10";
(function () { 

	console.log("Original Number " + num); 
	var num = "50"; 
	console.log("New Number " + num); 
	
})();

Original Number 10

New Number 50
