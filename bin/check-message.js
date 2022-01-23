#!/usr/bin/env node

/**
 * @fileoverview
 * Check whether the release message conforms to the parser specification
 *
 * use --msg to input the message, e.g: --msg=`XXX`
 */

const parseMessage = require('../index');

const SUPPORTED_LANGUAGE = ['en', 'zh-cn'];

const parseArgs = () => {
    const scriptArgs = process.argv.slice(2);

    let msg;

    for (const arg of scriptArgs) {
        const msgSplit = arg.split(/--msg(\s+|=)/);
        if (msgSplit[1] === '=') {
            msg = msgSplit[2];
        }
    }
    return {msg};
};

const {msg} = parseArgs();

if (msg) {
    const messageObj = parseMessage(msg);;

    SUPPORTED_LANGUAGE.forEach(language => {
        if (!messageObj[`${language}`]) {
            throw new Error(`Missing ${language} message`);
        }

        if (Object.keys(messageObj[`${language}`]).length === 0) {
            throw new Error(`${language} message is empty`);
        }

        Object.entries(messageObj[`${language}`]).map(([key, value]) => {
            if (value.length === 0) {
                console.warn(`\x1B[33mWarning: ${language} ${key} message has no valid data\x1B[0m`);
            }
        });
    });

    let subTileLength;
    Object.values(messageObj).forEach(value => {
        if (!subTileLength) {
            subTileLength = Object.values(value).length;
        } else {
            if (subTileLength !== Object.values(value).length) {
                throw new Error('Inconsistent number of subtitles');
            }
        }
    })

    // TODO: compare the amount of content in subheadings.

    console.log('Passed');
    console.log('Message:', messageObj);

} else {
    throw new Error('No message provided');
}
