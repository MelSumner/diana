
// a11y-diff.js 
const jsonEqual = require('node-json-equal');
const jsonDiff = require('json-diff');
// JSON Files for Equality / Diff Testing
// Same Length Trees
const pn00_org = require('./pn00_org.json'); // Original
const pn01_org = require('./pn01_org.json'); // Exact copy
const pn02_ooo = require('./pn02_ooo.json'); // Out of Order
const pn03_chg = require('./pn03_chg.json'); // Node Changed
// Different Length Trees
const pn10_add = require('./pn10_add.json'); // Node Added
const pn11_sub = require('./pn11_sub.json'); // Node Removed

console.log('00_ORG ===================================');
console.log('00|00_org strEqual: ' + (JSON.stringify(pn00_org) === JSON.stringify(pn00_org)));
console.log('00|00_org jsonEqual: ' + jsonEqual(pn00_org, pn00_org));
console.log('00|00_org jsonDiff:');
console.log(jsonDiff.diffString(pn00_org, pn00_org));
console.log('01_ORG ====================================');
console.log('00|01_org strEqual: ' + (JSON.stringify(pn00_org) === JSON.stringify(pn01_org)));
console.log('00|01_org jsonEqual: ' + jsonEqual(pn00_org, pn01_org));
console.log('00|01_org jsonDiff:');
console.log(jsonDiff.diffString(pn00_org, pn01_org));
console.log('02_OOO =======================================');
console.log('00|02_ooo strEqual: ' + (JSON.stringify(pn00_org) === JSON.stringify(pn02_ooo)));
console.log('00|02_ooo jsonEqual: ' + jsonEqual(pn00_org, pn02_ooo));
console.log('00|02_ooo jsonDiff:');
console.log(jsonDiff.diffString(pn00_org, pn02_ooo));
console.log('03_CHG =======================================');
console.log('00|03_chg strEqual: ' + (JSON.stringify(pn00_org) === JSON.stringify(pn03_chg)));
console.log('00|03_chg jsonEqual: ' + jsonEqual(pn00_org, pn03_chg));
console.log('00|03_chg jsonDiff:');
console.log(jsonDiff.diffString(pn00_org, pn03_chg));

console.log('10_ADD =======================================');
console.log('00|10_add strEqual: ' + (JSON.stringify(pn00_org) === JSON.stringify(pn10_add)));
console.log('00|10_add jsonEqual: ' + jsonEqual(pn00_org, pn10_add));
console.log('00|10_add jsonDiff:');
console.log(jsonDiff.diffString(pn00_org, pn10_add));

console.log('11_SUB =======================================');
console.log('00|11_sub strEqual: ' + (JSON.stringify(pn00_org) === JSON.stringify(pn11_sub)));
console.log('00|11_sub jsonEqual: ' + jsonEqual(pn00_org, pn11_sub));
console.log('00|11_sub jsonDiff:');
console.log(jsonDiff.diffString(pn00_org, pn11_sub));