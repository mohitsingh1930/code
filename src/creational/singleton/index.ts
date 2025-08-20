import DbAdapter from "./db_adapter";

function main() {
    const dbAdapter1 = DbAdapter.getInstance();
    const dbAdapter2 = DbAdapter.getInstance();

    // Both dbAdapter1 and dbAdapter2 should be the same instance
    console.log("Are both instances the same?", dbAdapter1 === dbAdapter2);
};

main();
