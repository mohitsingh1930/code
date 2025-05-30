import SimpleFactoryLogger from "./simple_factory";
import StdoutLogger from "./stdout_logger";
import FileLogger from "./file_logger";

const logger = new SimpleFactoryLogger();
logger.print("stdout", Math.random().toString());
logger.print("file", Math.random().toString());


const stdoutLogger = new StdoutLogger();
stdoutLogger.print(Math.random().toString());
const fileLogger = new FileLogger();
fileLogger.print(Math.random().toString());