import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

/**
 * Custom pipe to validate MongoDB ObjectId format
 * This ensures that route parameters like :id are valid MongoDB ObjectIds
 *
 * Usage: @Param('id', ParseObjectIdPipe) id: string
 */
@Injectable()
export class ParseObjectIdPipe implements PipeTransform<string, string> {
  transform(value: string): string {
    // Simple ObjectId validation (24 character hex string)
    const objectIdRegex = /^[a-fA-F0-9]{24}$/;

    if (!objectIdRegex.test(value)) {
      throw new BadRequestException(`Invalid ObjectId: ${value}`);
    }

    return value;
  }
}
