# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

|--------------|------|------------------------------------------------------------|
|`/customers` |`GET` |It gives a list a customers |
|`/customers/:id` |`DELETE` | |It deletes the specific customer |
|`/customer/:id?property=value`| `PATCH`|It updates a specific property of the user |
|`/customers` |`POST` |It adds a new customer to the list |
|-----------------------------|---------|---------------------------------------------|
|`/stock` |`GET` | It gives entire list of all the inventory |
|`/stock/:id` |`GET` | It gives the specific stock |
|`/stock/:id` |`DELETE` | It deletes the specific stock from the list.|
|`/stock/:id?property=value` |`PATCH` | It updates the stock amount. |
|`/stock` |`POST` | It adds new stock to the list. |
|-----------------------------|---------|---------------------------------------------|  
|`/seating` |`GET` | It gives the list of number of seats. |
|`/seating/reserved` |`GET` | It gives the list of all reserved seats. |
|`/seating/available` |`GET` | It gives the list of all available seats. |
|`/seating/reserve` |`PATCH` | To reserve a seat. |
|`/seating/cancel` |`PATCH` | to cancel a reservation. |
|`/seating/remove` |`DELETE` | to remove a seat. |
|`/seating/add` |`POST` | To make the seat available again. |
| |
|`/employees` |`GET` | To get the list of all the employees. |
|`/employees/:id` |`GET` | TO get a specific employee. |
|`/employees/:id?property=value` |`PATCH`| It updates the employee information. |
|`/employees/:id` |`DELETE`| To delete a particular employee. |
|`/emplyees/create` |`POST` | to create a new employee. |
|-----------------------------|---------|---------------------------------------------|
