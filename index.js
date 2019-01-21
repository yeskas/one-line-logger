const serialize = require('./serializer.js');


function to_one_line(obj) {
    // PRIMITIVE TYPES:
    if (obj === undefined) {
        return obj
    }

    if (obj === null) {
        return obj
    }

    if ((typeof obj) === 'boolean') {
        return obj
    }

    if ((typeof obj) === 'number') {
        return obj
    }

    if ((typeof obj) == 'string') {
        // escape new lines
        return obj.replace(/\r?\n|\r/g, '\\n')
    }

    if ((typeof obj) == 'symbol') {
        // convert & escape new lines
        return obj.toString().replace(/\r?\n|\r/g, '\\n')
    }

    // NON-PRIMITIVE DATA TYPES: ARRAYS AND OBJECTS:

    try {
        const serialized_obj = serialize(obj)
        return JSON.stringify(serialized_obj)

    } catch (error) {
        // return the original if failed to serialize
        return obj
    }
}


function _lg(...args) {
    const str_args = args.map(obj => to_one_line(obj))
    console.log(...str_args)
}


function _err(...args) {
    const str_args = args.map(obj => to_one_line(obj))
    console.error(...str_args)
}


module.exports = {
    _lg,
    _err
}
