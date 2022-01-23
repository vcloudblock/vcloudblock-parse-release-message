const parseMessage = (message) => {
    const messageObj = {};

    const mutiLanguageMessage = message.split('##').filter((item) => item !== '');
    mutiLanguageMessage.forEach(element => {
        const structuredInformation = element.split('- ');
        const tile = structuredInformation[0].replace(/\r\n/g, '');
        const infos = structuredInformation.slice(1);

        const language = tile.slice(tile.indexOf('(') + 1, tile.indexOf(')'));

        messageObj[`${language}`] = {};

        infos.forEach(info => {
            const details = info.split('    ');
            const subTitle = details[0].replace(/(?:\r\n|\*)/g, '');
            const descriptions = details.slice(1).map(item => item.replace(/\r\n/g, ''));
            messageObj[`${language}`][`${subTitle}`] = descriptions;
        });
    });

    return messageObj;
}

module.exports = parseMessage;
