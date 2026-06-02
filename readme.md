# Campus Lost & Found

A full-stack web application designed to help students report, discover, and recover lost items within a university campus.

The platform allows users to securely create accounts, post lost or found items with images, browse community submissions, and manage their own listings through a personalized dashboard.

---

## Features

### Authentication & Security

* User registration and login system
* Password hashing using bcrypt
* Session-based authentication
* Persistent login sessions
* Protected routes for authenticated users

### Lost & Found Management

* Report lost items
* Report found items
* Upload item images
* View all lost items
* View all found items
* Contact information attached to each listing

### Personal Dashboard

* Dedicated **My Items** page
* View all items posted by the logged-in user
* Delete listings after items are recovered or returned

### Image Uploads

* Cloudinary integration for cloud image storage
* Image preview before submission
* Automatic image URL management

### Database Integration

* MongoDB database
* Mongoose schema modeling
* User-item relationship tracking

---

## Tech Stack

### Frontend

* HTML
* CSS
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* bcrypt
* express-session

### File Storage

* Cloudinary
* Multer
* multer-storage-cloudinary

---

## Project Screenshots

### Home Page
<img width="1883" height="972" alt="Screenshot 2026-06-02 145718" src="https://github.com/user-attachments/assets/240b23e3-e048-436e-a8b0-ec175202f3f2" />
Displays the platform landing page and navigation options.

### Report Item Page
<img width="626" height="959" alt="Screenshot 2026-06-02 145846" src="https://github.com/user-attachments/assets/fd4077d8-b04c-4890-bf12-30c0945f510a" />
Users can submit lost or found items along with images and contact information.

### Lost Items
<img width="1907" height="898" alt="Screenshot 2026-06-02 145901" src="https://github.com/user-attachments/assets/319e5475-d99c-453d-b725-316a5131e29a" />
Browse all reported lost items.

### Found Items
<img width="1906" height="952" alt="Screenshot 2026-06-02 145914" src="https://github.com/user-attachments/assets/8f3967c8-4cae-467c-96b1-3be1c65b290d" />

Browse all reported found items.

### My Items
<img width="1912" height="917" alt="Screenshot 2026-06-02 145925" src="https://github.com/user-attachments/assets/e58a6775-40af-40bf-ade0-0b83dc78c14e" />

Manage and delete personal listings.

---

## Application Flow

1. User registers an account.
2. Password is securely hashed using bcrypt.
3. User logs in.
4. Session is created and maintained.
5. Authenticated users can create lost or found item listings.
6. Images are uploaded to Cloudinary.
7. Item information is stored in MongoDB.
8. Users can view their own submissions under **My Items**.
9. Users can delete listings once an item has been recovered or returned.

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/Cheromelon/Lost-and-Found-Website.git
cd Lost-and-Found-Website
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string

SESSION_SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Run the Application

```bash
npm start
```

or

```bash
nodemon app.js
```

The application will be available at:

```text
http://localhost:4000
```

---

## Future Improvements

* Search functionality
* Item filtering by location
* Claim request system
* Email notifications
* Admin dashboard
* Mobile-first responsive design
* Item status tracking (Lost, Claimed, Returned)
* Real-time updates

---

## What I Learned

Through this project I gained hands-on experience with:

* Building RESTful applications using Express.js
* Session-based authentication
* Password security using bcrypt
* MongoDB data modeling
* File uploads and cloud storage
* User authorization and protected routes
* Full-stack application development

---

## Author

**Chervith Nannuru**

Machine Learning Engineer & Full-Stack Developer

GitHub: https://github.com/Cheromelon
