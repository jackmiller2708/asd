/**
 *
 * @param key
 * @param value
 * @returns {{dataType: string, value: [unknown, unknown][]}|*}
 */
function replacer(key, value) {
    const originalObject = this[key];
    if(originalObject instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(originalObject.entries()), // or with spread: value: [...originalObject]
        };
    } else {
        return value;
    }
}

/**
 *
 * @param key
 * @param value
 * @returns {Map<unknown, unknown>|*}
 */
function reviver(key, value) {
    if(typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}

/**
 *
 * @returns {any}
 * @constructor
 */
function JSONParseMap(map) {
    return JSON.parse(map, reviver);
}

/**
 *
 * @returns {string}
 * @constructor
 */
function JSONStringifyMap(map) {
    return JSON.stringify(map, replacer);
}

module.exports = {
    JSONParseMap,
    JSONStringifyMap
};
