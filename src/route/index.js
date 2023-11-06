// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є
const hw = require('./hw')
// Об'єднайте файли роутів за потреби
router.use('/', test)
// Використовуйте інші файли роутів, якщо є
router.use('/', hw)
// Експортуємо глобальний роутер
module.exports = router
