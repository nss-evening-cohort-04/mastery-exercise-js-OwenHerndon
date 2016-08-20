//char = character displayed/storred in array
//height = length of array created
//function displays array in accending order per line

function enter(e){
if(e.keyCode === 13){
var char = document.getElementById("char").value;
if (char == "") {
        text = "Tsk, Tsk. Input for character was not valid";
        document.getElementById("prompt").innerHTML = text;
        return alert("Oh noes!! You didnt enter a valid character");
    }else{
    	text = "Input OK";
    }
document.getElementById("prompt").innerHTML = text;
//declares array where character input is stored
var leaf = [];

//string that displays in console each line of the tree
var tree = "";

//set length of array by input
var height = document.getElementById("height").value;

if (isNaN(height) || height < 1) {
        text = "Tsk, Tsk. Input for height was not valid";
        alert("Oh noes!! You didnt enter a valid height");
    }else{
    	text = "Input OK";
    }
document.getElementById("prompt").innerHTML = text;
//
for (var i = 0; i < height; i++) {
	var  growth;
	leaf.push(growth);
}

//push char into array .fill
leaf.fill(char);

//for loop with console.log that adds next object in array
for (var i = 0, space = height-1; i < leaf.length; i++, space--) {
	
	tree += leaf[i];
	
	var treeSpace = " ";

	console.log(treeSpace.repeat(space) + tree);
	tree += leaf[i];


}
         }

         return false;
     }

function grow () {
//gets input of the character that the tree is made of
var char = document.getElementById("char").value;

//declares array where character input is stored
var leaf = [];

//string that displays in console each line of the tree
var tree = "";

//set length of array by input
var height = document.getElementById("height").value;

if (isNaN(height) || height < 1) {
        text = "Tsk, Tsk. Input for height was not valid";
        alert("Oh noes!! You didnt enter a valid height");
    }else{
    	text = "Input OK";
    }
//
for (var i = 0; i < height; i++) {
	var  growth;
	leaf.push(growth);
}

//push char into array .fill
leaf.fill(char);

//for loop with console.log that adds next object in array
for (var i = 0, space = height-1; i < leaf.length; i++, space--) {
	
	tree += leaf[i];
	
	var treeSpace = " ";

	console.log(treeSpace.repeat(space) + tree);
	tree += leaf[i];


}
}