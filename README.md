## About the Project

This is the backend project used on [Ecommerce](https://github.com/ingridflack/ecommerce).

### Technologies

- [Node](https://nodejs.org/pt-br/docs/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/)
- [Docker](https://www.docker.com/)

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ingridflack/ecommerce-backend
   ```
2. Run `yarn start`

# Endpoints

## `GET /products`

```sh
[
	{
		"id": "d5e9a942-0335-4227-a167-434f0745cd99",
		"name": "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
		"qty_stock": 158,
		"price": 20.49,
		"updated_at": "2022-06-22T22:07:19.784Z",
		"created_at": "2022-06-22T22:07:19.784Z"
	},
	{
		"id": "b45ddf8c-5458-4158-bcd1-3f4b739579fd",
		"name": "BEBIDA ENERGÉTICA VIBE 2L",
		"qty_stock": 659,
		"price": 8.99,
		"updated_at": "2022-06-22T22:07:19.784Z",
		"created_at": "2022-06-22T22:07:19.784Z"
	}
]
```

## `GET /products/stock/:id`

```sh
{
   "qty_stock": 158
}
```

## `POST /orders`

- Body (all fields are required):

```sh
{
	"name": "User",
	"date": "08/12/2022",
	"products": [
		{
			"id": "6f80521a-b82a-4682-bdd2-2f7462063239",
			"quantity": 4
		},
		{
			"id": "b182096a-152e-470b-aef9-af26f83ead8d",
			"quantity": 4
		}
	]
}
```

## `GET /orders`

```sh
	{
		"id": "64b00e8f-b547-4e36-9909-eafd277ca15c",
		"name": "User",
		"date": "2022-08-12",
		"updated_at": "2022-06-22T22:49:38.628Z",
		"created_at": "2022-06-22T22:49:38.628Z"
	}
```

## Future improvements

- Unit tests
- Integration tests
- Validation
