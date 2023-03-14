const express = require("express");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const { authenticate, validation } = require("../../middlewares");
const { subscriptionSchema } = require("../../models");
const { user: ctrl } = require('../../controllers');

const userRouter = express.Router();

userRouter.patch(
    "/",
    authenticate,
    validation(subscriptionSchema),
    ctrlWrapper(ctrl.updateSubscription)
);



userRouter.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

module.exports = { userRouter };