/**
 * Exponentiation Operator
 *  
 *  */
function exponentiationOperator(){
    var a = 5;
    var b = 2;
    var c = a**b;
    console.log(c);
    a **= a;
    if( 2 ** 3 == 8){
        console.log("2 ** 3 = 8");
    }
};
// exponentiationOperator();

/**
 * Objects have a new method called values which returns a list of values of an object 
 * v will be an array like this :- [ 'foo', 'bar', 'baz' ]
 */
function objectValuesMethod(){
    var obj = Object.create({ a: "qux", d: "qux" });
    obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
    var v = Object.values(obj);
    return Array.isArray(v) && String(v) === "foo,bar,baz";
}
// console.log(objectValuesMethod());

/**
 * Object class now has a method called Object.entries which returns a list of list of key and value
 *  e will be a structure like this [ [ 'a', 'foo' ], [ 'b', 'bar' ], [ 'c', 'baz' ] ] 
 */
function objectEntriesMethod(){
    var obj = Object.create({ a: "qux", d: "qux" });
    obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
    var e = Object.entries(obj);
    return Array.isArray(e)
    && e.length === 3
    && String(e[0]) === "a,foo"
    && String(e[1]) === "b,bar"
    && String(e[2]) === "c,baz";
}
// objectEntriesMethod();

/**
 * Object class has a getOwnPropertyDescriptor method
 * Here D will be a structure like this:- { a: { value: 1, writable: true, enumerable: true, configurable: true },
  c: 
   { value: 3,
     writable: false,
     enumerable: false,
     configurable: false },
  [Symbol(b)]: { value: 2, writable: true, enumerable: true, configurable: true } }
 *
 * All the internal properties of a javascript object can be retrieved using object.getOwnPropertyDescriptors 
 */
function getOwnPropertyDescriptor(){
    var object = {a: 1};
    var B = typeof Symbol === 'function' ? Symbol('b') : 'b';
    object[B] = 2;
    var O = Object.defineProperty(object, 'c', {value: 3});
    var D = Object.getOwnPropertyDescriptors(O);
    return D.a.value === 1 && D.a.enumerable === true && D.a.configurable === true && D.a.writable === true
    && D[B].value === 2 && D[B].enumerable === true && D[B].configurable === true && D[B].writable === true
    && D.c.value === 3 && D.c.enumerable === false && D.c.configurable === false && D.c.writable === false;
}
// getOwnPropertyDescriptor();

/**
 * String class has methods called padEnd and padStart 
 */
function stringPadding(){
    var str = "hello";
    console.log(str.padStart(10));
    console.log(str.padEnd(10));
}
//stringPadding();

/**
 * Async and await framework is here with nodejs 8
 */
function asyncAndAwait(){
    async function a(){
        console.log("I will return foo");
        return "foo";
    }
    var p = a();
    if (!(p instanceof Promise)) {
        return false;
    }
    else{
        console.log("Yes P is a promise");
    }
    p.then(function(result) {
        if (result === "foo") {
            console.log("Async and Await is working")
        }
    });
}
/**
 * Important:-  Async Methods have no property as prototypes yes async methods don't have prototypes
 */
// asyncAndAwait();
function asyncAndAwaitWithThrow(){
    async function a(){
        console.log("I will return foo");
        throw "foo";
    }
    var p = a();
    if (!(p instanceof Promise)) {
        return false;
    }
    else{
        console.log("Yes P is a promise");
    }
    p.then(function(result) {
        if (result === "foo") {
            console.log("Async and Await is working")
        }
    }).catch(err=> {
        console.log("Inside catch block error -> "+err)
    });
}
// asyncAndAwaitWithThrow();
function awaitExample(){
    (async function (){
        await Promise.resolve();
        var a1 = await new Promise(function(resolve) { setTimeout(resolve,800,"foo"); })
                            .then((x) => {console.log("Promise 1 has been resolved"); return x;});
        var a2 = await new Promise(function(resolve) { setTimeout(resolve,800,"bar"); })
                            .then((x) => {console.log("Promise 2 has been resolved"); return x;});
        if (a1 + a2 === "foobar") {
            console.log("async and await test passed");
        }
    }());
}
// awaitExample();
//asyncArrowFunctions
function asyncArrowFunction(){
    var a = async () => await Promise.resolve("foo");
    var p = a();
    if (!(p instanceof Promise)) {
        return false;
    }
    p.then(function(result) {
        if (result === "foo") {
            console.log("Async test passed");
        }
    });
}
// asyncArrowFunction();

//Async function prototype is not the same as function.prototype
function asyncPrototype(){
    var asyncFunctionProto = Object.getPrototypeOf(async function (){});
    return asyncFunctionProto !== function(){}.prototype
        && Object.getPrototypeOf(asyncFunctionProto) === Function.prototype;
}
// console.log(asyncPrototype())

/**
 * Async functions have a constructor as well
 */
function asyncConstructor(){
    var a = async function (){}.constructor("return 'foo';");
    var p = a();
    if (!(p instanceof Promise)) {
        return false;
    }
    p.then(function(result) {
        if (result === "foo") {
            console.log("the constructor returned :- " + result);
        }
    });
}
// asyncConstructor();