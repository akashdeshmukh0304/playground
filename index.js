const nemo = ["nemo"];
const { performance } = require("perf_hooks");
const { RSA_NO_PADDING, UV_FS_O_FILEMAP } = require("constants");
const { toASCII } = require("punycode");
const { relative } = require("path");
const { realpathSync } = require("fs");
const { cpus } = require("os");
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(100000).fill("nemo")

function findingNemo(array) {
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("FOUND NEMO")
    }
  }
  let t1 = performance.now()
  console.log("Call to find nemo took " + (t1 - t0) + " milliseconds")
}

// findingNemo(large)

// Log all pairs of an array
const boxes = [1, 2, 3, 4, 5, 6];
formPairs(boxes)
function formPairs(boxes) {
  let pair = []
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      pair.push([boxes[i], boxes[j]])
    }
  }
  // console.log("pair =>", pair)
}

const array1 = ['a', 'b', 'c', 'd', 'e'];
const array2 = ['u', 'v', 'w', 'x', 'y'];

function findMatchingItems(array1, array2) {

  let newObj = {};
  for (let i = 0; i < array1.length; i++) {
    newObj[array1[i]] = true;
  }

  for (let j = 0; j < array2.length; j++) {
    if (newObj[array2[j]] === true) {
      return true;
    }
  }
  return false;
}

// console.log(findMatchingItems(array1, array2))

/**
 * Array implementation
 */
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--;
  }
}

// const newArray = new MyArray()
// newArray.push('hi')
// newArray.push('you')
// newArray.push('!')
// newArray.delete(2)
// newArray.push('are')
// newArray.push('nice')
// console.log(newArray)

function stringReverse(string) {
  const strArr = string.split(' ')
  let revArr = []
  for (let i = strArr.length - 1; i >= 0; i--) {
    revArr.push(strArr[i]);
  }
  const revString = revArr.join(" ")
  console.log(revString)
}

function strrev(string) {

  let end = 0;
  let revString = [];

  let stringLen = string.length;
  end = stringLen - 1;
  for (let i = 0; i < stringLen; i++) {
    revString.push(string[end])
    end--;
  }
  console.log(revString.join(""));
}
// strrev("My name is Akash")

function strrevv2(string) {

  const strArr = string.split("");
  const revArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    revArr.push(strArr[i]);
  }
  console.log(revArr.join(""));
}
// strrevv2("My name is Akash")

function strrevv3(string) {

  let n = string.length;
  for (let i = 0; i < string.length - 1; i++) {
    string[i] ^= string[n - i - 1];
    string[n - i - 1] ^= string[i];
    string[i] ^= string[n - i - 1]
  }

  console.log(string);
}
// strrevv3("My name is Akash")

function sockMerchant(n, ar) {

  let sockObj = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (sockObj[ar[i]]) {
      sockObj[ar[i]] = sockObj[ar[i]] + 1;
    } else {
      sockObj[ar[i]] = 1;
    }
  }
  console.log(sockObj)
  for (let item in sockObj) {
    if (Math.floor(sockObj[item] / 2) > 0) {
      count += Math.floor(sockObj[item] / 2);
    }
  }
  console.log(count);
}

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])

function repeatedString(s, n) {

  if (s === "" || n === "" || s === null || n === null) {
    return 0
  }

  const strArray = s.split("");
  const strLength = s.length;

  if (strLength === 1 && s !== 'a') {
    return 0;
  }

  if (strLength === 1) {
    return n;
  }

  let resultObj = {};
  let aCount = 0;
  let iterator;
  for (let i = 0; i < n; i++) {
    if (strArray[i] === undefined) {
      if ((i) % strLength === 0) {
        iterator = 0;
      } else {
        iterator++;
      }
      if (strArray[iterator] === 'a') {
        resultObj[strArray[iterator]] = aCount++;
      }
    } else {
      if (strArray[i] === 'a') {
        resultObj[strArray[i]] = aCount++;
      }
    }
  }
  console.log("aCount => ", aCount)

}
// console.log(repeatedString('abudjlitpopjhipmwgvggazhuzvcmzhulowmveqyktlakdufzcefrxufssqdslyfuiahtzjjdeaxqeiarcjpponoclynbtraaawrpscac', 872514961806))

function mergeSortedArrays(arr1, arr2) {

  if (arr1.length === 0 || arr2.length === 0 || arr1 === null || arr2 === null) {
    return "Wrong input"
  }
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  }
  arr1.sort((a, b) => a - b)
  console.log(arr1)
}

function mergeSortedArraysv2(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1, j = 1;

  if (array1.length <= 0) {
    return array2;
  }
  if (array2.length <= 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i]
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j]
      j++;
    }
  }
  console.log(mergedArray)
}

// mergeSortedArraysv2([0, 3, 4, 31], [4, 6, 30, 54, 66])

const maxSubArray = nums => {

  if (nums.length <= 0) {
    return 0
  }
  let i = 1;
  let sum = nums[0]
  while (i < nums.length) {

    if (nums[i] + sum >= sum) {
      console.log("here")
      sum += nums[i];
      i++;
    } else {
      console.log("thete")
      sum = (nums[i] > sum) ? nums[i] : sum;
      i++;
    }
  }
  console.log(sum)
}

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

const moveZeroes = nums => {

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {

      for (let j = i; j < n; j++) {
        nums[j] = nums[j + 1];
      }
      nums[n - 1] = 0
    }
  }
  console.log("nums =>", nums)

};
// moveZeroes([0,1,0,3,12, 0, 0, 0, 0, 0, 88 ])

/**
 * New method map can be used as an alternative to objects
 */
let kvArray = [['key1', 'value1'], ['key2', 'value2']];
const myMap = new Map(kvArray);
let exam = { "science": true }
myMap.set(exam, true)
// console.log("myMap =>", myMap.get(exam))


/**
 * Hashtable implementation
 */
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const dataLocation = this.data[address];
    if (dataLocation.length) {
      for (let i = 0; i < dataLocation.length; i++) {
        if (dataLocation[i][0] === key) {
          return dataLocation[i][1];
        }
      }
    }
    return 'not found'
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray;
  }

}

const myHashTable = new HashTable(2);
// myHashTable.set('grapes', 10000)
// myHashTable.set('apples', 54)
// myHashTable.set('oranges', 2)
// console.log(myHashTable.get('oranges'))

/**
 * First recurring character
 * @param {Array} array
 */
function firstRecurringCharacter(array) {

  if (array === undefined || array.length <= 0) {
    return undefined;
  }

  let visitedSet = new Set();
  for (let i = 0; i < array.length; i++) {
    if (visitedSet.has(array[i])) {
      return array[i];
    }
    visitedSet.add(array[i])
  }
  return undefined;
}
// console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))

let obj1 = { a: true }
let obj2 = obj1;
obj1.a = 'booya';
delete obj1;
obj2 = 'hello';
// console.log("obj2 =>", obj2)

/**
 * Linked list
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  /**
   * My solution
   * @param {*} index
   * @param {*} value
   */
  insertv2(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    let tempNode = this.head;
    let i = 0;
    while (i < index) {
      if (i === index - 1) {
        const nextNodes = tempNode.next;
        newNode.next = nextNodes;
        tempNode.next = newNode;
        break;
      }
      tempNode = tempNode.next;
      i++;
    }
    this.length++;
    return this.printList();
  }

  /**
   * Andrei's solution
   * @param {} index
   * @param {*} value
   */
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList()
    }

    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList()
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // check params
    if (index === 0) {
      this.head = this.head.next;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }

  reverse() {

    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList()
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(23)
// myLinkedList.insert(24, 22)
// myLinkedList.remove(4)
// myLinkedList.reverse()
// console.log(myLinkedList.printList())

/**
 * Doubly linked list
 */
class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new DoublyNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new DoublyNode(value);
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  /**
   * Andrei's solution
   * @param {} index
   * @param {*} value
   */
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList()
    }

    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = new DoublyNode(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // check params
    if (index === 0) {
      this.head = this.head.next;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    const follower = unwantedNode.next;
    follower.prev = leader;
    this.length--;
  }
}

// const myLinkedList = new DoublyLinkedList(10);
// myLinkedList.append(5)
// myLinkedList.append(6)
// myLinkedList.append(7)
// myLinkedList.prepend(16)
// // myLinkedList.insert(0, 99)
// // myLinkedList.insert(24, 22)
// myLinkedList.remove(1)
// console.log("myLinkedList =>", myLinkedList)
// console.log(myLinkedList.printList())

/**
 * Implementation of stacks using linked lists
 */
class StackLL {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const stack = new Node(value);
    if (this.length === 0) {
      this.top = stack;
      this.bottom = stack;
    } else {
      const holdingPointer = this.top;
      this.top = stack;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      this.top = null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    if (this.top = null && this.bottom === null) {
      return true;
    }
    return false;
  }
}

// const myStack = new StackLL()
// myStack.push("google");
// myStack.push("udemy");
// myStack.push("discord");
// myStack.push("leetcode");
// console.log("myStack.peek() =>", myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log("myStack =>", myStack)

/**
 * Implementation of stack using array
 */
class Stack {
  constructor() {
    this.array = []
  }

  peek() {
    return this.array[this.array.length - 1]
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop()
    return this;
  }
}

// const myStack = new Stack();
// myStack.push("google")
// myStack.push("udemy")
// myStack.push("discord")
// console.log("peek =>", myStack.peek())


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const queue = new Node(value);
    if (!this.first) {
      this.first = queue;
      this.last = this.first;
      this.length++;
      return this;
    }
    this.last.next = queue;
    this.last = queue;
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length <= 0) {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

  isEmpty() {

  }
}

// const myQueue = new Queue();
// myQueue.enqueue("google");
// myQueue.enqueue("udemy");
// myQueue.enqueue("discord");
// console.log(myQueue.peek())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())

class QueuesUsingStack {

  push() {

  }

  pop() {

  }

  peek() {

  }

  isEmpty() {

  }
}

// const myQueueStack = new QueuesUsingStack();



/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.queue = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (x) {
    this.queue.push(x)
  }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const firstElement = this.queue[0]
  if (this.queue.length <= 1) {
    this.queue.pop();
    return firstElement;
  }

  for (let i = 0; i < this.queue.length - 1; i++) {
    this.queue[i] = this.queue[i + 1]
  }
  this.queue.pop()
  return firstElement;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.queue[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.queue.length <= 0) {
    return true;
  }
  return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// var obj = new MyQueue()
// obj.push(1)
// obj.push(2)
// obj.peek()
// obj.pop()
// console.log("obj =>", obj)
// obj.pop()
// console.log(obj.empty())
// console.log("obj =>", obj)

class BinaryNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {

    const newNode = new BinaryNode(value);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    }
    let tree = this.root;
    while (tree.value) {
      if (tree.value > value && tree.left === null) {
        tree.left = newNode;
        break;
      } else if (tree.value > value && tree.left !== null) {
        tree = tree.left
      } else if (tree.value < value && tree.right === null) {
        tree.right = newNode;
        break;
      } else if (tree.value < value && tree.right !== null) {
        tree = tree.right;
      }
    }
    return this.root;
  }

  lookup(value) {

    if (value === null || value === "" || value === undefined)
      return "Please enter a valid value";

    let tree = this.root;
    if (tree.left === value || tree.right === value) {
      return "found"
    }
    while (tree.value) {
      if (tree.value > value && tree.left !== null) {
        tree = tree.left
      } else if (tree.value < value && tree.right !== null) {
        tree = tree.right
      } else if (tree.value < value && tree.right === null) {
        return "not found";
      } else if (tree.value > value && tree.left === null) {
        return "not found";
      } else if (tree.value === value) {
        return "found";
      }
    }
  }

  delete(value) {
    if (value === null || value === "" || value === undefined)
      return "Please enter a valid value";

    let currentNode = this.root;
    let deleteNode = null;
    let pre_successor = null;
    let replaceNode = null;
    while (currentNode) {
      if (currentNode.value > value) {
        pre_successor = currentNode;
        // check for the end condition
        if (deleteNode && currentNode.left === null) {
          deleteNode = currentNode.value;
          replaceNode.left = replaceNode.left ? replaceNode.left : null;
          return this;
        }
        currentNode = currentNode.left

      } else if (currentNode.value < value) {
        pre_successor = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // check for both empty cases
        if (currentNode.left === null && currentNode.right === null) {
          if (pre_successor.left.value === value) {
            pre_successor.left = null;
            return this;
          }
          if (pre_successor.right.value === value) {
            pre_successor.right = null;
            return this;
          }
        }
        // check for right node if null
        if (currentNode.right === null) {
          currentNode.value = currentNode.left
          currentNode.left = currentNode.left.left ? currentNode.left.left : null;
          return this;
        } else {
          deleteNode = currentNode;
          replaceNode = currentNode.right;
          if (replaceNode.left === null) {
            currentNode.value = replaceNode.value;
            currentNode.right = null;
            return currentNode;
          }
          currentNode = replaceNode.left;
        }
      }
    }
  }

  breadthFirstSearch() {

    let currentNode = this.root;
    const list = [];
    const queue = [];
    queue.push(currentNode);
    while (currentNode.value !== null) {


    }
    return queue;

  }

  breadthFirstSearchR(queue, list) {

  }

  DFSInorder() {
    return traverseInOrder(this.root, [])
  }

  DFSPreOrder() {
    return traversePreOrder(this.root, [])
  }

  DFSPostOrder() {
    return traversePostOrder(this.root, [])
  }

  //      9
  //   4     20
  // 1  6  15  170

}

function traverseInOrder(node, list) {

  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list
}

function traversePreOrder(node, list) {

  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list
}

function traversePostOrder(node, list) {

  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(tree.breadthFirstSearch())
// console.log(tree.breadthFirstSearchR([tree.root], []))
// console.log(tree.DFSPostOrder())


function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// console.log(JSON.stringify(traverse(tree.root), null, 4))

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {}
  }

  addVertex(node) {
    if (!node) {
      return false
    }
    this.adjacentList[node] = null;
    this.numberOfNodes++;
    return this.adjacentList;
  }

  addEdge(node1, node2) {
    if (node1 === null || node2 === null)
      return false;

    // add list for node 1
    if (this.adjacentList[node1]) {
      this.adjacentList[node1].push(node2);
    } else {
      this.adjacentList[node1] = [node2]
    }
    // add list for node 2
    if (this.adjacentList[node2]) {
      this.adjacentList[node2].push(node1);
    } else {
      this.adjacentList[node2] = [node1]
    }
    return this.adjacentList;
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "--> " + connections)
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
// myGraph.showConnections();

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2
  }
  return number * findFactorialRecursive(number - 1);
}

// console.log(findFactorialRecursive(5))

function findFactorialIterative(number) {

  let answer = 1;
  if (number === 2) {
    return number;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  // for (let i = number; i > 0; i--) {
  //     answer = answer * (i);
  // }
  return answer
}
// console.log("findFactorialRecursive(5) =>", findFactorialRecursive(5))

function fibonacciIterative(n) {

  const fibonacciArray = [0, 1];
  if (n < 2) {
    return fibonacciArray[n]
  }
  for (let i = 2; i <= n; i++) {
    const current = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    fibonacciArray.push(current);
  }
  return fibonacciArray[n];
}

function fibonacciRecursiveNotPerforming(n) {
  if (n <= 1) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursiveNotPerforming(5))

function reverseStringRecursive(string) {

  const stringArr = string.split("");
  if (stringArr.length < 1) {
    return string;
  }
  const newStr = stringArr[stringArr.length - 1]
  stringArr.pop()
  const newArray = []
  newArray.push(newStr);
  string = stringArr.join("")
  const newString = newArray.join("")
  return newString + reverseStringRecursive(string)
}

function strrev(string) {

  if (string === "") {
    return "";
  }
  return strrev(string.substr(1)) + string.charAt(0)
}

// console.log(strrev("My name is Akash"))
// console.log(strrev("You're welcome"))

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

  if (array.length <= 0) {
    return [];
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        if (array[i] !== array[j]) {
          array[i] ^= array[j]
          array[j] ^= array[i]
          array[i] ^= array[j]
        }
      }
    }
  }
  return array
}

// console.log(bubbleSort(numbers))


function selectionSort(array) {

  if (array.length <= 0) {
    return [];
  }
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  console.log(array)
}

// selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);


function insertionSort(array) {

  for (let i = 1; i < array.length; i++) { //We don't have to do anthing with the 1st element so skip it
    let j = i - 1; //fetch the previous element
    let currentElement = array[i]; //fetch the current one
    while (j >= 0) {
      if (array[j] > currentElement) { //check if the previous one is greater than the current
        if (array[j + 1] !== array[j]) { //check if the elements are different here
          // swap the numbers here
          // while we are saving the reference for i for comparison we need to perform operations on j
          array[j + 1] ^= array[j];
          array[j] ^= array[j + 1];
          array[j + 1] ^= array[j];
        }
      }
      j--;
    }
  }
  return array;
}

// console.log(insertionSort([99, 283, 6, 2, -1, 5, 63, 87, 4, 0]))

/**
 * Insertion sort Andrei's solution
 * @param {*} array
 */
function insertionSortv2(array) {
  const length = array.length;
  if (array[i] < array[0]) {
    array.unshift(array.splice(i, 1)[0])
  } else {
    for (let j = 1; j < i; j++) {
      if (array[i] > array[j - 1] && array[i] < array[j]) {
        array.splice(j, 0, array.splice(i, 1)[0])
      }
    }
  }
}

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  // console.log('left:', left);

  console.log("left =>>>>>>>>>>>>>>>>>>>>>>>>", left)
  console.log("right =>>>>>>>>>>>>>>>>>>>>>>>", right)
  // console.log("mergeSort(left) =>", mergeSort(left))
  // console.log("mergeSort(right) =>", mergeSort(right))
  // console.log("merge => ", merge(
  //     mergeSort(left),
  //     mergeSort(right)
  // ))

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // console.group(left, right)
  while (leftIndex < left.length && rightIndex < right.length) {
    console.log("left[leftIndex] =>", left[leftIndex])
    console.log("right[rightIndex] =>", right[rightIndex])
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log("result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); =>", result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)))
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// console.log(mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))

const qsArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function partition(array, left, right) {
  const pivot = array[left];
  while (true) {
    if (array[left] > array[right]) {
      let temp = array[right]
      array[right] = array[left];
      array[left] = temp;
    }
    if (array[left] === pivot && array[right] === pivot) {
      break;
    } else if (array[left] === pivot) {
      right--;
    } else {
      left++;
    }
  }
  return left;
}

function quickSort(array, left, right) {

  if (left < right) {

    const pi = partition(array, left, right);

    quickSort(array, left, pi - 1);
    quickSort(array, pi + 1, right)
  }
}

// quickSort(qsArray, 0, qsArray.length-1)
// console.log("qsArray =>", qsArray)

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  if (apples.length <= 0 || oranges.length <= 0) {
    return;
  }

  let appleCounter = 0
  for (let i = 0; i < apples.length; i++) {
    const distance = a + apples[i];
    if (distance >= s && distance <= t) {
      appleCounter++;
    }
  }

  let orangeCounter = 0
  for (let i = 0; i < oranges.length; i++) {
    const distance = b + oranges[i];
    if (distance >= s && distance <= t) {
      orangeCounter++;
    }
  }
  console.log(appleCounter);
  console.log(orangeCounter);
}
// countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6])


function breakingRecords(scores) {

  if (scores.length <= 0) {
    console.log(0, 0);
    return;
  }

  let highest = scores[0];
  let lowest = scores[0];
  let highestCount = 0;
  let lowestCount = 0;
  for (let i = 1; i < scores.length; i++) {
    if (highest < scores[i]) {
      highest = scores[i];
      highestCount++;
    }
    if (lowest > scores[i]) {
      console.log(lowest, scores[i])
      lowest = scores[i];
      lowestCount++
    }
  }
  console.log(highestCount, lowestCount)

}
// breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])


// Complete the repeatedString function below.
function repeatedString(s, n) {

  if (s === "" || n === "" || s === null || n === null) {
    console.log(0)
    return;
  }

  if (s === "a") {
    console.log(n);
    return;
  }
  const stringLength = s.length;
  let count = 0;
  for (let i = 0; i < stringLength; i++) {
    const element = s[i];
    if (element === "a") {
      count++;
    }
  }

  count = count * (n / stringLength);

  if (n % stringLength !== 0) {
    const remainder = n % stringLength;
    for (let i = 0; i < remainder; i++) {
      if (s[i] === "a") {
        count++;
      }
    }
  }
  console.log(count);
}

// repeatedString('a', 1000)

function birthday(s, d, m) {

  if (s.length <= 0) {
    return 0;
  }
  if (m === 0 || s === 0) {
    return 0;
  }
  if (m > s.length) {
    return 0;
  }
  let counter = 0;
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    total += s[i];
    if (i >= m - 1) {
      if (total === d) {
        counter++;
      }
      total -= s[i + 1 - m];
    }

  }
  return counter;
}
// console.log("birthday =>", birthday([2,2,1,3,2], 8, 4))

//#1 - Sort 10 schools around your house by distance: Insertion Sort => right

//#2 - eBay sorts listings by the current Bid amount:Selection sort => wrong => Radix OR Counting

//#3 - Sport scores on ESPN: Radix+Countig Sort => wrong => Quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data: Quick sort => wromg => merge sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews: Insertion sort =>right

//#6 - Temperature Records for the past 50 years in Canada: Merge sort => wrong => quick sort

//#7 - Large user name database needs to be sorted. Data is very random.: Merge sort => right

//#8 - You want to teach sorting for the first time: Bubble sort

const rArray = [1, 2, 3, 4, 5, 6, 7]
const rotateArray = (rArray, k) => {

  let pivot = rArray.length - k;
  let i = 0
  while (i < rArray.length) {
    if (i === k) {
      pivot = rArray.length - k;
    } else {
      swap(rArray, i, pivot);
      pivot++;
    }
    console.log("rArray =>", rArray)
    i++;
  }
}

function swap(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

// rotateArray(rArray, 2)


//If you know a solution is not far from the root of the tree: BFS => right

//If the tree is very deep and solutions are rare: DFS =>wrong =>BFS

//If the tree is very wide: BFS => wrong: DFS

//If solutions are frequent but located deep in the tree:BFS => wrong => BFS

//Determining whether a path exists between two nodes: DFS

//Finding the shortest path: BFS

const divisibleSumPairs = (arr, n, k) => {

  if (k === 0) {
    return 0;
  }
  if (n <= 0) {
    return 0;
  }
  if (n === 2) {
    if ((arr[0] + arr[1]) % k === 0) {
      return 1
    }
    return 0
  }
  let m = {}
  for (let i = 0; i < n; i++) {
    arr >> arr[i];
    m[arr[i] % k]++;
  }

  console.log("counter =>", m)
}

// const divisibleSumPairsRec = (arr, n, k) => {

//     function DSumPairRec() {}
// }

// divisibleSumPairs([1,2,3,4,5,6], 6, 5)

const getClosestNumbers = (array1, array2, target) => {

  const m = array1.length;
  const n = array2.length;
  const arraySet = new Set();

  for (let i = 0; i < m; i++) {
    const element = array1[i];
    arraySet.add(element);
  }

  for (let i = 0; i < m; i++) {
    const element = array2[i];
    const diff = target - element;

    if (arraySet.has(diff + 1) && arraySet.has(diff - 1)) {
      console.log(diff + 1, element);
      console.log(diff - 1, element);
    } else if (arraySet.has(diff + 1)) {
      console.log(diff + 1, element);
    } else if (arraySet.has(diff - 1)) {
      console.log(diff - 1, element);
    }
  }

}
// getClosestNumbers([-1,3,8,2,9,5, 5], [4,1,2,10,5,20, 20], 24)

const getClosestNumbersv2 = (array1, array2, target) => {

  array1 = array1.sort((a, b) => a - b);
  array2 = array2.sort((a, b) => a - b);

  let j = array1.length - 1;

  for (let i = 0; i < array2.length; i++) {
    const item1 = array1[j];
    const item2 = array2[i]
    if (item1 + item2 === target) {
      console.log(item1, item2);
    } else if (item1 + item2 === target + 1) {
      console.log(item1, item2); j--;
    } else if (item1 + item2 === target - 1) {
      console.log(item1, item2);
    } else if (item1 + item2 > target + 1) {
      j--;
    }
  }
}

// getClosestNumbersv2([-1, 3, 8, 2, 9, 5], [4, 1, 2, 10, 5, 20], 24)

const getWays = (s, d, m) => {

  const n = s.length;
  let i = 0, counter = 0, addCounter = 0, result = 0;

  while (i < n) {
    const element = s[i];
    console.log("i =>", i)
    if (m === 1) {
      if (element === d) {
        counter++;
        i++;
      }
    } else {
      if (addCounter < m) {
        result += element;
        if (result === d && addCounter === m - 1) {
          counter++;
          result = 0;
          addCounter = 0;
          if (i === n - 1) {
            break;
          } else {
            i = (m === 2) ? i : i - m + 1;
          }
        } else if (result !== d && addCounter === m - 1) {
          result = 0;
          addCounter = 0;
          if (i === n - 1) {
            break;
          } else {
            i = (m === 2) ? i : i - m + 1;
          }
        } else {
          i++;
          addCounter++;
        }
      }
    }
  }
  console.log("counter =>", counter)
}

// getWays([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)


const isValidBST = root => {

  if (root === null || root === undefined) {
    return true
  }

  if (root.val === null) {
    return true
  }

  const rootVal = root.val;
  let currentNode = root;
  let queue = []

  queue.push(currentNode);
  while (queue.length > 0) {
    currentNode = queue.shift();
    if (currentNode.left) {
      if ((currentNode.val <= currentNode.left.val) || (currentNode.val !== rootVal && currentNode.val >= rootVal && currentNode.left.val <= rootVal)) {
        console.log(currentNode.val, rootVal, currentNode.left.val)
        return false
      }
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      if ((currentNode.val >= currentNode.right.val) || (currentNode.val !== rootVal && currentNode.val <= rootVal && currentNode.right.val >= rootVal)) {
        return false
      }
      queue.push(currentNode.right)
    }
  }
  return true;

};

// [10,5,15,null,null,6,20]
const treeS = {
  val: 10,
  left: { val: 5, left: null, right: null },
  right: {
    val: 15,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 20,
      left: null,
      right: null
    }
  }
  // left: { val: 3, left: null, right: null },
  // right: { val: 6, left: null, right: null },
  // right:  {
  //   val: 10,
  //   left: { val: 9, left: null, right: null },
  //   right:  { val: 15, left: null, right: null }
  // }
}

//   console.log(isValidBST(treeS))


function memoizedAddTo80() {
  const cache = {}
  return function (n) {
    if (n in cache) {
      console.log("CREATE")
      return cache[n];
    } else {
      cache[n] = n + 80;
      return cache[n]
    }
  }
}
// const memoize = memoizedAddTo80();
// console.log(memoize(5))
// console.log(memoize(6))

let calculations = 0;
function fibonacciRecursivePerforming() {
  const cache = {}
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n]
      }
    }
  }

}

// const fibSeq = fibonacciRecursivePerforming();
// console.log(fibSeq(241))
// console.log("calculatons =>", calculations)

function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj12 = new Animal(1, 2);
const obj22 = new Animal(3, 4);

obj12.a = 30;
obj12.b = 100;
obj22.b = 30;
obj22.a = 100;

delete obj12.x

//   console.log("obj12 =>", obj12)
//   console.log("obj22 =>", obj22)

/**
 * Find sets of numbers that add to a given number
 */
function countSets(arr, total) {
  const cache = {}
  key = 1;
  return recCountSets(arr, total, arr.length - 1, key)
}

function recCountSets(arr, total, i, key) {

  console.log("arr, total, i =>", arr, total, i, key)
  if (total === 0)
    return 1;
  else if (total < 0)
    return 0;
  else if (i < 0)
    return 0;
  else if (total < arr[i])
    return recCountSets(arr, total, i - 1, key);
  else
    return recCountSets(arr, total - arr[i], i - 1, key) + recCountSets(arr, total, i - 1, key);
}

/**
 * Dynanic programming approach
 */

function countSetsDP(arr, total) {
  return recCountSetsDP(arr, total, arr.length - 1)
}

function recCountSetsDP(arr, total, i) {
  const cache = {}
  let toReturn;

  const test = newRec(arr, total, i);
  function newRec(arr, total, i) {
    const key = `${total}:${i}`
    if (cache[key]) {
      return cache[key];
    }
    if (total === 0)
      return 1;
    else if (total < 0)
      return 0;
    else if (i < 0)
      return 0;
    else if (total < arr[i])
      toReturn = newRec(arr, total, i - 1);
    else
      toReturn = newRec(arr, total - arr[i], i - 1) + newRec(arr, total, i - 1);

    cache[key] = toReturn;
    return toReturn;
  }
  return test
}

// console.log("countSets =>", countSets([6, 4, 2, 10], 16))
// console.log("countSetsDP =>", countSetsDP([6, 4, 2, 10, 5], 16))


var addTwoNumbers = function (l1, l2) {

  if (l1 === null || l2 === null) {
    return {
      val: null,
      next: null
    }
  }

  if (l1.val === null && l2.val === null) {
    return {
      val: null,
      next: null
    }
  }
  if (!l1.val && !l2.next) {
    return {
      val: l2.val,
      next: null
    }
  }
  if (!l2.val && !l1.next) {
    return {
      val: l1.val,
      next: null
    }
  }
  const l1Arr = [];
  const l2Arr = [];
  while (l1 && (l1.val === 0 || l1.val)) {
    l1Arr.push(l1.val);
    l1 = l1.next;
  }
  while (l2 && (l2.val === 0 || l2.val)) {
    l2Arr.push(l2.val);
    l2 = l2.next;
  }

  const num1 = l1Arr.reverse().join("");
  const num2 = l2Arr.reverse().join("");
  console.log("num1 =>", num1)
  console.log("num2 =>", num2)
  let total = BigInt(num1) + BigInt(num2);
  console.log("total =>", total)
  total = String(total).split("").reverse();

  console.log("total ->", total)

  if (total.length === 1) {
    return {
      val: total[0],
      next: null
    }
  }

  const LinkedList = {}
  let currentNode = LinkedList;
  for (let i = 0; i < total.length - 1; i++) {
    currentNode.val = total[i];
    currentNode.next = {
      val: total[i + 1],
      next: null
    }
    currentNode = currentNode.next;
  }

  return LinkedList;
};


function createLinkedlistFromArray(array) {

  if (array.length === 1) {
    return {
      val: array[0],
      next: null
    }
  }

  const LinkedList = {}
  let currentNode = LinkedList;
  for (let i = 0; i < array.length - 1; i++) {
    currentNode.val = array[i];
    currentNode.next = {
      val: array[i + 1],
      next: null
    }
    currentNode = currentNode.next;
  }

  return LinkedList;
}
// const l1 = {
//     val: 2,
//     next: { val: 4, next: { val: 3, next: null } }
//   }
// const l2 = {
//     val: 5,
//     next: { val: 6, next: { val: 4, next: null } }
// }

// const l1 = createLinkedlistFromArray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
// const l2 = createLinkedlistFromArray([5,6,4])
// console.log(addTwoNumbers(l1, l2))

const recursiveFact = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * recursiveFact(n - 1)
}

const recFibonacci = (n) => {
  if (n === 0 || n === 1)
    return 1;

  return recFibonacci(n - 1) + recFibonacci(n - 2);
}

// console.log(recFibonacci(5))


const f = n => {
  if (n === 0) return;
  f(n - 1)
  console.log("n =>", n)
}

// f(5)

const divisibleSumPairsRec = (arr, n, k) => {

  const cache = {};
  let counter = 0;

  function calculateSum(i, j, arr) {
    if (i === n) {
      return 0;
    } else if (j === n) {
      return calculateSum(i + 1, i + 2, arr)
    } else {

      let result
      if (cache[arr[i] + arr[j]]) {
        result = cache[arr[i] + arr[j]]
      } else {
        cache[arr[i] + arr[j]] = (arr[i] + arr[j]) % k;
        result = cache[arr[i] + arr[j]];
      }

      if (result === 0) {
        counter++;
      }
      return calculateSum(i, j + 1, arr);
    }
  }
  calculateSum(0, 1, arr)
  return counter;
}

// console.time("time calculaed")
// console.log("divisibleSumPairsRec =>", divisibleSumPairsRec([1,2,3,4,5,6], 6, 5))
// console.timeEnd("time calculaed")

const migratoryBirds = arr => {

  if (arr.length <= 0) {
    return 0;
  }
  const birdsObject = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (birdsObject[element]) {
      birdsObject[element]++;
    } else {
      birdsObject[element] = 1;
    }
  }
  let bird
  let count = 0
  for (const key in birdsObject) {
    if (birdsObject[key] > count) {
      count = birdsObject[key];
      bird = key;
    }
  }
  console.log("bird =>", bird)

}
// migratoryBirds([1,1,2,2,3])

const calculatenthSum = n => {
  if (n === 0) return 0;
  else {
    return n + calculatenthSum(n - 1);
  }

}
// console.log(calculatenthSum(5))

//

const findFactorial = n => {
  if (n == 0 || n === 1)
    return 1;

  return n * findFactorial(n - 1)
}
// console.log("findFactorial =>", findFactorial(5))

/**
 * We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
 * @param {*} n
 */
const findBunnysEars = n => {
  if (n === 0) {
    return 0;
  }
  return 2 + findBunnysEars(n - 1)
}

// console.log("findBunnysEars =>", findBunnysEars(15))


const iterateBunnys = (n) => {

  let count = 0

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      count += 3;
    } else {
      count += 2;
    }
  }
  console.log("count =->", count)
}

const findBunnysEars2 = (n) => {
  if (n === 0) {
    return 0;
  }
  let add = (n % 2 === 0) ? 3 : 2;

  return add + findBunnysEars2(n - 1)
}
// console.log(findBunnysEars2(6))
// iterateBunnys(6)

const findBlocks = n => {
  if (n === 0) {
    return 0;
  }

  return n + findBlocks(n - 1);
}
// console.log("findBlocks =>", findBlocks(7))

const sumDigitsRecursively = n => {
  if (n === 0) {
    return 0;
  }
  const divide = Math.floor(n / 10);
  return n % 10 + sumDigitsRecursively(divide);
}

// console.log("sumDigitsRecursively ->", sumDigitsRecursively(99999))

const count7 = n => {

  if (n < 10) {
    return (n === 7) ? 1 : 0;
  }
  const divide = Math.floor(n / 10);
  return count7(n % 10) + count7(divide);
}
// console.log("count7 ->", count7(707))

function count8(n) {

  const cache = {}

  const test = (n) => {

    if (n < 10) {
      return (n === 8) ? 1 : 0;
    }

    const mod = n % 10;
    const div = Math.floor(n / 10);
    if (mod === 8 && div % 10 === 8) {
      return test(mod) + test(div) + 1;
    } else {
      return test(mod) + test(div);
    }
  }
  return test(n);
}

// console.log("count8(n) =>", count8(432838888888))

function powerN(base, n) {

  if (n === 0)
    return 1;

  return base * powerN(base, n - 1);
}
// console.log("powerN(base, n) =>", powerN(3, 3))

function countX(str, n = str.length - 1) {

  if (n < 0) {
    return 0
  } else {
    return (str[n] === 'x') ? 1 : 0;
  }

  return countX(str, n - 1)

}

// countX("xxhixx")

function knapSack(weight, value, Capacity) {

  const cache = {}
  let result

  function knapsackRec(n, C) {
    if (cache[`${n}_${C}`])
      result = cache[`${n}_${c}`];
    if (n === 0)
      result = 0;
    else if (weight[n] > C)
      result = knapsackRec(n - 1, C);
    else {
      const test1 = knapsackRec(n - 1, C);
      const test2 = value[n] + knapsackRec(n - 1, C - weight[n]);
      result = Math.max(test1, test2);
    }
    cache[`${n}_${C}`] = result;
    return result;
  }
  return knapsackRec(weight.length - 1, Capacity)
}

// console.log("knapSack(weight, value, Capacity) =>", knapSack([10,20,30], [60,100,120], 50))

/**
 * Kadane's Algorithm
 * @param {Array} array Input array
 */
function findMaximumSumFromSubarray(array) {

  let currentMaxSum = array[0];
  let totalMaxSum = array[0];
  for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];

    currentMaxSum = Math.max(currentElement, currentElement + currentMaxSum);

    if (currentMaxSum > totalMaxSum) {
      totalMaxSum = currentMaxSum;
    }
  }
  return totalMaxSum;
}

// console.log("MaxSubArray", findMaximumSumFromSubarray([1,2,-3,4,1,-6]))

// const fs = require("fs");

// fs.readFile(__filename, () => {
//     // timeout_vs_immediate.js
//     setTimeout(() => {
//         console.log('timeout');
//     }, 0);

//     Promise.resolve()
//     .then(() => {
//         console.log("Promsie")
//     })

//     setImmediate(() => {
//     console.log('immediate');
//     });
// })

// // timeout_vs_immediate.js
// setTimeout(() => {
//     console.log('timeout');
//   }, 0);

// Promise.resolve()
// .then(() => {
//     console.log("Promsie")
// })

// setImmediate(() => {
// console.log('immediate');
// });

/**
 * Function to find the longest commonn substring
 * @param {*} P
 * @param {*} Q
 * @param {*} m
 * @param {*} n
 */
function longestCommonSubsequence(P, Q, m, n) {

  let result;
  const cache = {}
  testRec(P, Q, m, n)
  function testRec(P, Q, m, n) {
    if (cache[`${m}_${n}`]) {
      return cache[`${m}_${n}`];
    }
    if (m === 0 || n === 0) {
      result = 0
    } else if (P[m] === Q[n]) {
      result = 1 + testRec(P, Q, m - 1, n - 1);
    } else {
      const temp1 = testRec(P, Q, m, n - 1);
      const temp2 = testRec(P, Q, m - 1, n);
      result = Math.max(temp1, temp2);
    }
    cache[`${m}_${n}`] = result;
    return result;
  }
  return result;
}
// console.log("longestCommonSubstring(P, Q, m, n) =>", longestCommonSubsequence("MAD", "DAM", 3, 4))

function moveZeros(nums) {

  if (nums.length <= 0) {
    return []
  }
  let i = 0;
  let j = 1;
  if (nums[i] === 0 && nums[j] > 0) {
    swapXor(nums, i, j);
    i++;
    j++;
  }

  moveZeroesRec(nums, i, j)
  function moveZeroesRec(nums, i, j) {
    if (j === nums.length) {
      return;
    } else if (nums[i] === 0 && nums[j] === 0) {
      moveZeroesRec(nums, i, j + 1);
    } else {
      if (nums[i] === 0) {
        swapXor(nums, i, j);
      }
      i++;
      j++;
      moveZeroesRec(nums, i, j);
    }
  }
  return nums;

}

const swapXor = (arr, left, right) => {
  if (arr[left] !== arr[right]) {
    arr[left] ^= arr[right];
    arr[right] ^= arr[left];
    arr[left] ^= arr[right];
  }
}

// console.log('moveZeros([0,0,0,4,5]) =>', moveZeros([1,2,3,9,0,6,2]))

var moveZeroesNew = function (nums) {
  let position = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      console.log("position =>", position)
      nums[position++] = nums[i];
    }
  }
  while (position < nums.length) {
    nums[position++] = 0;
  }

  console.log("nums =>", nums)
};

// moveZeroesNew([0,1,0,3,12])

const rotateArrayBF = (array, k) => {

  const newArray = [];
  const pivot = array.length - k;

  for (let i = pivot; i < array.length; i++) {
    newArray.push(array[i]);
  }
  for (let i = 0; i < pivot; i++) {
    newArray.push(array[i]);
  }
  console.log("newArray =>", newArray)

}

const rotateArrayBF1 = (array, k) => {

  for (let j = 0; j < k; j++) {
    let current;
    for (let i = array.length - 1; i >= 0; i--) {
      console.log("i =>", i)
      if (i === array.length - 1) {
        current = array[array.length - 1];
      }
      array[i] = array[i - 1]
      if (i === 0) {
        array[0] = current;
      }
    }
  }
  console.log("array =>", array)
}

// rotateArrayBF1([1,2,3,4,5,6,7], 2)

var reverseStringInPlace = function (s) {

  if (s.length <= 0) {
    return []
  }
  let pivot;
  if (s.length % 2 === 0) {
    pivot = Math.floor(s.length / 2) - 1;
  } else {
    pivot = Math.floor(s.length / 2);
  }
  const n = s.length
  for (let i = 0; i <= pivot; i++) {
    if (s[i] !== s[n - i - 1]) {
      let temp = s[i];
      s[i] = s[n - i - 1];
      s[n - i - 1] = temp;
    }
  }
  console.log("s =>", s)

};

// reverseStringInPlace(["h","e","l","l","o","0"]);

// reverseStringInPlaceRec = s => {

//     if (s.)
// }


// reverseStringInPlaceRec(["h","e","l","l","o"]);

/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * @param {*} nums
 */
var singleNumber = function (nums) {

  if (nums.length <= 0) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
    console.log("result =>", result)
  }
  return result;
};

// singleNumber([4,1,2,1,2])


/**
 * Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

Otherwise, we define that this word doesn't use capitals in a right way.
 * @param {*} word
 */
const deletectCapital = word => {

  if (word.length <= 0) {
    return false;
  }
  if (word.length === 1) {
    return true;
  }
  let type = "";

  if (word[0] === word[0].toUpperCase() && word[1] === word[1].toUpperCase()) {
    type = "UU";
  }
  else if (word[0] === word[0].toUpperCase() && word[1] === word[1].toLowerCase()) {
    type = "UL";
  }
  else if (word[0] === word[0].toLowerCase() && word[1] === word[1].toLowerCase()) {
    type = "LL";
  }
  else {
    type = "LU";
  }
  if (word.length === 2 && type === "LU") {
    return false;
  }

  let current = type;
  for (let i = 2; i < word.length; i++) {
    const element = word[i];
    if (word[0] === word[0].toUpperCase() && element === element.toUpperCase()) {
      current = "UU";
    }
    else if (word[0] === word[0].toUpperCase() && element === element.toLowerCase()) {
      current = "UL";
    }
    else if (word[0] === word[0].toLowerCase() && element === element.toLowerCase()) {
      current = "LL";
    }
    else if (word[0] === word[0].toLowerCase() && element === element.toUpperCase()) {
      return false
    }
    if (type !== current) {
      return false;
    }
  }
  return true;

}

// console.log("deletectCapital = word =>", deletectCapital("mRZ"))

const validPalindrome = s => {

  if (s === "") {
    return true;
  }
  let i = 0;
  let newString = ""
  for (let i = 0; i < s.length; i++) {
    const element = s[i].toLowerCase();

    if ((element.charCodeAt() > 47 && element.charCodeAt() < 58) || (element.charCodeAt() > 64 && element.charCodeAt() < 91) || (element.charCodeAt() > 96 && element.charCodeAt() < 123)) {

      newString += element
    }
  }

  while (i < newString.length) {
    if (newString[i] !== newString[newString.length - i - 1]) {
      return false;
    }
    i++;
  }
  return true; WW

}

// console.log("validPalindrome =>", validPalindrome("A man, a plan, a canal: Panama"))

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {

  if (num <= 0) {
    return false
  }
  if (num === 4) {
    return true
  }
  const fourthPower = Math.sqrt(Math.sqrt(num));
  const squareRoot = Math.sqrt(num);
  if (Number.isInteger(fourthPower) && (4 % fourthPower === 0)) {
    return true;
  }
  else if (4 % (squareRoot / 4) === 0) {
    return true;
  }
  return false;
};

// console.log("isPowerOfFour", isPowerOfFour(144));

/**
 * Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true

 */

var Trie = function () {
  this.root = {
    isEnd: false
  }
}

Trie.prototype.insert = function (word) {

  if (word.length <= 0) {
    return this.root;
  }
  if (typeof word !== "string") {
    return this.root;
  }

  let currentNode = this.root;
  word = word.toLowerCase()
  let i = 0;
  while (i < word.length) {

    if (!currentNode[word[i]]) {
      currentNode[word[i]] = {};
    }

    if (i === word.length - 1) {
      currentNode.isEnd = true;
    } else {
      if (!currentNode.isEnd) {
        currentNode.isEnd = false;
      } else {
        currentNode.isEnd = true;
      }

    }
    currentNode = currentNode[word[i]];
    i++;
  }
  return this.root;
}

Trie.prototype.search = function (word) {
  if (word.length <= 0) {
    return false;
  }
  if (typeof word !== "string") {
    return false;
  }
  let currentNode = this.root;
  word = word.toLowerCase()
  let i = 0;
  while (i < word.length) {

    if (currentNode[word[i]]) {
      if (i === word.length - 1 && currentNode.isEnd === true) {
        return true;
      }
      currentNode = currentNode[word[i]];

    } else {
      return false;
    }
    i++
  }
  return false;
}

Trie.prototype.startsWith = function (word) {
  if (word.length <= 0) {
    return false;
  }
  if (typeof word !== "string") {
    return false;
  }
  let currentNode = this.root;
  word = word.toLowerCase()
  let i = 0;
  while (i < word.length) {
    if (currentNode[word[i]]) {
      if (i === word.length - 1) {
        return true;
      }
      currentNode = currentNode[word[i]];

    } else {
      return false;
    }
    i++
  }
  return false;
}

const trie = new Trie();

// trie.insert("apple");
// console.log("trie.search('apple') =>", trie.search("apple"))   // returns true
// console.log("trie.search('app') =>", trie.search('app'))     // returns false
// console.log("trie.startsWith('app') =>", trie.startsWith('app')) // returns true
// console.log("trie.insert('app') =>", trie.insert('app'))
// console.log("trie.insert('asphalt') =>", trie.insert('asphalt'))
// console.log("trie.insert('Manner') =>", trie.insert('Manner'))
// console.log("trie.startsWith('app') =>", trie.startsWith('app'))     // returns true
// console.log("trie.startsWith('man') =>", trie.startsWith('MAN'))     // returns true




// trie.insert("nemathelminth");
// trie.insert("entracte");
// console.log("trie.search('nemathelminth') =>", trie.search("nemathelminth"))   // returns true
// console.log("trie.search('entracte') =>", trie.search('entracte'))     // returns false
// trie.insert("spittlestaff");
// console.log("trie.search('spittlestaff') =>", trie.search('spittlestaff'))     // returns false
// trie.insert("hematocrit");
// console.log("trie.search('hematocrit') =>", trie.search('hematocrit'))     // returns false
// trie.insert("inachid");
// trie.insert("phthalan");



// console.log("test =>", JSON.stringify(trie.root))


/**
 *
Check for balanced parentheses in an expression


Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
 */
const isParanthesisBalanced = paran => {

  if (paran.length <= 0)
    return false;

  const paranHash = {}

  for (let i = 0; i < paran.length; i++) {
    const element = paran[i];

    if (element === "(" || element === "[" || element === "{") {
      if (paranHash[element]) {
        paranHash[element]++;
      } else {
        paranHash[element] = 1;
      }
      continue;
    }

    switch (element) {
      case "]":
        compareParam(paranHash, "[")
        break;
      case "}":
        compareParam(paranHash, "{")
        break;
      case ")":
        compareParam(paranHash, "(")
        break;
      default:
        paranHash[element] = 1;
    }
  }
  return (Object.keys(paranHash).length === 0)

}

const compareParam = (paranHash, element) => {
  if (paranHash[element] > 1) {
    paranHash[element]--;
  } else {
    delete paranHash[element];
  }
}

// console.log("isParanthesisBalanced =>", isParanthesisBalanced("[()]{}{[()()]()}"))


/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

 * @param {*} numbers
 */
const findDuplicate = numbers => {

  if (numbers.length <= 0) {
    return []
  }
  const resultArray = [];
  for (num of numbers) {
    if (numbers[Math.abs(num) - 1] < 0) {
      resultArray.push(Math.abs(num));
    }
    numbers[Math.abs(num) - 1] *= -1;
  }
  return resultArray
}
// console.log("findDuplicate =>", findDuplicate([4,3,2,7,8,2,3,1]))

/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...

Example 1:

Input: "A"
Output: 1

Example 2:

Input: "AB"
Output: 28

Example 3:

Input: "ZY"
Output: 701

Constraints:

    1 <= s.length <= 7
    s consists only of uppercase English letters.
    s is between "A" and "FXSHRXW".

 * @param {*} s
 */
const titleToNumber = s => {

  const alphaSet = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26
  }
  let columnNumber = 0
  for (let i = 0; i < s.length; i++) {
    switch (i) {
      case (s.length - 1):
        columnNumber += alphaSet[s[i]];
        break;
      case (s.length - 2):
        columnNumber += (26 * alphaSet[s[i]]);
        break;
      default:
        columnNumber += (Math.pow(26, s.length - i - 1) * alphaSet[s[i]]);
        break;
    }
    console.log("columnNumber =>", columnNumber)
  }
  return columnNumber;
}
// console.log("titleToNumber =>", titleToNumber("AJHX"))

/**
 * Calculte the 256th day of year
 * @param {*} year
 */
function dayOfProgrammer(year) {

  if (year > 2700 || year < 1700) {
    console.log("0.0.0");
    return;
  }

  const totalDays = {
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  }

  let days = {};
  if (year === 1918) {
    days = calculateTotalDays(totalDays, 46);
  } else {
    days = calculateTotalDays(totalDays, 59);
  }
  let { month } = days;
  let daysCompleted = days.days;

  if (isLeapYear(year))
    daysCompleted++;

  if (month < 10) {
    month = `0${month}`
  }

  const date = 256 - daysCompleted;
  console.log(`${date}.${month}.${year}`)

}

function calculateTotalDays(totalDays, days = 0) {

  let month
  for (const key in totalDays) {
    if (days + totalDays[key] < 256) {
      days += totalDays[key];
      month = key;
    }
    else
      break;
  }
  month++;
  return {
    days,
    month
  };
}

function isLeapYear(year) {
  if (year < 1918) {
    if (year % 4 === 0) {
      return true;
    }
    return false;
  }
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }
  return false;
}

// dayOfProgrammer(1979)

/**
 * Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices:
. Anna declines to eat item which costs . If Brian calculates the bill correctly, Anna will pay . If he includes the cost of , he will calculate . In the second case, he should refund to Anna.
 * @param {*} bill
 * @param {*} k
 * @param {*} b
 */
function bonAppetit(bill, k, b) {

  if (bill.length <= 0 || bill[k] === undefined) {
    return 0;
  }
  let totalBill = 0;
  for (let i = 0; i < bill.length; i++) {
    const element = bill[i];
    totalBill += element;
  }

  const chargedBill = (totalBill - bill[k]) / 2;
  if (b === chargedBill) {
    return 'Bon Appetit';
  }
  else {
    totalBill = totalBill / 2;
    return totalBill - chargedBill;
  }
}
// console.log("bonAppetit =>", bonAppetit([3,10,2,9], 1, 12))

/**
 * Brie’s Drawing teacher asks her class to open their books to a page number. Brie can either start turning pages from the front of the book or from the back of the book. She always turns pages one at a time. When she opens the book, page

is always on the right side:

image

When she flips page
, she sees pages and . Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is pages long, and she wants to turn to page

, what is the minimum number of pages she will turn? She can start at the beginning or the end of the book.

Given
and , find and print the minimum number of pages Brie must turn in order to arrive at page .
 * @param {*} n
 * @param {*} p
 */
function pageCount(n, p) {

}


function duplicate(arr) {
  var value = ''
  arr.forEach(i => {
    if (i !== value) {
      value = i;
      console.log(i);
    }
  })
}
// console.log("herere =>", duplicate([2,3,2,1,5]))

// console.log("I am outside")



setTimeout(() => {
  console.log("timeout")
}, 0)
setImmediate(() => {
  console.log("immediate")
})

// Promise.resolve()
// .then(() => {
//     console.log("I am in promise")
//     setImmediate(() => {
//         console.log("immediate")
//     })

//     setTimeout(() => {
//         console.log("timeout")
//     }, 0)
// })

// const array = [
//     [22, 34, 45, 65],
//     [222, 334, 465, 265],
//     [35, 334, 777, 909],
// ]
// getMaxFromEach(array, 0)
// function getMaxFromEach(array, i) {

//     if (array[i] === undefined) {
//         return;
//     }

//     console.log(Math.max(...array[i]));
//     getMaxFromEach(array, i+1);
// }


function reverseInt(x) {

  const isNegative = (x < 0) ? true : false;
  const number = Math.abs(x);
  const numStr = String(number).split("");

  const length = numStr.length;
  let pivot = Math.floor(length / 2);

  if (length % 2 === 0) {
    pivot--;
  }

  for (let i = 0, j = numStr.length - 1; i <= pivot; i++, j--) {
    if (numStr[i] !== numStr[j]) {
      numStr[i] ^= numStr[j];
      numStr[j] ^= numStr[i];
      numStr[i] ^= numStr[j];
    }
  }
  const reversedNum = (isNegative) ? -1 * Number(numStr.join("")) : (Number(numStr.join("")));
  if (reversedNum < (Math.pow(-2, 31)) || reversedNum > (Math.pow(2, 31)))
    return 0;

  return reversedNum;
}

// reverseInt( 1534236469)

// find closest number to 0

/**
 * Find the path for the man to traval from one village to another
 * arr = [1,2,3,4,9,8]
 * j should be a multiple of i
 * but i should be multiple of j and i < j
 */

const pathFinder = arr => {

  const length = arr.length;
  const cache = {};
  let result = 0;


  const test = recu(arr, 0, 1, arr[0])

  function recu(arr, prev, current, sum) {
    // base case
    if (current === arr.length - 1) {
      return arr[current];
    }
    console.log("arr[current] % arr[prev] =>", arr[current], arr[prev])
    if (arr[current] % arr[prev] === 0) {
      sum += arr[current];
      return recu(arr, prev, current + 1, sum)
    }
    else {
      return recu(arr, current, current + 1, sum)
    }


  }
  console.log("cache =>", test)


}

// pathFinder([1,2,3,4,9,8])

// var x = 10;
// var x = 30;
// function testerrrr() {
//    var x = 20
// }
// testerrrr()
// console.log("x =>", x);

// async function test_01() {
//     return 2;
// }

// async function test_02() {
//     const test = test_01()
//     console.log("test =>", test)
// }
// test_02()

// console.log("First exeute", new Date());
// let j = 1;
// let k = 2;
// let l = 3;

// function foo() {
//     return
//     (
//         j
//         +k
//         +l
//     )
// }

// console.log("foo() =>", foo())

// let a = 1;

// console.log(a++);    // 1
// console.log(a);      // 2


// let b = 1;
// b++

// console.log("a =>", a)
// console.log("b =>", b)

// console.log(1)
// setTimeout(() => {
//     console.log(23)
// }, 0)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log(12)
// console.log(13)

const moveZeors = arr => {

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let test = "test";
    if (arr[i] !== 0) {
      let test = "new test";
      console.log("inner test =>", test)
      arr[count++] = arr[i];
    }

    console.log("test =>", test)
  }
  console.log("arr =>", arr)

  while (count < arr.length) {
    arr[count++] = 0;
  }
  console.log("arr ->", arr)
}

// moveZeors([1,2,3,0,4,5,0])

const closure1 = () => {


  const closure2 = () => {
    const name = "test"
  }
}


const reverseInteger = num => {

  let reverseNum = 0;
  while (num > 0) {
    const test = num % 10
    const test2 = reverseNum * 10;
    console.log(test, test2)
    reverseNum = test + test2;
    num = Math.ceil(num / 10);

    console.log("reverseNum ->", reverseNum)
    console.log("num ->", num)
  }

  console.log("reverseNum ->", reverseNum)

}

// reverseInteger(2654)

// (() => {
//     var x;
//     console.log(x);
//     if(true) {
//         x = 10;
//         console.log(x);
//     }
//     console.log(x);
// })();


// Q2
// (() => {
//     console.log(x);
//     if(true) {
//         let x = 10;    //let x = 10
//         console.log(x);
//     }
//     console.log(x);
// })();


// var a = 1, b = 2;

// var sum = function () {
//   return this.a + this.b;
// }

// var obj1_t = {
//   a: 10,
//   b: 20,
//   sum,
// };

// var obj2_t = {
//   a: 100,
//   b: 200,
//   sum: obj1_t.sum
// }

// console.log(sum()); // 3
// console.log(obj1_t.sum()); // 30
// console.log(obj2_t.sum()); // 300



// // Q4:

// /*
//     Generic function which an add any number of arguments
//     add(10)(); // 10
//     add(10)(20)(); // 30
//     add(10)(20)(30)() // 60
// */

// function add(x) {

//   return function (y) {
//     if (!y) {
//       return x;
//     }

//     return x + y;
//   }

// }


// // Q6:
// // [1,2,6,8] [1,2,3,4] => [1,2]
// // function intersectOf(arr1, arr2) {

// //   const firstArraySet = new Set([...arr1]);
// //   const insersectArray = [];
// //   for (let i = 0; i < arr2.length; i++) {
// //     if (firstArraySet.has(arr2[i]) {
// //       insersectArray.push(arr2[i]);
// //     }
// //   }
// //   return insersectArray;

// //  ============================================

// //     const firstArrarObject = {};
// //   for (let i = 0; i < arr1.length; i++) {
// //     firstArrarObject[arr1[i]] = true;
// //   }

// //   const insersectArray = [];
// //   for (let i = 0; i < arr2.length; i++) {
// //     if (firstArrarObject[arr2[i]]) {
// //       insersectArray.push(arr2[i]);
// //     }
// //   }
// //   return insersectArray;

// // }






// // <div class="parent">
// //   <div class="child"></div>
// // </div>




// // .parent{
// //   height: 200px;
// //   width: 200px;
// //   background - color: red;
// //   text - align: center;
// // }


// // .child {
// //   height: 50px;
// //   width: 50px;
// //   background - color: green;

// // }



// // Proimise.all

// // Promise.prototype.all = function (args) {

// //   if (!Array.isArray(args)) {
// //     throw "Input is not array";
// //   }
// //   for (let i = 0; i < args.length; i++) {

// //   }

// // }



/***********************************************************
 * Currying in js
 ***********************************************************/
// function curry(f) {  //curry(f) does teh currying function

//   return function(a) {
//     return function(b) {
//       return f(a, b);
//     }
//   }
// }
// function sum(a, b) {
//   return a + b;
// }

// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2))

function curryAdv(func) {

  return function curried(...args) {
    if(args.length >= func.length) {
      return func.apply(this, args);
    }
    else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

function sumNum(a,b,c) {
  return a+b+c;
}

const currySum = curryAdv(sumNum)
// console.log("currySum ->", currySum(1)(2)(3)(4)(5))


const mul = x => {
  return y => {
    return z => {
      return x*y*z;
    }
  }
}

// console.log("mul =>", mul(1)(2)(3))

const _sum3 = (x, y, z) => x + y + z;
const _sum4 = (p, q, r, s) => p + q + r + s;

function curryNew(fn) {
  const N = fn.length;
  function innerFn(n, args) {
    return function actualInnerFunction(a) {
      if (n <= 1) {
        return fn(...args, a);
      }
      return innerFn(n-1, [...args, a])
    }
  }
  return innerFn(N, []);
}

const sum3 = curryNew(_sum3);
console.log("sum3 =>", sum3(2)(3)(4))


const users = [{
  firstName: "Akash",
  lastName: "Eshmukh"
}, {
  firstName: "Navnath",
  lastName: "Wagh"
}, {
  firstName: "Kiran",
  lastName: "Ghuge"
}]

users.sort((a, b) => {
  if (a.lastName > b.lastName) return -1;
  if (a.lastName < b.lastName) return 1;
  return 0
});
console.log("users =>", users) 