const { Router } = require('express');
const post = require("../controllers/posts")
const get = require("../controllers/gets")


const router = Router();

router.post("/activity", async function (req, res) {
    post.addActivity(req, res)
})
router.get("/activity", async function (req, res) {
    get.getActAll_Query(req.query.name, res);
})

module.exports = router;