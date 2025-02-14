const os = require("os");
const { exec } = require("child_process");

function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    const addresses = interfaces[interfaceName];
    for (const address of addresses) {
      if (address.family === "IPv4" && !address.internal) {
        return address.address;
      }
    }
  }
  return "localhost";
}

const ip = getLocalIPAddress();
const port = 3000;

console.log(`Iniciando JSON Server em http://${ip}:${port}`);
exec(
  `json-server --watch ./db/database.json --host ${ip} --port ${port}`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao iniciar o json-server: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Aviso: ${stderr}`);
      return;
    }
    console.log(stdout);
  }
);
