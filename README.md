# Getting started

- `git clone git@github.com:benhalverson/todo-api.git`
- `cd todo-api`
- `docker-compose up`


## Docs

You can use Postman or something similar to hit the API at `localhost:4000/api/v1/todos`

GET localhost:4000/api/v1/todos

POST localhost:4000/api/v1/todos

An example JSON payload looks like
```JSON
{
    "title": "Pay Rent",
    "dueDate": "2021-05-01",
    "done": false
}
```

The result should look like this
```JSON
{
    "success": true,
    "data": {
        "_id": "608a3b0f31a8d700134bd0cc",
        "title": "Pay Rent",
        "dueDate": "2021-05-01T00:00:00.000Z",
        "done": false,
        "createdAt": "2021-04-29T04:50:23.492Z",
        "__v": 0
    }
}
```

DELETE localhost:4000/api/v1/todos/:id

To delete a todo item pass in an id.

`localhost:4000/api/v1/todos/608a3b0f31a8d700134bd0cc` will return

```
{
    "success": true,
    "data": {}
}
```