// a11y-diff.js 
const jsonEqual = require('node-json-equal');
const jsonDiff = require('json-diff');

// JSON Files for Equality / Diff Testing
// const pn00_org = require('./pn00_org.json'); // Original
// const pn01_org = require('./pn01_org.json'); // Exact copy
// const pn02_ooo = require('./pn02_ooo.json'); // Out of Order
// const pn03_chg = require('./pn03_chg.json'); // Node Changed
// const pn10_add = require('./pn10_add.json'); // Node Added
// const pn11_sub = require('./pn11_sub.json'); // Node Removed

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
