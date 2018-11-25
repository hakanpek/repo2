export class Todo {
  id: number;
  name: string = '';
   keyword: string = '';
   complete: boolean = false;
//  values: any[];

constructor(values: Object = {}) {
  Object.assign(this, values);
}
}
