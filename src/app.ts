import express from "express";
import { router } from "./routes/routes";
import { Server } from "./server";

export class App {
  public server: Server;

  constructor() {
    this.server = new Server();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  private setupMiddlewares() {
    this.server.app.use(express.json());
  }

  private setupRoutes() {
    this.server.app.use(router);
  }

  public start(port: number) {
    this.server.runServer(port);
  }
}
new App().start(8080);
