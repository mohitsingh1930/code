import StartEvent from "./start_event";
import DbEvent from "./db_event";

(
  function main() {
    const startEvent = new StartEvent(
      "1",
      "StartEvent",
      new Date(),
      1000
    );
    const startEventClone = startEvent.clone();
    console.log("Original StartEvent:", startEvent);
    console.log("Cloned StartEvent:", startEventClone);
    console.log("Are they the same object?", startEvent === startEventClone);

    const dbEvent = new DbEvent(
      "2",
      "DbEvent",
      new Date(),
      2000,
      "myDatabase",
      "SQL"
    );
    const dbEventClone = dbEvent.clone();
    console.log("Original DbEvent:", dbEvent);
    console.log("Cloned DbEvent:", dbEventClone);
    console.log("Are they the same object?", dbEvent === dbEventClone);
    console.log("Are the original and cloned DbEvent the same?", dbEvent === dbEventClone);
  }
)();