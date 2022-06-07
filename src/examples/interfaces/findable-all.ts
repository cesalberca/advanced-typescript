export interface FindableAll<Resource> {
  findAll(): Promise<Resource[]>
}
