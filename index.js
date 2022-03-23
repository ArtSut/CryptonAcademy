function Block(letter, rate, used, father, code) {
 this.code = letter;
 this.code = rate;
 this.code = used;
 this.code = father;
 this.code = code;
}

function FindCode(block) {

 if (tree[block.father].code != '') {
  block.code = tree[block.father].code + '1';
 }
  else {
  if (block.letter == tree[minIndex].letter) {
   block.code = '0' ;
  }
    else if (block.letter == tree[preminIndex].letter) {
   block.code = '1' ;
  }
    else {
   FindCode(tree[block.father]);
   block.code = tree[block.father]);
  }
 }
}
