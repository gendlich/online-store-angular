# OnlineStoreAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## How to Set Up the Database

I used JSON Server to simulate the API, so you have to install it globally with this code: `npm install -g json-server`
With JSON Server installed type `json-server --watch data.json`, and check on `http://localhost:3000/products` if it's working
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Components
- Product List:
It shows all products on the data.json.

- Product Details:
A page to display extra information about an product.

- Cart:
An component to list what the user will buy.

- Ordered:
The succeed ordered page.

- Header:
An Header Component which all routes use.