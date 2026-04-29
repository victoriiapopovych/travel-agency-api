# Travel Agency API 🌍✈️

A REST API for managing a travel agency system.  
This project was created as part of university laboratory work to practice backend development, database integration, and API testing.

## Features 🚀

- Get all available tour packages  
- Get all bookings  
- Create new bookings  
- Update existing bookings  
- Delete bookings  
- Manage clients and travel packages  
- Connect to MySQL database  

## Technologies Used 🛠️

- Node.js  
- Express.js  
- MySQL  
- Postman (for API testing)  
- Git & GitHub  
- GitHub Actions (CI/CD)  

## Project Structure 📂

travel_api/  
│  
├── .github/  
│   └── workflows/  
│       └── ci.yml  
│  
├── package.json  
├── package-lock.json  
├── server.js  
└── README.md  

## API Endpoints 📌

### Tour Packages
- GET /packages → Get all tour packages  

### Bookings
- GET /bookings → Get all bookings  
- POST /bookings → Create booking  
- PUT /bookings/:id → Update booking  
- DELETE /bookings/:id → Delete booking  

## Database 📊

The project uses MySQL database with the following tables:

- clients  
- hotels  
- tour_packages  
- bookings  

### Relationships:
- One client → many bookings  
- One hotel → many tour packages  
- One package → many bookings  

## Installation ⚙️

Clone repository:

git clone https://github.com/victoriiapopovych/travel-agency-api.git

Install dependencies:

npm install

Run server:

npm start

## Testing 🧪

API endpoints were tested using Postman.

Example request:

GET http://localhost:3000/packages

## Purpose 🎓

This project was developed for university laboratory work to demonstrate:

- REST API creation  
- Database connection  
- CRUD operations  
- Version control with GitHub  
- CI/CD pipeline setup  

## Author 👩‍💻

**Victoria Popovych**  
2nd-year Computer Engineering Student  
Lviv Polytechnic National University  
Aspiring Backend / Python Developer