import { Request, Response } from 'express';
import { uuid } from '../lib/uuid';

export class TweetsController {
  private tweets = [
    {
      id: '9f1b9082-bdc5-46b4-ab54-35792aedc1fe',
      content: 'testest',
      createdAt: '2023-01-05T13:13:56.754Z',
    },
    {
      id: 'c81646a9-312b-4592-b6ce-9dbcaf52996b',
      content: 'testest',
      createdAt: '2023-01-05T13:14:00.937Z',
    },
    {
      id: '50c60dab-9b68-4f5c-ae16-477e88fcacca',
      content: 'testest',
      createdAt: '2023-01-05T13:15:51.418Z',
    },
    {
      id: 'bd31cb90-2076-4ae2-b0d4-aed4125a667f',
      content: 'testest',
      createdAt: '2023-01-05T13:15:51.989Z',
    },
    {
      id: '3dba2a5b-1adf-425c-ad5f-2a32c3e02a14',
      content: 'testest',
      createdAt: '2023-01-05T13:15:52.896Z',
    },
    {
      id: '4da0c121-467a-4bd2-8550-0416fdf5151d',
      content: 'testest',
      createdAt: '2023-01-05T13:15:57.187Z',
    },
  ];

  getTweets = (req: Request, res: Response) => {
    res.status(200).json({ tweets: this.tweets });
  };

  createTweet = (req: Request, res: Response) => {
    const { content } = req.body;
    const id = uuid();
    const createdAt = new Date().toISOString();

    this.tweets.push({ id, content, createdAt });

    res.status(201).json(this.tweets);
  };
}
