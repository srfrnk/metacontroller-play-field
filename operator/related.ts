import { Request, Response, NextFunction } from 'express';
import { debugName, debugNamespace } from './misc';

export default {
  async sync(request: Request, response: Response, next: NextFunction) {
    console.log(`related sync req (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(request.body));

    var res = {
      "annotations": {
        "lastUpdate": new Date().toISOString(),
      },
    };

    console.log(`related sync res (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(res));
    response.status(200).json(res);
  },

  async customize(request: Request, response: Response, next: NextFunction) {
    console.log(`related customize req (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(request.body));

    var res = {
      "relatedResources": []
    };

    console.log(`related customize res (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(res));
    response.status(200).json(res);
  },

  async finalize(request: Request, response: Response, next: NextFunction) {
    console.log(`related finalize req (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(request.body));

    var res = {
      "annotations": {},
      "attachments": [],
      "finalized": true,
    }

    console.log(`related finalize res (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(res));
    response.status(200).json(res);
  }
}
