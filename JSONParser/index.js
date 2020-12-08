function deserialize(input) {
    return JSON.parse(input)
}

function serialize(output) {
    return JSON.stringify(output)
}

export { deserialize, serialize }