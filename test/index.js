import assert from 'assert';
import { serialize as serializeJSON, deserialize as deserializeJSON, serialize } from '../JSONParser/index.js' 
import { serialize as serializeXML, deserialize as deserializeXML } from '../XMLParser/index.js' 
import { output } from '../output/index.js' 

const jsonTest = "{\"K\":10,\"Sums\":[1.01,2.02],\"Muls\":[1,4]}"
const xmlTest = "<Input><K>10</K><Muls>1</Muls><Muls>4</Muls><Sums>1.01</Sums><Sums>2.02</Sums></Input>"

const jsonExpected = "{\"SumResult\":\"30.30\",\"MulResult\":4,\"SortedInputs\":[1,1.01,2.02,4]}"
const xmlExpected = "<Output><SumResult>30.30</SumResult><MulResult>4</MulResult><SortedInputs>1</SortedInputs><SortedInputs>1.01</SortedInputs><SortedInputs>2.02</SortedInputs><SortedInputs>4</SortedInputs></Output>"

const expectedInput = {
    K: 10,
    Muls: [1, 4],
    Sums: [1.01, 2.02]
}

describe("Deserialize Json", function() {
    it("use deserialize()", function() {
        assert.deepStrictEqual(deserializeJSON(jsonTest), expectedInput);
    });
})
describe("Serialize Json", function() {
    it("use serialize()", function() {
        let input = deserializeJSON(jsonTest)
        let outputResult = output(input)
        let result = serializeJSON(outputResult)
        assert.deepStrictEqual(result, jsonExpected);
    });
})

describe("Deserialize XML", function() {
    it("use deserialize()", function() {
        assert.deepStrictEqual(deserializeXML(xmlTest), expectedInput);
    });
})
describe("Serialize XML", function() {
    it("use serialize()", function() {
        let input = deserializeXML(xmlTest)
        let outputResult = output(input)
        let result = serializeXML({ 'Output': outputResult })
        assert.deepStrictEqual(result, xmlExpected);
    });
})