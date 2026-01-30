import express from 'express'
import {shortUrl, redirectUrl} from '../controllers/url.controller.js'

const router = express.Router();
router.post('/shorten', shortUrl)
router.get('/:code', redirectUrl);

export default router