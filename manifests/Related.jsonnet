function(buildNumber) (
  local kube = import './kube.libsonnet';
  kube.CRD(kind='Related',
           singular='related',
           plural='relatedes',
           group='test.io',
           shortNames=[],
           versions=[
             {
               name: 'v1',
               served: true,
               storage: true,
               schema: {
                 openAPIV3Schema: {
                   type: 'object',
                   description: '',
                   required: ['spec'],
                   properties: {
                     spec: {
                       type: 'object',
                       required: [],
                       properties: {
                         prop: {
                           type: 'string',
                           description: '',
                         },
                       },
                     },
                     status: {
                       type: 'object',
                       description: 'Status of object',
                       properties: {
                         conditions: {
                           type: 'array',
                           default: [],
                           description: 'List of conditions',
                           items: {
                             type: 'object',
                             description: 'Condition',
                             required: ['type', 'status'],
                             properties: {
                               type: {
                                 type: 'string',
                                 description: 'Type of condition',
                               },
                               status: {
                                 type: 'string',
                                 description: 'Status of the condition, one of **True**, **False**, **Unknown**',
                                 enum: ['True', 'False', 'Unknown'],
                               },
                               reason: {
                                 type: 'string',
                                 description: "One-word CamelCase reason for the condition's last transition",
                               },
                               message: {
                                 type: 'string',
                                 description: 'Human-readable message indicating details about last transition',
                               },
                               lastHeartbeatTime: {
                                 type: 'string',
                                 description: 'Last time we got an update on a given condition',
                               },
                               lastTransitionTime: {
                                 type: 'string',
                                 description: 'Last time the condition transit from one status to another',
                               },
                             },
                           },
                         },
                         prop: {
                           type: 'string',
                           description: '',
                         },
                       },
                     },
                   },
                 },
               },
               subresources: {
                 status: {},
               },
             },
           ])
)
