import {Router} from "express";

import * as controller
from "../controllers/module.controller.js";

import authenticate
from "../../../middleware/auth.middleware.js";

import authorize
from "../../../middleware/authorize.middleware.js";

import ROLES
from "../../../shared/constants/roles.js";

const router=Router();

router.post(

"/",

authenticate,

authorize(ROLES.ADMIN),

controller.createModule

);

export default router;