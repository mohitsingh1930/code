// simple factory pattern

import Log from './log_interface';
import StdoutLog from './stdout_log';
import FileLog from './file_log';

// SimpleFactoryLogger class responsible for logging the body to the given channel

export default class SimpleFactoryLogger {
    public print(channel: string, body: string): Log {
        let log: Log;
        if(channel == "stdout") {
            log = new StdoutLog();
        } else if(channel == "file") {
            log = new FileLog();
        }

        log.publish(body);
        return log;
    }
}

