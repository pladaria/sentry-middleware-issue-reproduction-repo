import {NextResponse} from 'next/server';
import * as Sentry from '@sentry/nextjs';

import type {NextRequest} from 'next/server';

export const middleware = (request: NextRequest): NextResponse => {
    Sentry.captureException(new Error('Sentry Example Middleware Error (with-src)'));
    Sentry.captureMessage('Sentry Example Middleware Message (with-src)', {
        level: 'info',
        extra: {
            method: request.method,
            path: request.nextUrl.pathname,
        },
    });
    console.log(request.method + ' ' + request.nextUrl.pathname);
    return NextResponse.next();
};
