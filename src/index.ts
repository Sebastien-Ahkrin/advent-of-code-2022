import fs from "fs/promises";
import path from "path";

const builtDir = path.join(__dirname, "days");
const inputDir = path.join(__dirname, "../inputs");

async function exec() {
  const dir = await fs.readdir(path.join(__dirname, "days"));

  for (const completeFileName of dir.filter((name) => name.includes(".js"))) {
    const fileName = completeFileName.split(".")[0];

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const file = require(path.join(builtDir, `${fileName}.js`));
    const input = await fs.readFile(
      path.join(inputDir, `${fileName}.txt`),
      "utf-8"
    );

    console.log(`RUN: ${fileName}`, await file.run(input));
  }
}

exec().catch(console.error);
