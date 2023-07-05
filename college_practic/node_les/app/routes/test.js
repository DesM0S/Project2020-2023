const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/index.html"));
	// отпрвка файла на страницу
	// path.join(__dirname,...) нужен для того, чтобы файлы правильно считывались из конкретной папки
});
// обработка маршрута

router.get("/sign_in", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/sign_in.html"));
});
router.get("/sign_up", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/sign_up.html"));
});
router.get("/user", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/user.html"));
});


router.get("/forget_password_1.html", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/forget_password_1.html"));
});
router.get("/forget_password_2.html", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/forget_password_2.html"));
});
router.get("/forget_password_3.html", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/forget_password_3.html"));
});

module.exports = router;
// экспорт модуля
