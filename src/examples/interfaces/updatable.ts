import type { Id } from './id'

export interface Updatable<Resource extends { id: Id }, Response = void> {
  update(resource: Resource): Promise<Response>
}
