import * as Sentry from '@sentry/browser';

class SentryClass {
    constructor() {
        this.sentry = process.env.NODE_ENV === 'production'
            ? Sentry
            : Sentry
    }

    initialize(dsn) {
        this.sentry.init({ dsn })
    }
}
export const sentry = new SentryClass()