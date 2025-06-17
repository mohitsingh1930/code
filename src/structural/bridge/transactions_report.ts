import Report from './report';
import { ExportDataFormat } from './defined_types';

export default class TransactionsReport extends Report {

  fetchData(): ExportDataFormat {
    // Simulate fetching transactions data
    return [
      ['Transaction ID', 'Amount', 'Date'],
      ['T001', '100.00', '2023-10-01'],
      ['T002', '200.00', '2023-10-02'],
      ['T003', '150.00', '2023-10-03'],
      ['T004', '300.00', '2023-10-04']
    ];
  }
}
