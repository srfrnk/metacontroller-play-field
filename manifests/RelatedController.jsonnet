function(buildNumber) (
  local kube = import './kube.libsonnet';
  local metacontroller = import './metacontroller.libsonnet';
  metacontroller.DecoratorController(namespace='default',
                                     name='related-controller',
                                     resources=[
                                       {
                                         apiVersion: 'test.io/v1',
                                         resource: 'relatedes',
                                       },
                                     ],
                                     attachments=[],
                                     syncHook={
                                       webhook: {
                                         url: 'http://operator.default:3000/relatedes-sync',
                                         timeout: '10s',
                                       },
                                     },
                                     customize={
                                       webhook: {
                                         url: 'http://operator.default:3000/relatedes-customize',
                                         timeout: '10s',
                                       },
                                     },
                                     finalize={
                                       webhook: {
                                         url: 'http://operator.default:3000/relatedes-finalize',
                                         timeout: '10s',
                                       },
                                     },
                                     resyncPeriodSeconds=30)
)
