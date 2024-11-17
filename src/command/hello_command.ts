import { Command } from "@cliffy/command";

type Option = {
  debug?: boolean;
};

export const helloCommand = new Command()
  .name("cliffy")
  .version("0.1.0")
  .description("Command line framework for Deno")
  .option("-d, --debug", "output debug log")
  .arguments("<greetMessage:string> [targetPartson:string]")
  .action((options, greetMessage, targetPartson) => {
    main(options, greetMessage, targetPartson);
  });

function main(
  options: Option,
  greetMessage: string,
  targetPartson: string | undefined,
): void {
  const isDebug = options.debug === true;
  if (isDebug) console.log("start main function");
  console.log(`${targetPartson}, ${greetMessage}!`);
  if (isDebug) console.log("end main function");
}
