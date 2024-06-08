const register = async (req, res) => {
    // res.send("api thke")
    // console.log(req.body);
    const { name, email, password } = req.body;
    if ([name, email, password].some((field) => field?.trim() === "")) {
        res.send("data mising")
    }


    
}

export { register }