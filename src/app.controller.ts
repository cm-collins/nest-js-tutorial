import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Handles GET /hello
   */
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Handles POST /hello
   */
  @Post('hello')
  createHello(): string {
    return this.appService.createHello();
  }

  /**
   * Redirects GET / to /login
   */
  @Get()
  index(@Res() res: Response) {
    res.status(302).redirect('/login');
  }
}
