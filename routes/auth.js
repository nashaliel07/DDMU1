const express = "express";
const loginController = "../controller/auth.js";

const router = Router();

router.post(
  "/",
  [
    chech("username", "esnecesario ingresar el nombre de usario").not().isEmpty,
    chech("username", "esnecesario ingresar la contraseña"),
    validef,
  ],
  loginUser
);

model.export = router;
