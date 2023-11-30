import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('customers')
@UseGuards(AuthGuard)
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  async getAll() {
    const customers = await this.customersService.getAll();
    return customers;
  }
}
