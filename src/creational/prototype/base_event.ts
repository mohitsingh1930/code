export default abstract class BaseEvent {
  public occuredAt: Date;
  public eventType: string;
  private eventId: string;

  constructor(eventId: string, eventType: string, occuredAt: Date) {
    this.eventId = eventId;
    this.eventType = eventType;
    this.occuredAt = occuredAt;
  }

  protected copyObject(event: BaseEvent): BaseEvent {
    event.eventId = this.eventId;
    event.eventType = this.eventType;
    event.occuredAt = this.occuredAt;
    return event;
  }

  protected abstract dummyObject(): BaseEvent;

  public abstract clone(): BaseEvent;
}