// Factory method pattern

import Log from './log_interface';

// Logger class responsible for logging the body to the log channel

export default abstract class Logger {
    public print(body: string) {
        const log = this.createLog();
        log.publish(body);
        return log;
    }

    public abstract createLog(): Log;
}