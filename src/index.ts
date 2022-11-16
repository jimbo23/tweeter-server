import express from 'express';
import { PORT } from '@config';
import { tweetsController } from '@controllers/tweets.controller';

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.use(tweetsController);

app.listen(PORT, () => {
  console.log('================================');
  console.log(`listening on port ${PORT}`);
  console.log('================================');
});
