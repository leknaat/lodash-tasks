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
var getAges = _.map(gillFamily, 'age');
var totalAges = _.sum(getAges);
console.log("Sum of all ages is: " + totalAges);



/* Task four
   Write the code to calculate mean age of Gill family */
var getAges2 = _.map(gillFamily, 'age');
var mean = _.mean(getAges2);
console.log("The mean age is " + mean);



/* Task five
   Write the code to get the members of the gill family under the age of 50. */
var under50 = _.filter(gillFamily, function(young){
	return young.age < 50;
});
console.log(under50);



/* Task six
   Write the code to calculate the number of members in the gill family. */
var familyMembers = _.size(gillFamily);
console.log(familyMembers);


/* Task seven
   Write the code to calculate how many members of the gill family are under 50?. */
var famUnder50 = _.filter(gillFamily, function(young) {
	return young.age < 50;
});
console.log(_.size(famUnder50));


/* Task eight 
   Write the code to produce a comma seperated string of the Gill family members who are 
   under 50's names with surnames. */
var a = _.filter(gillFamily, function(young) {
	if(young.age < 50) {
		return young.name;
	}
});
var namesUnder50 = _.map(a, function(person){
	return person.name + ' gill';
});
console.log(namesUnder50);



/* Task nine
   Create a html table of Gill family members with name and age headings. 
   Print the HTML as a string to the console. */



/* Task ten
   Some gill family members are sensitive about their age. 
   If the family member is over 26. Drop their age. */



/* Task eleven
   Sort the gill family members by age. */
var ageSort = _.sortBy(gillFamily, function(value){
	return value.age;
});
console.log(ageSort);



/* Task twelve
   Find the Gill family members who's name starts with a 'D' */
var dSort = _.filter(gillFamily, function(person){
	return person.name[0] === 'd';
});
console.log(dSort);



/* Task thirteen
   Group the Gill family members who's names start with different letters.
   result should look like (ordering doesn't matter):
	{
	  d: [{name: 'daniel', age: 25}, {name: 'debbie', age: 55}],
	  j: [{name: 'john', age: 20}],
	  r: [{name: 'robin', age: 60}, {name: 'richard', age: 27}],
	} */
