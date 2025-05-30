import Logger from './logger';
import FileLog from './file_log';

export default class FileLogger extends Logger {
    public createLog() {
        return new FileLog();
    }
}