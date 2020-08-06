require('express')()
.get("/", (req, res) => {
    return res.send("Hello World!")
})
.listen(5500)