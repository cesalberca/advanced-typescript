import type { Creatable } from './creatable'
import type { CreateUser } from '../entities/create-user'
import type { Deletable } from './deletable'
import type { Updatable } from './updatable'
import type { User } from '../entities/user'
import type { FindableAll } from './findable-all'

export interface UserRepository extends Creatable<CreateUser>, Deletable, Updatable<User>, FindableAll<User> {}
