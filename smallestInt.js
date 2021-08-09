/*
Given an array of integers your solution should find the smallest integer.

*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    const min = Math.min.apply(Math, args);
    return min;
  }
}