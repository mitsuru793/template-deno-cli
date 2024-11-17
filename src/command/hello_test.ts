import { snapshotTest } from "@cliffy/testing";
import { helloCommand } from "./hello_command.ts";

await snapshotTest({
  name: "test stdout",
  meta: import.meta,
  async fn() {
    await helloCommand.parse(["--debug", "Hi", "Mike"]);
  },
});
