# 65

My website where I try stuff!

Still a big WIP... And should forever be!

## Installation

```
docker build -t 65 .
```

Create /lib/systemd/system/65.service with:

```
[Unit]
Description=65 Container
After=docker.service
Requires=docker.service

[Service]
TimeoutStartSec=0
Restart=always
ExecStartPre=-/usr/bin/docker kill 65
ExecStartPre=-/usr/bin/docker rm 65
ExecStart=/usr/bin/docker run --rm --name 65 --publish 80:80 65
ExecStop=/usr/bin/docker stop 65

[Install]
WantedBy=multi-user.target
```

```
systemctl daemon-reload
```

```
systemctl start 65.service
```

```
systemctl enable 65.service
```

note: If needed, don't forget to setup your own `nginx/default.conf`!
