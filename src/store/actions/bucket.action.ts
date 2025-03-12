import { Bucket } from '../../Interfaces/backet.interface';

export class AddToBucket {
    static readonly type = '[Bucket] Add';
    constructor(public payload: Bucket) {}
  }
export class RemoveFromBucket {
    static readonly type = '[Bucket] Remove';
    constructor(public payload:Partial<Bucket>) {}
  }