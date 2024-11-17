import { helloCommand } from "./command/hello_command.ts";

if (import.meta.main) {
  await helloCommand.parse(Deno.args);
}
