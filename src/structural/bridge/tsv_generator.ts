import FileGenerator from "./file_generator";
import { ExportDataFormat } from "./defined_types";

export default class TsvGenerator implements FileGenerator {
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  generate(data: ExportDataFormat) {
    const tsvContent = data.map(row => row.join('\t')).join('\n');
    console.log(`Generating TSV file: ${this.fileName}`);
    console.log(tsvContent);
  }
}
