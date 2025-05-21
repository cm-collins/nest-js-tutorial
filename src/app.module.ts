import { Module, Global, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/Controller/cats.controller';
import { CatsService } from './cats/services/cats.service';
import { FeaturesModule } from './features/features.module';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
@Global()
@Module({
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
  imports: [FeaturesModule, CatsModule],
  exports: [CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
