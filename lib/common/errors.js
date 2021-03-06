/*
 * Copyright 2016 Lexmark International Technology S.A.  All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var util = require('util');

function MissingArgumentException(message) {
    Error.call(this);
    this.message = "Missing Argument: " + message;
}

function PoolExhaustedException() {
    Error.call(this);
}

util.inherits(MissingArgumentException, Error);

module.exports = {
    MissingArgumentException:MissingArgumentException,
    PoolExhaustedException:PoolExhaustedException
};