import { ExportDataFormat } from "./defined_types";

export default interface FileGenerator {
  fileName: string;
  generate(data: ExportDataFormat): void;
}
