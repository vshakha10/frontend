/* null , Undefined and NaN */

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);
// console.log(typeof (`12` + 12));
// console.log(`12` * 12);
// console.log(`mark` + 12);
// console.log(`mark` * 12);
// console.log(null == undefined);
// console.log(typeof null == typeof undefined);
// console.log(null === undefined);
// console.log(NaN == undefined);
// console.log(NaN === undefined);
// console.log(typeof NaN === typeof undefined);
// console.log(NaN == null);
// console.log(typeof NaN === typeof null);
{
let array = ['1', , '2']

console.log(array);

/* Javascript Map Object Method */

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value

// const map = new map()

// console.log(map);


// The set() method of Map instances adds or updates an entry in this map with a specified key and a value.

map.set('a', 1)
map.set('b', 2)
map.set('b', 10)

console.log(map);


// The get() method of Map instances returns a specified element from this map. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.

    // console.log(map.get('b'));
    // console.log(map.get('a'));
    // console.log(map.get('c'));
    
    // The has() method of Map instances returns a boolean indicating whether an element with the specified key exists in this map or not.


    // console.log(map.has('a'));
    // console.log(map.has('c'));
    
    // The entries() method of Map instances returns a new map iterator object that contains the [key, value] pairs for each element in this map in insertion order.

    // let iterator = map.entries()

    // console.log(iterator.next().value);
    // console.log(iterator.next().value);
    // console.log(iterator.next().value);
    
    // The clear() method of Map instances removes all elements from this map.

    // map.clear()

    // The delete() method of Map instances removes the specified element from this map by key.

    // map.delete('a')
    
    // console.log(map);

    // The keys() method of Map instances returns a new map iterator object that contains the keys for each element in this map in insertion order.
    
    // let keys = map.keys()

    // console.log(keys.next().value);
    // console.log(keys.next().value);
    
}

{
    // let map = new Map([['num1' , 1] , ['num2' , 2] , ['num3' , 3] , ['num4' , 4]]).forEach(listValues)   
    
    // function listValues(value , key , map){
    //     console.log(`map.get('${key}') = ${value}`);
    // }
}

