//Create collection
use ('CraftShop');    
db.createCollection('monthlyBudget') 

//Delete a collection
db.monthlyBudget.drop()
//Inserts a single document into a collection.
db.monthlyBudget.insertOne({
    category:'Traveling',
    budget:500,
    spent:600
})
//deletes a single document into a collection.
db.monthlyBudget.deleteOne({
    _id:'65199baa6951168f36b755d1'
})