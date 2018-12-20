const serializeError = require('serialize-error');


function to_one_line(obj) {
    if (obj === null) {
        return obj
    }

    if (obj === undefined) {
        return obj
    }

    if (['boolean', 'number', 'string'].includes(typeof obj)) {
        return obj
    }

    try {
        const serialized_obj = serializeError(obj)
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
