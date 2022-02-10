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
router.post('/api/expresence', getDataExpresence);
router.post('/api/checkInOut', CheckInOut);

// Profile & Password
// router.get('/api/me',verifyToken,permissionCheck(['view-profile']), Me);
// router.post('/api/update-me',verifyToken,permissionCheck(['update-profile']), UpdateMe);
// router.post('/api/change-password',verifyToken,permissionCheck(['change-password']), ChangePassword);
// router.post('/api/reset-password',verifyToken,permissionCheck(['reset-password']), ResetPassword);

// CRUD User
// router.get('/api/users', verifyToken, permissionCheck(['view-list-users']),getUsers);
// router.post('/api/user/create',verifyToken,permissionCheck(['create-user']),Create);
// router.get('/api/user/:id',verifyToken,permissionCheck(['view-user']),Show);
// router.put('/api/user/:id',verifyToken,permissionCheck(['update-user']),Update);
// router.delete('/api/user/:id',verifyToken,permissionCheck(['delete-user']),Delete);

// route roles 
// router.get('/api/roles',getRoles);
// router.post('/api/roles',createRole);

// router.post('/api/permission',verifyToken,getPermission);
// route routes 
// router.get('/api/routes',verifyToken,getRoutes);
// router.post('/api/routes',verifyToken,createRoute);

export default router;