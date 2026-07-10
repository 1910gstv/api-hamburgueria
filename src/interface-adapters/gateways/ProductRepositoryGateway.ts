import { ProductGateway } from "../../application/gateway/ProductGateway";
import { ProductMapper } from "../../application/mappers/ProductMapper";
import { CreateProductDTO } from "../../application/use-cases/Product/ProductDTO";
import { IProduct } from "../../domain/entities/ProductEntity";
import { IProductRepository } from "../../domain/repositories/IProductRepository";

export class ProductRepositoryGateway implements ProductGateway {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository){
    this.productRepository = productRepository;
  }
  public async create(data: CreateProductDTO): Promise<IProduct> {
    const newProduct = await this.productRepository.save(data)
    return ProductMapper.createProductResponse(newProduct)
  }

  public async delete(id: string): Promise<void> {
    return;
  }

  public async findAll(): Promise<IProduct[] | null> {
    return null;
  }

  public async findById(id: string): Promise<IProduct | null> {
    return null;
  }

  public async update(data: IProduct): Promise<IProduct | null> {
    return null;
  }
}
