import { IProduct } from '../../../domain/entities/ProductEntity';
import { ProductGateway } from '../../gateway/ProductGateway';
import { ILogger } from '../../interfaces/ILogger';
import { CreateProductDTO } from './ProductDTO';

export class CreateProductUseCase {
  public productGateway: ProductGateway;
  public logger: ILogger

  constructor(productGateway: ProductGateway, logger: ILogger) {
    this.productGateway = productGateway;
    this.logger = logger;
  }

  public async createProduct(data: CreateProductDTO): Promise<IProduct | string> {
    // criar validação para parametros que estejam faltando e devolver um erro, 
    // mas sem quebrar a API
    return this.productGateway.create(data);
  }

}
