```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("650e44a7852f51c3e2a70633")}, {"$inc": {"count": 1}})
```