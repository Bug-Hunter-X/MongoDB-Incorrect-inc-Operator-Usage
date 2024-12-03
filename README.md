# Incorrect Usage of $inc Operator in MongoDB

This example demonstrates an incorrect usage of the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numerical value in a document.  However, attempting to increment a field with a string value will not work as expected and may even cause errors.

## Bug

The original code attempts to increment the `count` field with the string value "1". This will lead to an unexpected result or an error, rather than properly incrementing the count.

## Solution

The correct way to use the `$inc` operator is to supply a numerical value to be added.
