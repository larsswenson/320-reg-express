import express from "express";
const app = express();

// Route with regular expression to match URL patterns and send text responsey
app.get("/user(name)?", (req, res) => {
    res.send("Hello, User!");
});
// 404 error for invalid routes
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});
// Set server to listen on provided port or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});