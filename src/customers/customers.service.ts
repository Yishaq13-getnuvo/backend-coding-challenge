import { Injectable } from '@nestjs/common';
import { customers } from '../Mocks/customers';

@Injectable()
export class CustomersService {
  // TODO: add Customer type
  async getAll() {
    return customers;
  }
}
