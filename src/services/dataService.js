var catalog = [
    {
        "title":"milk",
        "category":"beverages",
        "price":8.99,
        "image":"",
        "id":"1000",
    },
    {
        "title":"eggs",
        "category":"beverages",
        "price":8.99,
        "image":"",
        "id":"1001",
    },
    {
        "title":"milk",
        "category":"beverages",
        "price":8.99,
        "image":"",
        "id":"1002",
    },
    {
        "title":"milk",
        "category":"beverages",
        "price":8.99,
        "image":"",
        "id":"1003",
    },
    {
        "title":"milk",
        "category":"beverages",
        "price":8.99,
        "image":"",
        "id":"1004",
    }
];


class DataService{
    getProduct(){
        return catalog;
    }
}
export default DataService;