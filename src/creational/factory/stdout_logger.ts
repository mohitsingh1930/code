import Logger from './logger';
import StdoutLog from './stdout_log';

export default class StdoutLogger extends Logger {
    public createLog() {
        return new StdoutLog();
    }
}