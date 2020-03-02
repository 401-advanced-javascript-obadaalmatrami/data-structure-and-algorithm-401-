/* eslint-disable camelcase */
'use srtrict';

const tree_intersection = (treeOne, treeTwo) => {
  const treeOneArr = treeOne.preOrder(treeOne.root);
  const treeTwoArr = treeTwo.preOrder(treeTwo.root);
  const result = [];
  treeOneArr.forEach(h => {
    treeTwoArr.forEach(c => {
      if(h === c) {
        result.push(h);
      }
    });
  });
  return result.sort();
};
module.exports = tree_intersection;

