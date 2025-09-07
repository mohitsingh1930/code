import * as fs from "fs";
import * as path from "path";
import Log from "./log_interface"

// log to file channel

export default class FileLog implements Log {
    static filePath: string = path.join("/home/mohit/work/code/logs/app.log");

    public publish(body: string) {
        console.log("logging to file channel");
        body = body + "\n";
        fs.appendFileSync(FileLog.filePath, body, "utf-8");
    }
}