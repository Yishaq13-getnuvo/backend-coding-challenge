import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  const mockAuthGuard = {
    canActivate: jest.fn((context) => {
      return true; // Always allow access in tests
    }),
  };

  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersService],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of customers', async () => {
    const result = await service.getAll();
    expect(result).toBeInstanceOf(Array);
  });
});
