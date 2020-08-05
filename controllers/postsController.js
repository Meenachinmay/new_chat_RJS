exports.posts = (req, res) => {
    return res.status(200).json({
        posts: {
            title: "my first post",
            data: "data is here"
        },
        user: req.user
    })  
}