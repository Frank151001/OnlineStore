
var catalog = [
    {
        "title":"milk",
        "category":"personal",
        "price":8.99,
        "image":"belt.jpg",
        "_id":"1000",
    },
    {
        "title":"brocoli",
        "category":"beverages",
        "price":8.99,
        "image":"brocoli.jpg",
        "_id":"1001",
    },
    {
        "title":"milk",
        "category":"beverages",
        "price":8.99,
        "image":"Milk.jpg",
        "_id":"1002",
    },
    {
        "title":"Make up",
        "category":"beuty",
        "price":8.99,
        "image":"make up.jpg",
        "_id":"1003",
    },
    {
        "title":"eggs",
        "category":"beverages",
        "price":8.99,
        "image":"eggs.jpeg",
        "_id":"1004",
    }
];


class DataService{
    getProduct(){
        return catalog;
    }
}
export default DataService;