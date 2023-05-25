
// REVIEW: Should I use an interface for this model for better type checking when passing object in the constructor.?

export default class BaseHttpResponse<T> {
  count: number;
  previous: string | null;
  next: string | null;
  items: Array<T>;

  constructor(data: BaseHttpResponse<T>) {
    this.count = data.count;
    this.previous = data.previous ?? null;
    this.next = data.next ?? null;
    this.items = data.items;
  }
}
