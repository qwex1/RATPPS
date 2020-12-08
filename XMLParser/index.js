import xml from "xml-parse"
import jsdom from "jsdom"

function deserialize(input) {
    // return new jsdom.JSDOM(input);
    // let parser = new DOMParser();
    // return parser.parseFromString(input,"text/xml");
    return xml.parse(input);
}

function serialize(output) {
    return xml.stringify(output)
}

export { deserialize, serialize }