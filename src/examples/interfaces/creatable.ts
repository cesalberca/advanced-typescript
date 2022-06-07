import type { CreateResponse } from './create-response'

export interface Creatable<Resource, Response = CreateResponse> {
  create(resource: Resource): Promise<Response>
}
