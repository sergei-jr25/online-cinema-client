import { IUser } from "@/shared/types/user.interface";

export interface IUserEdit extends Omit<IUser, '_id' | 'createdAt'> {}