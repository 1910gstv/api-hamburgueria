import { IProduct, Product } from '../../../domain/entities/ProductEntity';
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
    const schema = {
        name: "string",
        description: "string",
        image: "string",
        available: "boolean",
        price: "number",
    }
    const missingParams: string[] = [];
    this.validator.missing(data.name, "name", missingParams);
    this.validator.missing(data.description, "description", missingParams);
    this.validator.missing(data.price, "price", missingParams);
    this.validator.missing(data.available, "available", missingParams);

    for(const [field, expectedType] of Object.entries(schema)){
        const value = data[field as keyof CreateProductDTO] // as keyof CreateProductDTO garante ao typescript que o field passado existe dentro CreateProductDTO
        if(typeof value != expectedType){
            throw new HttpError(`${field} field must be a ${expectedType}`, 400)
        }
    }

    if (missingParams.length > 0) {
        throw new HttpError(
            `Missing fields are required: ${missingParams.join(", ")}`,
            400
        );
    }
    // criar validação para parametros que estejam faltando e devolver um erro, 
    // mas sem quebrar a API
    return this.productGateway.create(data);
  }
}
