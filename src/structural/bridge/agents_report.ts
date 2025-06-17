import Report from './report';
import { ExportDataFormat } from './defined_types';

export default class AgentsReport extends Report {

  fetchData(): ExportDataFormat {
    // Simulate fetching agents data
    return [
      ['Name', 'Status'],
      ['Agent 1', 'Active'],
      ['Agent 2', 'Inactive'],
      ['Agent 3', 'Active'],
      ['Agent 4', 'On Leave']
    ];
  }
}
