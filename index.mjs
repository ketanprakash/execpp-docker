import path from "path";
import fs from "fs/promises";
import { exec } from "child_process";
import os from "os";
const tmpDir = os.tmpdir();
import generateFileName from "./helpers/generateName.mjs";
import util from "util";
const execAsync = util.promisify(exec);

export const handler = async (event) => {
  // TODO implement
  const whatis = typeof event;
  const response = {
      statusCode: 200,
      code: JSON.stringify(event),
  }

  return response;

  // try {
  //   const fileName = await generateFileName();
  //   const { code, input = "" } = JSON.parse(event["body"]);

  //   const codePath = path.join(tmpDir, fileName + ".cpp");
  //   const inputPath = path.join(tmpDir, fileName + ".txt");
  //   const exePath = path.join(tmpDir, fileName + ".exe");

  //   await fs.writeFile(codePath, code, function (err) {
  //     if (err) throw err;
  //   });
  //   await fs.writeFile(inputPath, input, function (err) {
  //     if (err) throw err;
  //   });

  //   await execAsync(`g++ ${codePath} -o ${exePath}`);

  //   const { error, stdout, stderr } = await execAsync(
  //     `${exePath} < ${inputPath}`
  //   ).catch((error) => {
  //     throw error;
  //   });

  //   const output = error || stderr || stdout;
  //   await fs.unlink(codePath);
  //   await fs.unlink(inputPath);
  //   const response = {
  //     statusCode: 200,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     isBase64Encoded: false,
  //     body: JSON.stringify({ data: output, status: true }),
  //   };

  //   return response;
  // } catch (err) {
  //   const response = {
  //     statusCode: 500,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     isBase64Encoded: false,
  //     body: JSON.stringify({ data: `${err.message}`, status: false }),
  //   };

  //   return response;
  // }
};