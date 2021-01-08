import { Router } from 'express';
import { makeSendMessageController, makeReceiveMessageController } from '@/main/factories';
import { adaptRouter } from '../adapters/express-router';

export default (router: Router): void => {
  router.get('/messages', adaptRouter(makeReceiveMessageController()))
  router.post('/messages', adaptRouter(makeSendMessageController()))
}