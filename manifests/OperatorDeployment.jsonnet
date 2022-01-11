function(buildNumber) (
  local kube = import './kube.libsonnet';
  kube.Deployment(
    namespace='default',
    name='operator',
    replicas=1,
    containers=[
      kube.Container(name='operator', image='operator:' + buildNumber, imagePullPolicy='IfNotPresent') +
      {
        env+: [
          {
            name: 'PORT',
            value: '3000',
          },
          {
            name: 'BUILD_NUMBER',
            value: buildNumber,
          },
        ],
        ports+: [
          {
            name: 'web',
            protocol: 'TCP',
            containerPort: 3000,
          },
        ],
        livenessProbe+: {
          httpGet: {
            path: '/',
            port: 'web',
          },
        },
        readinessProbe+: {
          httpGet: {
            path: '/',
            port: 'web',
          },
        },
        resources+: {
          requests+: {
            cpu: '100m',
            memory: '100Mi',
          },
          limits+: {
            cpu: '500m',
            memory: '500Mi',
          },
        },
      },
    ],
  )
)
