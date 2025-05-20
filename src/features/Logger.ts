export class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(text: string) {
    this.logs.push(text);
  }

  getLogs() {
    return this.logs;
  }
}
