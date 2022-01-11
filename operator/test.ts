import { Request, Response, NextFunction } from 'express';

export default {
  async sync(request: Request, response: Response, next: NextFunction) {
    console.log("gitRepositories sync req", JSON.stringify(request.body));

    var res = {
      "annotations": {
        "lastUpdate": new Date().toISOString(),
      },
    };

    console.log("gitRepositories sync res", JSON.stringify(res));
    response.status(200).json(res);
  },

  async customize(request: Request, response: Response, next: NextFunction) {
    console.log("gitRepositories customize req", JSON.stringify(request.body));

    var res = {
      "relatedResources": []
    };

    console.log("gitRepositories customize res", JSON.stringify(res));
    response.status(200).json(res);
  },

  async finalize(request: Request, response: Response, next: NextFunction) {
    console.log("gitRepositories finalize req", JSON.stringify(request.body));

    var res = {
      "annotations": {},
      "attachments": [],
      "finalized": true,
    }

    console.log("gitRepositories finalize res", JSON.stringify(res));
    response.status(200).json(res);
  }
}