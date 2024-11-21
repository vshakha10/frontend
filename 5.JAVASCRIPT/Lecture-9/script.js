// Set is a unique collection of records

let set = new Set();
console.log(set);

// Set Old Methods

set.add(10);
set.add(20);
set.add(30);
set.add(40);
console.log(set);

const iterator = set.values();

console.log(iterator.next().value);
console.log(iterator.next().value);

// set.clear();
// console.log(set);

set.delete(20);
console.log(set);

console.log(set.has(20));

set.forEach((value) => {
    console.log("Value " + value);
});

// Set New Methods

{
    const newSet1 = new Set([10, 45, 2, 5, 30]);
    // const newSet2 = new Set([10, 45, 2, 5, 30]);
    const newSet2 = new Set([3, 6, 5, 30, 20, 15]);

    // Difference

    console.log(newSet1.difference(newSet2));
    console.log(newSet2.difference(newSet1));

    // Intersection

    console.log(newSet1.intersection(newSet2));

    // Union

    console.log(newSet1.union(newSet2));

    // isDisjointFrom (return false when there is common element and true if there is no common element)

    console.log(newSet1.isDisjointFrom(newSet2));

    // isSubsetOf (return true if set1 all elements are present in set2 else false)

    console.log(newSet1.isSubsetOf(newSet2));

    // isSupersetOf

    console.log(newSet1.isSupersetOf(newSet2));
}