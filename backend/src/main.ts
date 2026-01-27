import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para permitir requests desde el frontend
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000'], // URLs del frontend
    credentials: true,
  });
  
  // Habilitar validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  
  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0'); // Escuchar en todas las interfaces para Render/Railway
  console.log(`🚀 Backend running on: http://localhost:${port}`);
}
bootstrap();
