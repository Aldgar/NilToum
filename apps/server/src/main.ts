import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS for frontend
  app.enableCors();

  await app.listen(process.env.PORT ?? 5005);
}

void bootstrap();
