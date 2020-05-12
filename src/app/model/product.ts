import { User } from './User';
import { ProductStatus } from './ProductStatus';
import { PaymentMode } from './PaymentMode';

export class Product {
    
    id: string;
    name: string;
    image: string;
    price: string;
    unit: string;
    description: string;
    rating: string;
    reviews: string[];
    status: ProductStatus;
    paymentmode: PaymentMode[];
    sellerDetails: User;
}