import BaseEvent from './base_event';

export default class StartEvent extends BaseEvent {
  public initialDelay: number;

  constructor(eventId: string, eventType: string, occuredAt: Date, initialDelay: number) {
    super(eventId, eventType, occuredAt);
    this.initialDelay = initialDelay;
  }

  protected copyObject(startEvent: StartEvent): StartEvent {
    super.copyObject(startEvent);
    startEvent.initialDelay = this.initialDelay;
    return startEvent;
  }

  protected dummyObject(): StartEvent {
    return new StartEvent(
      null,
      null,
      null,
      null
    );
  }

  public clone(): StartEvent {
    return this.copyObject(this.dummyObject()); 
  }
}
