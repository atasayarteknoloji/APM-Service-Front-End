
import {ROLETYPE} from '../shared/role-type.dictionary';


export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: ROLETYPE;
  token?: string;
}
