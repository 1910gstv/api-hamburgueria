export interface IProductRepository {
  save(user: any): Promise<any>;
  findById(id: string): Promise<any>;
}
