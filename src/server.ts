import express from "express";

export class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  public runServer(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
}
