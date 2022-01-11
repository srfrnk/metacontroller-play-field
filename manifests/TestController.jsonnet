function(buildNumber) (
  local kube = import './kube.libsonnet';
  local metacontroller = import './metacontroller.libsonnet';
  metacontroller.DecoratorController(namespace='default',
                                     name='test-controller',
                                     resources=[
                                       {
                                         apiVersion: 'test.io/v1',
                                         resource: 'tests',
                                       },
                                     ],
                                     attachments=[],
                                     syncHook={
                                       webhook: {
                                         url: 'http://operator.default:3000/tests-sync',
                                         timeout: '10s',
                                       },
                                     },
                                     customize={
                                       webhook: {
                                         url: 'http://operator.default:3000/tests-customize',
                                         timeout: '10s',
                                       },
                                     },
                                     finalize={
                                       webhook: {
                                         url: 'http://operator.default:3000/tests-finalize',
                                         timeout: '10s',
                                       },
                                     },
                                     resyncPeriodSeconds=30)
)
