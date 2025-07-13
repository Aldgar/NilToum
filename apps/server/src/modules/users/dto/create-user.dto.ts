export class CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  headline?: string;
  bio?: string;
  location?: string;
}
