module.exports.extractId = extractId;

function extractId(url) {
    const [ , id ] = /(\d+)\/?$/.exec(url);
    return parseInt(id, 10);
}