
# Challenge Summary

Fizz-Buzz-Tree 

creating a FizzBuzz tree
## Challenge Description

Challenge

The challenge is to  create  a binary tree and replacing its value with fizz, buzz, or fizzbuzz

## Approach & Efficiency

Create a function called FizzBuzzTree which takes a tree as an argument. determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes: If the value is divisible by 3, replace the value with “Fizz” If the value is divisible by 5, replace the value with “Buzz” If the value is divisible by 3 and 5, replace the value with “FizzBuzz” Return the tree with its new values

## Solution




const fizzBuzzTree = (tree) => {

  if(tree.value % 3 === 0 && tree.value % 5 === 0) {
    tree.value = 'FizzBuzz';
    console.log('FizzBuzz' , tree );
  }
  else if(tree.value % 3 === 0) {
    tree.value = 'Fizz';
        console.log('Fizz' , tree );

  }
  else if(tree.value % 5 === 0) {
    tree.value = 'Buzz';
            console.log('Buzz' , tree );

  }
  return tree.value;
};

module.exports =  fizzBuzzTree ;