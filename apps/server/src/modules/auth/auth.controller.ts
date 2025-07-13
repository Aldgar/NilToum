import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GetUser } from '../../../common/decorators/get-user.decorator';

interface AuthenticatedUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  headline: string | null;
  bio: string | null;
  location: string | null;
  profilePic: string | null;
  createdAt: Date;
  updatedAt: Date;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@GetUser() user: AuthenticatedUser) {
    return this.authService.getProfile(user.id);
  }
}
