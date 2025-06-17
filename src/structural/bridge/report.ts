import FileGenerator from "./file_generator";
import { ExportDataFormat } from "./defined_types";

export default abstract class Report {
  protected fileGenerator: FileGenerator;

  constructor(fileGenerator: FileGenerator) {
    this.fileGenerator = fileGenerator;
  }

  abstract fetchData(): ExportDataFormat;

  saveReport(): string {
    const agentsData = this.fetchData();
    this.fileGenerator.generate(agentsData);
    return this.fileGenerator.fileName;
  }
}
