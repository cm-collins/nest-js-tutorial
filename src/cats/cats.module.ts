import { Module } from '@nestjs/common';
import { CatsController } from './Controller/cats.controller';
import { CatsService } from './services/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
