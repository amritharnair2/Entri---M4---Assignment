let books = [
    {title: "The Stranger", author: "Albert Camus", price: 370},
    {title: "Day Break", author: "Kumar Kinshuk", price: 185},
    {title: "King of Greed", author: "Ana Huang", price: 150}
]

const getBooks = (req,res) => {
    try {
        res.status(200).json({message: "Books fetched successfully", books})

    } catch (error) {
        res.status(500).json({error: error.message || "Internal server error"})
    }
}

const addBook = (req,res) => {
    try {    
        books.push(req.body)
        res.status(201).json({message: "book added successfully",books})
    }

    catch(error) {
            res.status(500).json({error: error.message || "Internal server error"})
    }
}

const searchBook = (req,res) => {
    try {
        const {title} = req.params
        const searchResult = books.filter((book) => book.title.toLowerCase() === title.toLowerCase())
        if (searchResult.length===0) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({message: "Book details fetched successfully", searchResult})

    } catch (error) {
        res.status(500).json({error: error.message || "Internal server error"})
    }
}


const deleteBook = (req, res) => {
    try {
        const { title } = req.params
        const initialLength = books.length;
        books = books.filter((book) => book.title.toLowerCase() !== title.toLowerCase());

        if (books.length === initialLength) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted successfully", books });

    } catch (error) {
        res.status(500).json({ error: error.message || "Internal server error" });
    }
};


module.exports = {
    getBooks,
    addBook,
    searchBook,
    deleteBook
}