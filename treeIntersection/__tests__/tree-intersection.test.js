/* eslint-disable camelcase */


const tree_intersection = require('../src/tree-intersection.js');
const { BinaryTree } = require('../src/tree.js');
let cool = [100, 125, 160, 175, 200, 350, 500];
describe('tree intersection', () => {
  it('returns values found in both trees', () => {
    const treeOne = new BinaryTree();
    treeOne.add(150);
    treeOne.add(100);
    treeOne.add(75);
    treeOne.add(160);
    treeOne.add(125);
    treeOne.add(175);
    treeOne.add(250);
    treeOne.add(200);
    treeOne.add(350);
    treeOne.add(300);
    treeOne.add(500);

    const treeTwo = new BinaryTree();
    treeTwo.add(42);
    treeTwo.add(100);
    treeTwo.add(15);
    treeTwo.add(160);
    treeTwo.add(125);
    treeTwo.add(175);
    treeTwo.add(600);
    treeTwo.add(200);
    treeTwo.add(350);
    treeTwo.add(4);
    treeTwo.add(500);
    expect(tree_intersection(treeOne, treeTwo)).toEqual(cool);
    console.log('some cool tree intersection with common  values',  tree_intersection(treeOne, treeTwo));
  });
});