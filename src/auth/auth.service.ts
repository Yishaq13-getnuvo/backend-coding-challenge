import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, password) {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new HttpException('User not found', 404);
    }

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    if (password !== user.password) {
      throw new HttpException('Wrong password', 401);
    }

    // valida credentials at this point

    // create JWT token with user info
    const token = this.jwtService.sign({
      userId: user.userId,
      username: user.username,
    });

    return { token };
  }
}
