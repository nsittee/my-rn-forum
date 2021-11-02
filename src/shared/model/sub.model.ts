import { IThread } from './thread.model';
import { IUser } from "./user.model";

export interface ISub {
  _id?: string,
  SubLongName?: string,
  SubShortName?: string,
  SubUser?: IUser[],
  SubThread?: IThread[]
}

export const defaultSub: ISub = {
  _id: '',
  SubLongName: '',
  SubShortName: '',
  SubUser: [],
  SubThread: []
}