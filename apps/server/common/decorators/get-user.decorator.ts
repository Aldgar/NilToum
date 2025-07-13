import { createParamDecorator, ExecutionContext } from '@nestjs/common';

interface RequestWithUser extends Request {
  user?: Record<string, any>;
}

/**
 * Custom decorator to extract the current user from the request
 * This will be useful when you add authentication later
 *
 * Usage: @GetUser() user: User
 */
export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext): any => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    if (!user) {
      return null;
    }

    // If data is provided, return specific property of user
    // e.g., @GetUser('id') will return user.id
    return data ? user[data] : user;
  },
);
