# find the maximum value of tree 
# Challenge Summary
<!-- Short summary or background information -->
we well to create a method to find the maximum value of tree 
## Challenge Description
<!-- Description of the challenge -->
i build a method to find the maximum value of tree 
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
time  O(n)
spaace O(1)
## Solution
<!-- Embedded whiteboard image -->

maximumValue(tree) {
    let curr = tree.root;

    while(curr.right !== null) {

      curr = curr.right;
      
    }
    return curr.value; 
  }