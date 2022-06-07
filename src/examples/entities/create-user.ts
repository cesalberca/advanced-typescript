import type { User } from './user'

export type CreateUser = Omit<User, 'id'>
