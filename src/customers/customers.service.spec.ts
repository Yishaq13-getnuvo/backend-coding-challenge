import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users/users.service';

// Mock some dependencies before importing CustomersService
jest.mock('../Mocks/customers', () => ({
  customers: [
    { customer_id: '1', name: 'Test 1', email: 'test1@example.com' },
    { customer_id: '2', name: 'Test 2', email: 'test2@example.com' },
  ],
}));
import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersService, { provide: UsersService, useValue: {} }],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', async () => {
      const result = await service.getAll();
      expect(result).toBeInstanceOf(Array);
    });

    it('should return mocked customers', async () => {
      const result = await service.getAll();
      expect(result).toStrictEqual([
        { customer_id: '1', name: 'Test 1', email: 'test1@example.com' },
        { customer_id: '2', name: 'Test 2', email: 'test2@example.com' },
      ]);
    });
  });
});
