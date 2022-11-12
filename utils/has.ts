const has = function (obj: Record<string, any>, key: string): boolean {
  var keyParts = key.split('.');

  return !!obj && (
    keyParts.length > 1
      ? has(obj[key.split('.')[0]], keyParts.slice(1).join('.'))
      : Object.hasOwnProperty.call(obj, key)
  );
};

export default has;