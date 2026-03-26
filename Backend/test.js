// const axios = require('axios');

// async function sendRequest(user) {
//   const start=Date.now();

//   try {
//     const res = await axios.post('http://localhost:8080/api/runcode', {
//       code: `print("Hello from ${user}")`,
//       input: "",
//       language: "python"
//     });
//     console.log(`User ${user} result:`, res.data);
//     console.log((Date.now()-start)/1000);

//   } catch (err) {
//     console.error(`User ${user} error:`, err.response?.data || err.message);
//   }
// }

// async function main() {
//   const users = Array.from({ length: 40 }, (_, i) => `User${i+1}`);
//   const start=Date.now();

//   await Promise.all(users.map(u => sendRequest(u)));
//   console.log((Date.now()-start)/1000);
// }

// main();

const axios = require('axios');

async function sendRequest(user) {
  const start = Date.now();
  try {
    const res = await axios.post('http://localhost:8080/api/runcode', {
      code: `print("Hello from ${user}")`,
      input: "",
      language: "python"
    });
    const durationSec = (Date.now() - start) / 1000;
    return { user, durationSec, success: true };
  } catch (err) {
    const durationSec = (Date.now() - start) / 1000;
    return { user, durationSec, success: false, error: err.message };
  }
}

//fmnkfgf

async function main() {
  const users = Array.from({ length: 40 }, (_, i) => `User${i+1}`);
  const startAll = Date.now();

  const results = await Promise.all(users.map(u => sendRequest(u)));
  const totalSec = (Date.now() - startAll) / 1000;

  console.log("---- Summary ----");
  console.log("Total time:", totalSec.toFixed(2), "s");
  console.log("Average:", (results.reduce((a,b)=>a+b.durationSec,0)/results.length).toFixed(2), "s");
  console.log("Fastest:", Math.min(...results.map(r=>r.durationSec)).toFixed(2), "s");
  console.log("Slowest:", Math.max(...results.map(r=>r.durationSec)).toFixed(2), "s");
}
main();

