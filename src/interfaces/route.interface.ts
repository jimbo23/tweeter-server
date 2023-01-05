import express from 'express';

export interface Route {
  path: string;
  router: express.Router;
}
