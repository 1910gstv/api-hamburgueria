import { ProductGateway } from "../../gateway/ProductGateway";
import { ILogger } from "../../interfaces/ILogger";
import { IProduct } from "../../../domain/entities/ProductEntity";
import { Validator } from "../../validators/Validator";

export class FindByIdUseCase {
  private readonly productGateway: ProductGateway;
  private readonly logger: ILogger;
  private readonly validator: Validator;

  constructor(productGateway: ProductGateway, logger: ILogger, validator: Validator) {
    this.productGateway = productGateway;
    this.logger = logger;
    this.validator = validator
  }

  public async findById(id: string): Promise<IProduct | Object> {
    const productFind = await this.productGateway.findById(id);
    if(!productFind){
        return {message: `Product ID ${id} not found!`};
    }

    return productFind;
  }

}