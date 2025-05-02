import StartEvent from "./start_event";

export default class DbEvent extends StartEvent {
  public dbName: string;
  public dbType: string;

  constructor(
    eventId: string,
    eventType: string,
    occuredAt: Date,
    initialDelay: number,
    dbName: string,
    dbType: string
  ) {
    super(eventId, eventType, occuredAt, initialDelay);
    this.dbName = dbName;
    this.dbType = dbType;
  }

  protected copyObject(dbEvent: DbEvent): DbEvent {
    super.copyObject(dbEvent);
    dbEvent.dbName = this.dbName;
    dbEvent.dbType = this.dbType;
    return dbEvent;
  }

  protected dummyObject(): DbEvent {
    return new DbEvent(
      null,
      null,
      null,
      null,
      null,
      null
    );
  }
  
  public clone(): DbEvent { 
    return this.copyObject(this.dummyObject());
  }
}