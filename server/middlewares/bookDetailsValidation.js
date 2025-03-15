const validationmiddleware = (req,res,next) => {
    try {
        
        const {title, author, price} = req.body;
        if(!title || !author || !price) {
            return res.status(400).json({message: "All fields are required"})
        }
        next()

    } catch (error) {
        
        console.log(error)
        res.status(500).json({error: error.message || "Internal server error"})
    }
}

module.exports = {
    validationmiddleware
}