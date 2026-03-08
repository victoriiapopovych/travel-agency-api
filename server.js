const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'victory9955',
 database: 'travel_agency_project'
});

db.connect(err => {
 if (err) throw err;
 console.log('Connected to database');
});


//GET
app.get('/packages', (req, res) => {
 db.query('SELECT * FROM tour_packages', (err, results) => {
   if (err) throw err;
   res.json(results);
 });
});


app.get('/bookings', (req, res) => {
  console.log("GET /bookings called");
  const sql = "SELECT * FROM bookings";
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database error");
    } else {
      res.json(results);
    }
  });
});


app.listen(3000, () => {
 console.log('Server running on port 3000');
});


//POST
app.post('/bookings', (req, res) => {

 const { client_id, package_id, persons_count, total_price, status } = req.body;

 db.query(
   'INSERT INTO bookings (client_id, package_id, persons_count, total_price, booking_datetime, status) VALUES (?, ?, ?, ?, NOW(), ?)',
   [client_id, package_id, persons_count, total_price, status],
   (err, results) => {
     if (err) throw err;

     res.json({
       message: 'Booking created',
       booking_id: results.insertId
     });
   }
 );

});


app.post('/packages', (req, res) => {
  const { hotel_id, start_date, duration_days, price } = req.body;

  const sql = `
    INSERT INTO tour_packages (hotel_id, start_date, duration_days, price)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [hotel_id, start_date, duration_days, price], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error adding package");
    } else {
      res.json({
        message: "Package added successfully",
        id: result.insertId
      });
    }
  });
});


//PUT
app.put('/bookings/:id', (req, res) => {

 const { persons_count, total_price, status } = req.body;
 const { id } = req.params;

 db.query(
   'UPDATE bookings SET persons_count=?, total_price=?, status=? WHERE booking_id=?',
   [persons_count, total_price, status, id],
   (err) => {
     if (err) throw err;

     res.json({ message: 'Booking updated' });
   }
 );

});


app.put('/packages/:id', (req, res) => {

  const id = req.params.id;
  const { hotel_id, start_date, duration_days, price } = req.body;

  const sql = `
    UPDATE tour_packages
    SET hotel_id=?, start_date=?, duration_days=?, price=?
    WHERE package_id=?
  `;

  db.query(sql, [hotel_id, start_date, duration_days, price, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating package.");
    } else {
      res.json({ message: "Package updated successfully." });
    }
  });

});


//DELETE 
app.delete('/bookings/:id', (req, res) => {

 const { id } = req.params;

 db.query(
   'DELETE FROM bookings WHERE booking_id=?',
   [id],
   (err) => {
     if (err) throw err;

     res.json({ message: 'Booking deleted' });
   }
 );

});