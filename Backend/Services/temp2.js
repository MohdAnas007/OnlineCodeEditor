const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const { EnsureContainer } = require('./Temp');

const RunDockerContainer = async (codeFilePath, InputFilePath) => {
  return new Promise(async (resolve, reject) => {
    try {
      const workdir = path.resolve('./cpp_runner_workdir');
      if (!fs.existsSync(workdir)) {
        fs.mkdirSync(workdir, { recursive: true });
      }

      // check if container is running or not 
      await EnsureContainer(workdir);

      // now copy file into mounted directory 
      const absolutePathcode = path.resolve(codeFilePath);
      const absolutePathInput = path.resolve(InputFilePath);

      // copy the content of file into mounted directory 
      fs.copyFileSync(absolutePathcode, path.join(workdir, 'code.cpp'));
      fs.copyFileSync(absolutePathInput, path.join(workdir, 'input.txt'));

      const cmd = `docker exec cpp_runner sh -c "g++ /app/code.cpp -o /app/a.out && /app/a.out < /app/input.txt"`;

      exec(cmd, { timeout: 5000 }, (err, stdout, stderr) => {
        if (err) {
          if (err.killed) return reject("Time Limit Exceeded");
          if (stderr.includes("Killed")) return reject("Memory Limit Exceeded");
          return reject(stderr || err.message);
        }
        resolve(stdout);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { RunDockerContainer };
