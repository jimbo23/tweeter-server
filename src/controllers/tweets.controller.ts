import { Router } from 'express';

const router = Router();

export const tweetsController = router.get('/tweets', (req, res) => {
  res.send('tweets');
});
