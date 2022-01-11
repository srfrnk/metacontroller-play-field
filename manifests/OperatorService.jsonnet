function(buildNumber) (
  local kube = import './kube.libsonnet';

  [
    kube.Service(headless=true, namespace='default', name='operator', labels={
      app: 'operator',
    }, selector={
      app: 'operator',
    }, ports=[{
      protocol: 'TCP',
      targetPort: 3000,
      port: 3000,
      name: 'web',
    }]),
  ]
)
