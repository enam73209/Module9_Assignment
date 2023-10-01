const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const adminController = require('../Controllers/adminController');
const subAdminController = require('../Controllers/subAdminController');
const postController = require('../Controllers/postController');

//User Routes
router.get('/createUser',userController.create);
router.get('/readUser',userController.read);
router.get('/deleteUser',userController.delete);
router.get('/updateUser',userController.update);

//Admin Routes
router.get('/createAdmin',adminController.create);
router.get('/readAdmin',adminController.read);
router.get('/deleteAdmin',adminController.delete);
router.get('/updateAdmin',adminController.update);

//SubAdmin Routes
router.get('/createSubAdmin',subAdminController.create);
router.get('/readSubAdmin',subAdminController.read);
router.get('/deleteSubAdmin',subAdminController.delete);
router.get('/updateSubAdmin',subAdminController.update);

//post Routes
router.get('/createPost',postController.create);
router.get('/readPost',postController.read);
router.get('/deletePost',postController.delete);
router.get('/updatePost',postController.update);
module.exports=router;
