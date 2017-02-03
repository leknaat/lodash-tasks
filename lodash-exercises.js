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
var getages2 = _.map(gillFamily, 'age');
var mean = _.mean(getages, function(avg){
	return _.sum(avg);
	});
console.log("The mean age is " + mean);



/* Task five
   Write the code to get the members of the gill family under the age of 50. */



/* Task six
   Write the code to calculate the number of members in the gill family. */



/* Task seven
   Write the code to calculate how many members of the gill family are under 50?. */



/* Task eight 
   Write the code to produce a comma seperated string of the Gill family members who are 
   under 50's names with surnames. */
