/*
flattenAXTree.js
================
- Recursive flattening of nested JSON Tree
- Assumed Input Tree structure = Puppeteer's A11y.snapshot({interestingOnly: false})
- Nesting pattern: Object.children = Array[ Object(.children) ] 
{ 
    name: "name", 
    role: "role", 
    children: [ {child_0}, ... , {child_n}  ]
}

Where {child_0} = { 
    name: "name", 
    role: "role", 
    children: [ {child_00}, ... , {child_0n}  ]
}
*/

// Globals
var nodeCount = 0;
var flatAXTree = [];

// Recursive Tree Traversal Function
function getBranch(branch)  {
    nodeCount++;
    flatAXTree.push( { role: branch.role, name: branch.name } );
    console.log(branch.role + ' | ' + branch.name);
    // Recursion base-case: stop when object has no `children` Array
    branch.children === undefined ?
        console.log('\n---------- END OF BRANCH ----------\n')  :
        // Otherwise, recursively flatten each child in `children` 
        branch.children.forEach(getBranch)
}

//======================================================================
// Quick-Test
// Nested Tree Input (from file)
const nestedAXTree = require('./fullAXSnapshot.json')
getBranch(nestedAXTree);
console.log('============================');
console.log('Results: flattenAXTree      ');
console.log('============================');
console.log('Node Count:\t' + nodeCount);
console.log('----------------------------');
console.log('Flattened Tree:             ');
console.log('----------------------------');
console.log(flatAXTree);