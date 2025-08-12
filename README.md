# Blog Post App

A simple backend API for a blog post application built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
It supports creating posts, comments, likes, and unliking posts.

---

## Features

- **Create Posts**  
- **Add Comments to Posts**
- **Like and Unlike Posts**
- **RESTful API structure**

---

## Project Structure

```
Backend/
│
├── Controllers/
│   ├── commentController.js
│   ├── likeController.js
│   └── ... (other controllers)
│
├── Models/
│   ├── commentModel.js
│   ├── likeModel.js
│   ├── postModel.js
│   └── ... (other models)
│
├── Routes/
│   └── route.js
│
├── config/
│   └── db.js
│
├── index.js
└── package.json
```

---

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone <repo-url>
   cd Backend/Blog-Post-App
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure MongoDB**
   - Create a `.env` file (if not already present).
   - Add your MongoDB URI:
     ```
     MONGODB_URI=mongodb://localhost:27017/blog-post-app
     PORT=4000
     ```

4. **Start the server**
   ```sh
   npm run dev
   ```
   or
   ```sh
   node index.js
   ```

---

## API Endpoints

### Comments

- **Create Comment**
  - `POST /api/v1/comments`
  - Body:
    ```json
    {
      "post": "<Post ObjectId>",
      "body": "Your comment",
      "user": "UserId or username"
    }
    ```

### Likes

- **Like a Post**
  - `POST /api/v1/likes`
  - Body:
    ```json
    {
      "post": "<Post ObjectId>",
      "user": "UserId or username"
    }
    ```

- **Unlike a Post**
  - `DELETE /api/v1/likes`
  - Body:
    ```json
    {
      "post": "<Post ObjectId>",
      "like": "<Like ObjectId>"
    }
    ```

---

## Notes

- All IDs (`post`, `user`, `like`) must be valid MongoDB ObjectIds.
- Make sure your Post model has a `comments` and `likes` array if you want to push/pull comment/like IDs.

---

## END