const { Router } = require('express');
const post = require("../controllers/posts")


const router = Router();

router.post("/activity", async function (req, res) {
    post.addActivity(req, res)
})


module.exports = router;