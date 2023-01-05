import { TweetsController } from '@controllers/tweets.controller';
import { Route } from '@interfaces/route.interface';
import { Router } from 'express';

export class TweetsRoute implements Route {
  public path = '/tweets';
  public router = Router();
  public tweetsController = new TweetsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.tweetsController.getTweets);
    this.router.post(`${this.path}`, this.tweetsController.createTweet);
  }
}
