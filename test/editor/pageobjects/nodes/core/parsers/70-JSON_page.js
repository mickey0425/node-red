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

function jsonNode(id) {
    nodePage.call(this, id);
}

util.inherits(jsonNode, nodePage);

jsonNode.prototype.setAction = function (action) {
    browser.setValue('node-input-action', action);
}

jsonNode.prototype.setProperty = function(property) {
    browser.setValue('//*[@id="dialog-form"]/div[2]/div/div/input', property);
}

module.exports = jsonNode;
