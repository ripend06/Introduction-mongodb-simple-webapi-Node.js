const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes");

app.use(foodRouter);

/* データベース接続 */
mongoose.connect(
    "mongodb+srv://makoto6760:999@cluster0.z31lbbw.mongodb.net/food?retryWrites=true&w=majority"
)
.then(() => console.log("データベース接続に成功しました"))
.catch((err) => console.log(err));

app.listen(3000, () => {
    console.log("サーバーが起動しました");
});