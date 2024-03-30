import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { UppercasePipe } from './uppercase/uppercase.pipe';

@Controller()
export class AppController {
  @Get()
  @UsePipes(UppercasePipe)
  getData(@Query('data') data: string): string {
    return data || '';
  }
}