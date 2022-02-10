import express from "express";
import {
    Register,
    Login,
    Logout
} from "../controllers/Users.js";
import {
    verifyToken
} from "../middleware/VerifyToken.js";
import {
    refreshToken
} from "../controllers/RefreshToken.js";
import {
    CheckInOut,
    getDataExpresence
} from "../controllers/Expresence.js";

const router = express.Router();

router.get('/api', function (req, res) {
    res.json("OK");
})

router.post('/api/users', Register);
router.post('/api/login', Login);
router.get('/api/token', refreshToken);
router.post('/api/expresence', getDataExpresence, verifyToken);
router.post('/api/checkInOut', CheckInOut, verifyToken);


export default router;
