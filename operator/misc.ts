export function debugName(request) {
  try {
    return (request.body.parent || request.body.object).metadata.name;
  }
  catch {
    return 'MISSING';
  }
}

export function debugNamespace(request) {
  try {
    return (request.body.parent || request.body.object).metadata.namespace;
  }
  catch {
    return 'MISSING';
  }
}
