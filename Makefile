FORCE:

setup: SHELL:=/bin/bash
setup: FORCE
	kubectl apply -k https://github.com/metacontroller/metacontroller/manifests/production
