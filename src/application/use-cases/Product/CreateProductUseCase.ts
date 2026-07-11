import { IProduct } from '../../../domain/entities/ProductEntity';
import { ProductGateway } from '../../gateway/ProductGateway';
import { ILogger } from '../../interfaces/ILogger';
import { Validator } from '../../validators/Validator';
import { HttpError } from '../Exceptions/Exceptions';
import { CreateProductDTO } from './ProductDTO';

export class CreateProductUseCase {
  private readonly productGateway: ProductGateway;
  private readonly logger: ILogger
  private readonly validator: Validator

  constructor(productGateway: ProductGateway, logger: ILogger, validator: Validator) {
    this.productGateway = productGateway;
    this.logger = logger;
    this.validator = validator
  }

  public async createProduct(data: CreateProductDTO): Promise<IProduct | string> {

    const missingParams: string[] = [];

    this.validator.missing(data.name, "name", missingParams);
    this.validator.missing(data.description, "description", missingParams);
    this.validator.missing(data.price, "price", missingParams);
    this.validator.missing(data.available, "available", missingParams);

    if (missingParams.length > 0) {
        throw new HttpError(
            `Os seguintes campos são obrigatórios: ${missingParams.join(", ")}`,
            400
        );
    }
    // criar validação para parametros que estejam faltando e devolver um erro, 
    // mas sem quebrar a API
    return this.productGateway.create(data);
  }
}
