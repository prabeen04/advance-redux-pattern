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

    logToSentry(err) {
        this.sentry.captureException(err)
    }

    getInstance() {
        return this.sentry
    }
}
export const sentry = new SentryClass()