import AgentsReport from "./agents_report";
import TransactionsReport from "./transactions_report";
import CsvGenerator from "./csv_generator";
import TsvGenerator from "./tsv_generator";

function main() {
  // Create instances of the file generators
  const agentsCsvGenerator = new CsvGenerator("agents.csv");
  const agentsTsvGenerator = new TsvGenerator("agents.tsv");

  const transactionsCsvGenerator = new CsvGenerator("transactions.csv");
  const transactionsTsvGenerator = new TsvGenerator("transactions.tsv");

  // Create instanes of reports using the file generators
  const agentsCsvReport = new AgentsReport(agentsCsvGenerator);
  const agentsTsvReport = new TransactionsReport(agentsTsvGenerator);

  const transactionsCsvReport = new TransactionsReport(transactionsCsvGenerator);
  const transactionsTsvReport = new AgentsReport(transactionsTsvGenerator);

  // generate reports
  console.log("\nGenerating Agents CSV Report:");
  console.log(agentsCsvReport.saveReport());
  console.log("\nGenerating Agents TSV Report:");
  console.log(agentsTsvReport.saveReport());
  console.log("\nGenerating Transactions CSV Report:");
  console.log(transactionsCsvReport.saveReport());
  console.log("\nGenerating Transactions TSV Report:");
  console.log(transactionsTsvReport.saveReport());

}

main();
