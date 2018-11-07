var sha1 = require('sha1');
var names = [
    "Alcee Hastings",
    "Alfred Lawson",
    "Bill Posey",
    "Brian Mast",
    "Carlos Curbelo",
    "Charlie Crist",
    "Daniel Webster",
    "Darren Soto",
    "Debbie Wasserman Schultz",
    "Dennis Ross",
    "Francis Rooney",
    "Frederica Wilson",
    "Gus Bilirakis",
    "Ileana Ros-Lehtinen",
    "John Rutherford",
    "Kathy Castor",
    "Lois Frankel",
    "Mario Diaz-Balart",
    "Matt Gaetz",
    "Neal Dunn",
    "Stephanie Murphy",
    "Ted Deutch",
    "Ted Yoho",
    "Thomas Rooney",
    "Val Demings",
    "Vern Buchanan"
];

var congress_name = new Array()
for (var i = 0; i < names.length; i++) {
    congress_name.push(sha1(names[i]))
    console.log("This is secret code for:" + names[i] + " :::: " + (congress_name[i])) 
}

function BinarySearchTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}
//for insert object
BinarySearchTree.prototype.insert = function (value) {
    let subtree = value < this.value ? 'left' : 'right';
    if (this[subtree]) {
        this[subtree].insert(value);
    } else {
        this[subtree] = new BinarySearchTree(value);
    }
};

var newTree = new BinarySearchTree(congress_name.shift());

newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
newTree.insert(congress_name.shift());
console.log(newTree);
BinarySearchTree.prototype.getMin = function () {
    if (this.left)
        return this.left.getMin();
    else
        return this.value;
};


for (var i = 0; i < names.length; i++) {
    congress_name.push(sha1(names[i]));
}
var minName = [];
minName = congress_name.indexOf(newTree.getMin());
console.log(names[minName]);

console.log(newTree.getMin());

BinarySearchTree.prototype.contains = function(value) {
    if (this.value === value)   
    return true;   
    let subtree = value < this.value ? "left" : "right";
    if(this[subtree]) {
    return this[subtree].contains(value);
    } else {
    return false;
    }
};
var d = new BinarySearchTree("Daniel Webster", "Darren Soto", "Debbie Wasserman Schultz", "Dennis Ross");
console.log('Searching for D in the first name : ' + d.contains("Daniel Webster"));