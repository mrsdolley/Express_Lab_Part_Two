const express = require("express");
const items = express.Router();
const pool = require('./db');

items.get("/items", (req, res) => {
    pool.query('select * from shoppingcart').then((result) => {
         res.json(result.rows);
    })
 });

// items.post("items/", (req, res) => {
//     if(req.body){
//         res.status(201).send(req.body);
//         } else {
//             res.sendStatus(400);
//         }
//     });
     
    //  items.post("items/", (req, res) => {
    //      const sql = 'insert into shoppingcart (product, price, quantity) values($1::text, $2::real, $3::int)';
    //      const values = [req.body.product, req.body.price, req.body.quantity];
    //      pool.query(sql, values).then(result => res.send(result));
    //  });

    items.post("/items", (req, res) => {
        const sql = "insert into shoppingcart(product, price, quantity) values($1::text, $2::real, $3::int)";
        const values = [req.body.product, req.body.price, req.body.quantity];
        pool.query(sql, values).then(() => {
            pool.query("select * from shoppingcart").then((result) => {
              // send the results
              res.json(result.rows);
            });
        });
    });
     
    //  items.get("/items/:id", (req, res) => {
         
    //      pool.query(`select * from shoppingcart where id=${req.params.id}`).then(result => {
    //          res.send(result.rows);
    //      });
    //  });

    // items.get("/items", (req, res) => {
    //     pool.query("select * from shoppingcart").then((result) => {
    //       // send the results
    //       res.json(result.rows);
    //     });
    //   });

     items.put("/items/:id", (req, res) => {
        pool.query("update shoppingcart set product=$1::text, price=$2::real, quantity=$3::int where id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
            pool.query("select * from shoppingcart").then((result) => {
              // send the results
              res.json(result.rows);
            });
          });
        });
     
    items.delete("/items/:id", (req, res) => {
         
         pool.query(
             "delete from shoppingcart where id=$1::int",[req.params.id]).then(() => {
                pool.query("select * from shoppingcart").then((result) => {
                  res.json(result.rows);
                });
              });
            });
     
    
module.exports = items;