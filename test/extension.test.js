/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
var assert = require('assert')

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
var vscode = require('vscode')
var myExtension = require('../extension')

var editor = vscode.window.activeTextEditor
    // var lineIndex = editor.selection.active.line;
    // var lineObject = editor.document.lineAt( lineIndex );
    // var lineLength = lineObject.text.length;

console.log(editor)
    // console.log( lineIndex );
    // console.log( lineObject );
    // console.log( lineLength );

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', function () {
    // Defines a Mocha unit test
  test('Something 1', function () {
    assert.equal(-1, [1, 2, 3].indexOf(5))
    assert.equal(-1, [1, 2, 3].indexOf(0))
  })
})
