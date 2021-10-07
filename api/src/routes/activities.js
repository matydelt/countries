const { Router } = require('express');
const post = require("../controllers/posts")
const get = require("../controllers/gets")


const router = Router();

router.post("/activity", async function (req, res) {
    post.addActivity(req, res)
})

router.get("/activities", async function (req, res) {
    get.getActivities(res)
})




module.exports = router; 