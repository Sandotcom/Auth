import express from 'express'
import { signUp, signIn } from '../controllers/user.js';

const router = express.Router();

router.post('/', signUp)
router.post('/', signIn)

export default router;