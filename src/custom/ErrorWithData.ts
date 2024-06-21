export interface TErrorWithData {
  type: string;
}
export class ErrorWithData extends Error {
  private _data: TErrorWithData;
  constructor(message: string, data: TErrorWithData) {
    super(message);
    this._data = data;
  }

  get data() {
    return this._data;
  }
}