import { SetMetadata } from '@nestjs/common';

export const Link = (...args: string[]) => SetMetadata('link', args);
