const pool = require("../config/database.js");
const router = require("express").Router();

require("dotenv").config();

router.get("/retreiveBook", (req, res) => {
  pool.query("SELECT * FROM book", (err, result) => {
    console.log(result);
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/retreiveInnovation", (req, res) => {
  pool.query("SELECT * FROM innovation", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/retreiveSouvenir", (req, res) => {
  pool.query("SELECT * FROM souvenir", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/retreiveProduct", (req, res) => {
  pool.query(
    `SELECT * FROM products WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/retrieveBookById", (req, res) => {
  pool.query(
    `SELECT * FROM book WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
router.get("/retrieveInnovationById", (req, res) => {
  pool.query(
    `SELECT * FROM innovation WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
router.get("/retrieveSouvenirById", (req, res) => {
  pool.query(
    `SELECT * FROM souvenir WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
router.post("/insertOrder", (req, res) => {
  const order_date = req.body.order_date;
  const order_total = req.body.order_total;
  const user_id = req.body.user_id;
  pool.query(
    "INSERT INTO orders (order_date, order_total, user_id) VALUES (?,?,?)",
    [order_date, order_total, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result.insertId);

        res.send(result);
      }
    }
  );
});

router.post("/insertOrderDetail", (req, res) => {
  console.log(req);
  const order_id = req.body.order_id;
  const product_id = req.body.product_id;
  const order_date = req.body.order_date;
  const payment_proof = req.body.payment_proof;
  const payment_type = req.body.payment_type;
  const order_total = req.body.order_total;
  pool.query(
    "INSERT INTO order_details (order_id, product_id, order_date, payment_proof, payment_type, order_total) VALUES (?,?,?,?,?,?)",
    [
      order_id,
      product_id,
      order_date,
      payment_proof,
      payment_type,
      order_total,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/insertPayment", (req, res) => {
  const payment_type = req.body.payment_type;
  const payment_proof = req.body.payment_proof;
  const order_id = req.body.order_id;
  const user_id = req.body.user_id;
  pool.query(
    "INSERT INTO invest_transaction (payment_type, payment_proof, order_id, user_id) VALUES (?,?,?,?)",
    [payment_type, payment_proof, order_id, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/insertTransaction", (req, res) => {
  const invest_amount = req.body.invest_amount;
  const invest_date = req.body.invest_date;
  const innovation_id = req.body.innovation_id;
  const investor_id = req.body.investor_id;
  const invest_reference = req.body.invest_reference;
  const invest_proofPayment = req.body.invest_proofPayment;
  pool.query(
    "INSERT INTO invest_transaction (invest_amount, invest_date, innovation_id, investor_id, invest_reference, invest_proofPayment) VALUES (?,?,?,?,?,?)",
    [
      invest_amount,
      invest_date,
      innovation_id,
      investor_id,
      invest_reference,
      invest_proofPayment,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/insertCart", (req, res) => {
  const cart_id = req.body.cart_id;
  const product_id = req.body.product_id;
  const quantity = req.body.quantity;
  const user_id = req.body.user_id;
  pool.query(
    "INSERT INTO cart (cart_id,product_id, quantity, user_id) VALUES (?,?,?,?)",
    [cart_id, product_id, quantity, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/retrieveCart", (req, res) => {
  console.log(req);
  pool.query(
    `SELECT * FROM Cart WHERE user_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
router.put("/updateCartQuantity", (req, res) => {
  pool.query(
    "UPDATE cart SET ? WHERE cart_id = ?",
    [{ quantity: req.body.params.quantity }, req.body.params.id],
    (err, result) => {
      if (err) {
        res.send(err);
        console.log("Errpr " + err);
      } else {
        res.send(result);
        console.log(result);
      }
    }
  );
});
router.delete("/deleteItemCart", (req, res) => {
  console.log(req);

  pool.query(
    "DELETE FROM Cart WHERE cart_id=?",
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/retrieveProductById", (req, res) => {
  pool.query(
    `SELECT * FROM products WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
