import { Request, Response, NextFunction } from 'express';

export default {
  async sync(request: Request, response: Response, next: NextFunction) {
    console.log("test sync req", JSON.stringify(request.body));

    var res = {
      "annotations": {
        "lastUpdate": new Date().toISOString(),
      },
    };

    console.log("test sync res", JSON.stringify(res));
    response.status(200).json(res);
  },

  async customize(request: Request, response: Response, next: NextFunction) {
    console.log("test customize req", JSON.stringify(request.body));

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


    console.log("test customize res", JSON.stringify(res));
    response.status(200).json(res);
  },

  async finalize(request: Request, response: Response, next: NextFunction) {
    console.log("test finalize req", JSON.stringify(request.body));

    var res = {
      "annotations": {},
      "attachments": [],
      "finalized": true,
    }

    console.log("test finalize res", JSON.stringify(res));
    response.status(200).json(res);
  }
}
