import FileGenerator from "./file_generator";
import { ExportDataFormat } from "./defined_types";

export default class CsvGenerator implements FileGenerator {
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  generate(data: ExportDataFormat) {
    const csvContent = data.map(row => row.join(',')).join('\n');
    console.log(`Generating CSV file: ${this.fileName}`);
    console.log(csvContent);
  }
}
