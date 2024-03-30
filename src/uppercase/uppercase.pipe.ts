import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform<string, string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    if (!value) {
      return ''; // Если значение отсутствует, просто возвращаем пустую строку
    }
    return value.toUpperCase(); // Преобразуем значение в верхний регистр
  }
}