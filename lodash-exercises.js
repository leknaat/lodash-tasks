// starting point is always gillFamily
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}];



/* Task one
   produce an array of the names of the gill family. */
var nameArray = _.map(gillFamily, 'name');
console.log(nameArray);



/* Task two
   produce an array of the names of the gill family including surnames */
var surname = _.map(gillFamily, function(person){
	return person.name + ' gill';
});
console.log(surname);


/* Task three
   Write the code to sum the ages of the Gill family */
var getages = _.map(gillFamily, 'age');
var totalages = _.sum(getages);
console.log("Sum of all ages is: " + totalages);



/* Task four
   Write the code to calculate mean age of Gill family */
console.log("The mean age is " + _.mean(getages));