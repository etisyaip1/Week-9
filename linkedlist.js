//LINKED LIST
d = { v: 101, next: null };
c = { v: 111, next: d };
b = { v: 321, next: c };
a = { v: 123, next: b };

//how can we visit every item in an infinite list?
function look(node) {
    console.log(node.v);
    if (node.next != null) {
        look(node.next)
    }
}

look(a);

//OTHER  DATA STRUCTURES: 
// Hierarchical(parent/child) TREE (Red/Black)
// GRAPH (no hierachy)

// SORTING IS THE MOST COMMON SET OF "ALGORITHMS" TO STUDY.