import type { Id } from './id'

export interface Deletable {
  delete(id: Id): Promise<void>
}
