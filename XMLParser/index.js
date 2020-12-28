import x2js from "x2js"
var X2JS = new x2js();

function deserialize(input) {
    let { Input } = X2JS.xml2js(input)
    Object.keys(Input).map(function(key) {
        if (Array.isArray(Input[key])) {
            Input[key] = Input[key].map(x => +x)
        } else {
            Input[key] = +Input[key]
        }
    })
    return Input
}

function serialize(output) {
    let tmp = X2JS.js2xml(output)
    return tmp
}

export { deserialize, serialize }