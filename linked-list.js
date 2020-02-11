class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log("Item not found");
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(newItem, nextItem) {
        let currentNode = this.head;

        while (currentNode.next !== null) {
            if (currentNode.next.value == nextItem) {
                let newNode = new _Node(newItem);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                return;
            }
            currentNode = currentNode.next;
        }
        this.size++;
    }

    insertAfter(newItem, currentItem) {
        let currentNode = this.head;

        while (currentNode.value !== null) {
            if (currentNode.value == currentItem) {
                let newNode = new _Node(newItem);

                newNode.next = currentNode.next;

                currentNode.next = newNode;
                return;
            }
            currentNode = currentNode.next;
        }
        this.size++;
    }

    insertAt(newItem, i) {
        if (i > this.size) {
            return;
        }

        if (i === 0) {
            this.insertFirst(newItem);
            return;
        }

        const newNode = new _Node(newItem);
        let currentNode, previousNode;
        currentNode = this.head;
        let count = 0;
        while (count < i) {
            previousNode = currentNode;
            count++;
            currentNode = currentNode.next;
            insert;
        }

        newNode.next = currentNode;
        previousNode.next = newNode;

        this.size++;
    }
}

// ======DRILLS======
// Create a singly linked list
// & Supplemental functions
function main(arr) {
    const SLL = new LinkedList();
    arr.forEach((name) => SLL.insertLast(name));
    SLL.insertLast("Tauhida"); // Add Tauhida
    SLL.remove("Husker"); // Remove Husker
    // SLL.insertBefore("ItemToInsertBefore", "Husker");
    // SLL.insertAfter("ItemToInsertAfter", "Husker");
    // SLL.insertAt("ItemToInsertAt", 2);
    SLL.insertBefore("Athena", "Boomer"); // Add Athena before Boomer
    SLL.insertAfter("HotDog", "Helo");
    SLL.insertAt("Kat", 3);
    SLL.remove("Tauhida"); // Remove Tauhida
}
// main(["Apollo", "Boomer", "Helo", "Husker", "Starbuck"]);

// display: displays the linked list
// size: returns the size of the linked list
// isEmpty: finds if the list is empty or not (without using the size() function)
// findPrevious: finds the node before the item you are looking for
// findLast: returns the last node in the linked list

// Mystery program
// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

// function WhatDoesThisProgramDo(lst) {
//     let current = lst.head;
//     while (current !== null) {
//         let newNode = current;
//         while (newNode.next !== null) {
//             if (newNode.next.value === current.value) {
//                 newNode.next = newNode.next.next;
//             }
//             else {
//                 newNode = newNode.next;
//             }
//         }
//         current = current.next;
//     }
// }
