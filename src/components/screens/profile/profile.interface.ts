import { IUser } from "@/shared/types/user.interface";

export interface IPorofileInput extends  Pick<IUser ,'email' | 'password'> {}