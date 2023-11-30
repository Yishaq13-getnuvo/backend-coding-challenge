import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  username: string;

  // TODO: add more constraints here
  @IsNotEmpty()
  password: string;
}
