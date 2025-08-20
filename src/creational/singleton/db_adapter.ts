export default class DbAdapter {
  private static instance: DbAdapter;

  private constructor() {
    // Private constructor to prevent instantiation
    // Initialize database connection or other resources here
  }

  public static getInstance(): DbAdapter {
    if(!this.instance) {
      this.instance = new DbAdapter();
    }

    return this.instance;
  }
}
