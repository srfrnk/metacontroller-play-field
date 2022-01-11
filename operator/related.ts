import { Request, Response, NextFunction } from 'express';

export default {
  async sync(request: Request, response: Response, next: NextFunction) {
    console.log("related sync req", JSON.stringify(request.body));

    var res = {
      "annotations": {
        "lastUpdate": new Date().toISOString(),
      },
    };

    console.log("related sync res", JSON.stringify(res));
    response.status(200).json(res);
  },

  async customize(request: Request, response: Response, next: NextFunction) {
    console.log("related customize req", JSON.stringify(request.body));

    var res = {
      "relatedResources": []
    };

    console.log("related customize res", JSON.stringify(res));
    response.status(200).json(res);
  },

  async finalize(request: Request, response: Response, next: NextFunction) {
    console.log("related finalize req", JSON.stringify(request.body));

    var res = {
      "annotations": {},
      "attachments": [],
      "finalized": true,
    }

    console.log("related finalize res", JSON.stringify(res));
    response.status(200).json(res);
  }
}
