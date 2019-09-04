// a11y-diff.js 
const jsonEqual = require('node-json-equal');
const jsonDiff = require('json-diff');

function a11yDiffStr(treefileA, treeFileB) {
    const treeA = require(treefileA);
    const treeB = require(treeFileB);
    return (JSON.stringify(treeA) === JSON.stringify(treeB));
}

function a11yDiffEqual(treefileA, treeFileB) {
    const treeA = require(treefileA);
    const treeB = require(treeFileB);
    return jsonEqual(treeA, treeB);
}

function a11yDiffResult(treefileA, treeFileB) {
    const treeA = require(treefileA);
    const treeB = require(treeFileB);
    return jsonDiff.diffString(treeA, treeB);
}

module.exports = {a11yDiffStr, a11yDiffEqual, a11yDiffResult};
