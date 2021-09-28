const { Router } = require('express');
const gets = require("../controllers/gets")


const router = Router();


router.get("/countries", async (req, res) => {
    const { name } = req.query;
    gets.getAll_Query(name, res);
})

router.get("/countries/:id", async (req, res) => {
    gets.getById(req.params.id, res)
})

module.exports = router;

