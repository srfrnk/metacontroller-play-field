import { Request, Response, NextFunction } from 'express';
import { debugNamespace, debugName } from './misc';

export default {
  async sync(request: Request, response: Response, next: NextFunction) {
    console.log(`test sync req (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(request.body));

    var res = {
      "annotations": {
        "lastUpdate": new Date().toISOString(),
      },
    };

    console.log(`test sync res (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(res));
    response.status(200).json(res);
  },

  async customize(request: Request, response: Response, next: NextFunction) {
    console.log(`test customize req (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(request.body));

    var res = {
      "relatedResources": [
        {
          "apiVersion": "test.io/v1",
          "resource": "relatedes",
          "namespace": request.body.parent.metadata.namespace,
          "names": [request.body.parent.spec.prop]
        }
      ]
    };


    console.log(`test customize res (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(res));
    response.status(200).json(res);
  },

  async finalize(request: Request, response: Response, next: NextFunction) {
    console.log(`test finalize req (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(request.body));

    var res = {
      "annotations": {},
      "attachments": [],
      "finalized": true,
    }

    console.log(`test finalize res (${debugNamespace(request)}:${debugName(request)})`, JSON.stringify(res));
    response.status(200).json(res);
  }
}
