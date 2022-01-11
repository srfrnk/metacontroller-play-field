FORCE:

setup: SHELL:=/bin/bash
setup: FORCE
	kubectl apply -k https://github.com/metacontroller/metacontroller/manifests/production
	- kubectl create --save-config namespace efk
	- kubectl create --save-config namespace test1
	- kubectl create --save-config namespace test2
	kubectl apply -n efk -f https://github.com/srfrnk/efk-stack-helm/releases/latest/download/efk-manifests.yaml
	kubectl wait -n efk --for=condition=complete --timeout=600s job/initializer
	@tput bold
	@tput setaf 2
	@echo
	@echo "You can view Kibana in your browser by going to http://localhost:5601/app/discover"
	@echo
	@tput sgr0
	kubectl port-forward -n efk svc/efk-kibana 5601

build_number: FORCE
	$(eval BUILD_NUMBER=$(shell od -An -N10 -i /dev/urandom | tr -d ' -' ))

build: FORCE build_number
	- mkdir build
	eval $$(minikube docker-env) && docker build ./operator -t operator:${BUILD_NUMBER}
	docker run --mount "type=bind,src=$$(pwd)/manifests,dst=/src" ghcr.io/srfrnk/k8s-jsonnet-manifest-packager:latest -- /src \
		--tla-str 'buildNumber=${BUILD_NUMBER}' \
		> build/manifests.yaml
	kubectl apply -n default -f build/manifests.yaml

deploy-tests: FORCE
	kubectl apply -f tests.yaml
