const express = require("express");
const router = express.Router();
const controller = require("./../controler/teachersController");
const {
  insertValidator,updateValidator
} = require("./../MadelWare/Validations/teacherValidator");
const validatonResult = require("./../MadelWare/Validations/validationResult");
const { isAuthorized } = require("./../MadelWare/authenticationMW");

router
  .route("/teachers")
  // .get(isAuthorized,controller.getAllTeacher)
  .get(isAuthorized,validatonResult,controller.getAllTeacher)
  .post(isAuthorized,insertValidator,validatonResult,controller.insertTeacher);
  
  router.route("/teachers/:_id")
  .get(isAuthorized,controller.getTeachertById)
  .patch(isAuthorized,updateValidator,controller.updateTeacher)
  .delete(controller.deleteTeacher);

  router.route("/teachers/change-password/:_id")
  .patch(isAuthorized, controller.changePassword);

  module.exports = router;
  