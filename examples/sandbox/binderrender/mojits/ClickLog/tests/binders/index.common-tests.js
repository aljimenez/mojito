/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('ClickLogBinderIndex-tests', function(Y, NAME) {

    var suite = new YUITest.TestSuite(NAME),
        binder,
        A = YUITest.Assert;

    suite.add(new YUITest.TestCase({

        name: 'ClickLog index binder tests',

        setUp: function() {
            binder = Y.mojito.binders.ClickLogBinderIndex;
        },
        tearDown: function() {
            binder = null;
        },

        'TODO: test update id': function() {
            var node = Y.Node.create('<div id="guid123" class="ClickLog">\n    <div class="clicker">\n        <a href="#">click me</a>\n    </div>\n    <div class="log">\n    </div>\n</div>\n');
            binder.init({
                _guid: 'guid123'
            });
            binder.bind(node);

            // there is nothing to test in the binder initially
            A.skip();
        }

    }));

    YUITest.TestRunner.add(suite);

}, '0.0.1', {requires: ['mojito-test', 'node', 'ClickLogBinderIndex']});