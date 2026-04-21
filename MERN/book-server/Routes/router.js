const express = require('express')
const userController = require('../controller/userController')
const router = new express.Router()
const bookController = require('../controller/bookController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const multerMiddleware = require('../middleware/multerMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

// register
router.post('/register', userController.registerController)

// login
router.post('/login', userController.loginController)

// google-login
router.post('/google-login', userController.googleLoginController)

// home-books
router.get('/home-books', bookController.getHomeBooksController)


// ---------- Authorized users routes ----------
// addBook
router.post('/user/add-book', jwtMiddleware, multerMiddleware.array('uploadImg', 2), bookController.addBookController)

// getAllUserBook
router.get('/all-books', jwtMiddleware, bookController.getAllUserBookController)

// getUserProfileBooks
router.get('/user-books', jwtMiddleware, bookController.getUserProfileBookController)

// getUserPurchasedBooks
router.get('/user-books/buy', jwtMiddleware, bookController.getPurchaseBookController)

// viewBook
router.get('/view/:id', jwtMiddleware, bookController.viewBookController)

// updateUser
router.put('/user/:id/edit', jwtMiddleware, multerMiddleware.single('picture'), userController.editUserController)

//------------Admin routes-------------
// getAllBooks
router.get('/admin/all-books', adminMiddleware, bookController.getAllBooksController)
// getAllUser
router.get('/admin/all-users', adminMiddleware, userController.getAllUsersController)

module.exports = router