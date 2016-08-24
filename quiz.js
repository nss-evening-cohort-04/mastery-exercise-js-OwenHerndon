var tree = {
    char: "",
    height: ""
};

document.getElementById('click').addEventListener('click', treeObject);
document.getElementById('keypress').addEventListener('keypress', keypressCheck);

function treeObject(){
    var tree = {
    char:document.getElementById("char").value,
    height:document.getElementById("height").value
    };
    validation(tree);
}


function validation(myTree){
    if (myTree.char == "") {
        text = "Tsk, Tsk. Input for character was not valid";
        document.getElementById("prompt").innerHTML = text;
        return alert("Oh noes!! You didnt enter a valid character");
    }
    else if(isNaN(myTree.height) || myTree.height < 1){
        text = "Tsk, Tsk. Input for height was not valid";
        document.getElementById("prompt").innerHTML = text;
        return alert("Oh noes!! You didnt enter a valid height");
    }
    else{
        text = "Input OK";
        growTree(myTree);
    }
    document.getElementById("prompt").innerHTML = text;
}

function growTree(myTree){
    var leaf = [];
    var branch = "";

    for (var i = 0; i < myTree.height; i++) {
        var  growth;
        leaf.push(growth);
        leaf.fill(myTree.char);
    }

    for (var i = 0, space = myTree.height-1; i < leaf.length; i++, space--) {
        branch += leaf[i];
        var charLength = myTree.char.length;
        var treeSpace = " ";
        treeSpace = treeSpace.repeat(charLength);
        console.log(treeSpace.repeat(space) + branch);
        branch += leaf[i];
    }

}

function keypressCheck(e){
    if(e.keyCode === 13){
        treeObject();
    }
    return false;
}
