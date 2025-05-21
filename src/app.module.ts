import { Module, Global, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/Controller/cats.controller';
import { CatsService } from './cats/services/cats.service';
import { FeaturesModule } from './features/features.module';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './cats/guards/roles.guard';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Global()
@Module({
  controllers: [AppController, CatsController],
  providers: [
    AppService,
    CatsService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [FeaturesModule, CatsModule, AuthModule, UsersModule],
  exports: [CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
