import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#8B5CF6")(`
█▀▄ █▀▀ █ █ █▀█   █ █ █▀▀ █▀█ █▀▀ █▀▀
█ █ ██▄ █▄█ █▀█   ▀▄▀ ██▄ █▀▄ ▄██ ██▄

𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 :
 ▢ 𝚃𝚎𝚕𝚎𝚐𝚛𝚊𝚖 :  @DewaInvictusNew
`));
console.log(chalk.hex("#00c2ff")("𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦 𝗕𝗔𝗜𝗟𝗘𝗬𝗦\n"));
console.log(chalk.gray("𝗦𝗘𝗟𝗔𝗠𝗔𝗧 𝗠𝗘𝗡𝗚𝗨𝗡𝗔𝗞𝗔𝗡 𝗕𝗔𝗜𝗟𝗘𝗬𝗦 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦\n"));
console.log(chalk.cyan("https://t.me/DewaInvictusNew\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map