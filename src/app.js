const express = require("express");
const app = express();
const path = require("path");

// Set viewengine : ejs 타입의 템플릿 앤진 사용 및 view, static 경로 설정
app.set("views", path.resolve(__dirname, "../public/views"));
app.set("view engine" , "ejs");
app.use(express.static(path.resolve(__dirname, "../public/static")));

app.get("/", (req, res) => {
    res.status(200).render("placeListMap");
});

app.get("/search", (req, res) => {
    res.status(200).render("placeListSearchPage");
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on : ${PORT}`));