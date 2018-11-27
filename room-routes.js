// const express = require("express");
// const router = express.Router();
// const pool = require('./db');

// router.get("/", (req, res) => {
//    pool.query('select * from rooms').then(result => {
//         res.send(result.rows);
//    })
// });

// router.post("/", (req, res) => {
//     const sql = 'insert into rooms (name, capacity, available) values($1::text, $2::int, $3::boolean)';
//     const values = [req.body.name, req.body.capacity, req.body.available];
//     pool.query(sql, values).then(result => res.send(result));
// });

// router.get("/:id", (req, res) => {
    
//     pool.query(`select * from rooms where id=${req.params.id}`).then(result => {
//         res.send(result.rows);
//     });
// });

// router.delete("/:id", (req, res) => {
    
//     pool.query(`delete from rooms where id=${req.params.id}`).then(result => {
//         res.send(result);
//     });
// });

// // router.post("/", (req, res) => {
// //     if(req.body){
// //         res.status(201).send(req.body);
// //         } else {
// //             res.sendStatus(400);
// //         }
// //     });

// // router.put("/:id", (req, res) => {
// //         res.send(`Updated items with ${req.params.id}`);
// //     });

// //     router.delete("/:id", (req, res) => {
// //         res.send(`Deleted items with ${req.params.id}`);
// //     });
    
// module.exports = router;