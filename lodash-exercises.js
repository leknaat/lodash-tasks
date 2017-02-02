// starting point is always gillFamily
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}];



/* Task two
   produce an array of the names of the gill family. */
var nameArray = _.map(gillFamily, 'name');
console.log(nameArray);



/* Task three
   produce an array of the names of the gill family including surnames */