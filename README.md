# [IONVU STORE](https://ionvu-store.netlify.app/) - An ecommarce app created using react, expressjs. You can find various types of glasses

# Features:

- **CART**
  - Add to cart
  - remove from cart
  - Increase and decrease quantity in cart
- **Wishlist**
  - Add to wishlist
  - Remove from wishlist
- **Products**
  - View available products
  - Filter products based on category, rating.
  - Sort products by date, 
  - 
- **Auth**
  - Login, logout, Signup
  - Persist login session
  - Autheticating with *JWT* token

# How to Install and Run this Project
Clone or fork this repository to run this locally and use the following commands.

```bash
git clone https://github.com/JantuDeb/ionvu-store.git

cd ionvu-store 

npm install

npm start

```
`src/utils/axios-instance.js`

*use the bellow configuration for axios*
```js
    const defaultConfig = {
    baseURL: "https://ionvu-api.herokuapp.com/api/v1/"
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
    };
```

# How to use and customize backend api
> [GitHub Repository for backend api](https://github.com/JantuDeb/ionvu-store-api/tree/test)

`.env` 
```
PORT=4000
JWT_SECRET=9arFGaz4tZ
JWT_EXPIRY=3d
MONGO_URL=<mongodb url>
CLOUDINARY_URL=<cloudinary url>
CLOUDINARY_NAME=<cloudinary name>
CLOUDINARY_API_KEY= <your api key>
CLOUDINARY_API_SECRET=<your secret key>
```
>You have to create a mongodb cluster at MOngodb Atlas and a cloudinary account for storing images and video
```bash
git clone https://github.com/JantuDeb/ionvu-store-api.git

cd video-library

npm install

npm start

```