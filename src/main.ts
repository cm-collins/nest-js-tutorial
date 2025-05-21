/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { RolesGuard } from './cats/guards/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.useGlobalGuards(new RolesGuard());
  const PORT = process.env.PORT || 3001;
  await app.listen(PORT);
  console.log(`Apllication is runnning successfully on port ${PORT}`);
}

bootstrap();
