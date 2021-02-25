import express from 'express'

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Landing Page");
});

module.exports = router;