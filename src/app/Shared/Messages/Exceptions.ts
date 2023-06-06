export class ExceptionDefault extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomException';
  }
}
