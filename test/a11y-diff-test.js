// a11y-diff-test.js

const a11yDiff = require('./../a11y-diff.js');

QUnit.test( "Test: a11yDiffStr -- self ", function(assert) {
    assert.ok( 
        a11yDiff.a11yDiffStr( './pn00_org.json', './pn00_org.json'), 
        "Test Passed: a11yDiffStr"
    );
});

QUnit.test( "Test: a11yDiffEqual -- self ", function(assert) {
    assert.ok( 
        a11yDiff.a11yDiffEqual( './pn00_org.json', './pn00_org.json'), 
        "Test Passed: a11yDiffEqual"
    );
});

QUnit.test( "Test: a11yDiffResult -- self ", function(assert) {
    assert.ok( 
        a11yDiff.a11yDiffResult( './pn00_org.json', './pn00_org.json').length === 0, 
        "Test Passed: a11yDiffResult"
    );
});
