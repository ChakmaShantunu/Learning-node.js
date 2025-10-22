const userName = process.argv[2] || "Guest";
global.appName = 'System Info CLI';

const envArg = process.argv.find(arg => arg.startsWith('--env='));
if (envArg) {
    process.env.NODE_ENV = envArg.split('=')[1]
}


console.log("hello:", userName);
console.log("app name:", appName);
console.log("current directory:", __dirname);
console.log("current file:", __filename);
console.log("node version:", process.version);
console.log("platform:", process.platform);
console.log("Process ID:", process.pid);
console.log("environment mode:", process.env.NODE_ENV);
console.log(`Running in ${process.env.NODE_ENV} mode`);


