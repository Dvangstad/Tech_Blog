const router = require("express").Router();

router.get('/', (req, res) => {
    const hbsObj = {
        arr: [
            { fruit:'apples'},
            { fruit:'namamab'},
            { fruit:'orange'},
        ]
    }
    res.render('index', hbsObj)
})

module.exports = router