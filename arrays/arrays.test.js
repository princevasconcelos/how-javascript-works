// START MAP
function myMap(callbackfn, thisArg) {
  if (!callbackfn || typeof callbackfn !== "function") throw new TypeError();
  let result = [];
  for (let i = 0, length = this.length; i < length; i += 1) {
    result.push(
      thisArg
        ? callbackfn.call(thisArg, this[i], i, this)
        : callbackfn(this[i], i, this)
    );
  }
  return result;
}

if (!Array.prototype.myMap) Array.prototype.myMap = myMap;

describe("map", () => {
  test("Not passing a callback return a TypeError", function() {
    expect(() => [].myMap()).toThrow(TypeError);
  });

  test("Not passing a function as a callback return a TypeError", () => {
    expect(() => [].myMap({}).toThrow(TypeError));
    expect(() => [].myMap([]).toThrow(TypeError));
    expect(() => [].myMap(1)).toThrow(TypeError);
    expect(() => [].myMap(false).toThrow(TypeError));
    expect(() => [].myMap("").toThrow(TypeError));
  });

  test("Call the callback function for each array element and return the results value in a new array", function() {
    const original = [1, 2, 3, 4, 5];
    const expected = [2, 3, 4, 5, 6];

    function addOneCallback(a) {
      return a + 1;
    }
    const addOneArrowCallback = a => a + 1;

    expect(original.myMap(addOneCallback)).toStrictEqual(expected);
    expect(original.myMap(addOneArrowCallback)).toStrictEqual(expected);
  });

  test("Use second argument as this when its passed", () => {
    const jedi = {
      name: "yoda",
      height: "17cm",
      mass: "57kg"
    };

    const expected = ["yoda", "17cm", "57kg"];

    function getObjValuesCallback(key) {
      return this[key];
    }

    expect(Object.keys(jedi).myMap(getObjValuesCallback, jedi)).toStrictEqual(
      expected
    );
  });
});
// END MAP

// START FILTER
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function myFilter(callbackfn, thisArg) {
    if (!callbackfn || typeof callbackfn !== "function") throw new TypeError();
    let result = [];
    for (let i = 0, length = this.length; i < length; i += 1) {
      const isConditionValid = Boolean(
        thisArg
          ? callbackfn.call(thisArg, this[i], i, this)
          : callbackfn(this[i], i, this)
      );
      if (isConditionValid) result.push(this[i]);
    }
    return result;
  };
}

describe("filter", () => {
  test("Not passing a callback return a TypeError", function() {
    expect(() => [].myMap()).toThrow(TypeError);
  });

  test("Not passing a function as a callback return a TypeError", () => {
    expect(() => [].myMap({}).toThrow(TypeError));
    expect(() => [].myMap([]).toThrow(TypeError));
    expect(() => [].myMap(1)).toThrow(TypeError);
    expect(() => [].myMap(false).toThrow(TypeError));
    expect(() => [].myMap("").toThrow(TypeError));
  });

  test("Filter the array with a boolean callback function and return the results in a new array", function() {
    const original = [1, 2, 3, 4, 5];
    const expected = [3, 4, 5];

    function moreThanTwoCallback(a) {
      return a > 2;
    }
    const moreThanTwoArrowCallback = a => a > 2;

    expect(original.myFilter(moreThanTwoCallback)).toStrictEqual(expected);
    expect(original.myFilter(moreThanTwoArrowCallback)).toStrictEqual(expected);
  });

  test("Use the second argument as this if its passed", () => {});
});
