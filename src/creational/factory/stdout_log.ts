import Log from "./log_interface"

// log to stdout channel

export default class StdoutLog implements Log {
    public publish(body: string) {
        console.log("Logging to stdout channel");
        console.log(body);
    }
}