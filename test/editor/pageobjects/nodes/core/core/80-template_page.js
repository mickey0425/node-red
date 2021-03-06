/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var util = require("util");

var nodePage = require("../../node_page");

var keyPage = require("../../../util/key_page");

function templateNode(id) {
    nodePage.call(this, id);
}

util.inherits(templateNode, nodePage);

templateNode.prototype.setSyntax = function(syntax) {
    browser.selectWithWait('#node-input-syntax', syntax);
}

templateNode.prototype.setFormat = function(format) {
    browser.selectWithWait('#node-input-format', format);
}

templateNode.prototype.setTemplate = function(template) {
    browser.clickWithWait('#node-input-template-editor');
    browser.keys(keyPage.selectAll());
    // Need to add a character one by one since some words such as 'Control' are treated as a special word.
    for (var i = 0; i < template.length; i++) {
        browser.keys([template.charAt(i)]);
    }
    browser.keys(keyPage.selectToEnd());
    browser.keys(['Delete']);
    // Need to wait until ace editor correctly checks the syntax.
    browser.pause(300);
}

module.exports = templateNode;
