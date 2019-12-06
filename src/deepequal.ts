function nullEqual(val1, val2) {
  return !val1 && !val2;
}

function arrayEqual(val1: any, val2: any) {
  if (!Array.isArray(val1) || !Array.isArray(val2)) return false;

  if (val1.length !== val2.length) return false;

  for (let i = 0; i < val1.length; i += 1) {
    if (!deepEqual(val1[i], val2[i])) return false;
  }

  return true;
}

function objectEqual(val1: object, val2: object) {
  for (const key in val1) {
    if (!deepEqual(val1[key], val2[key])) return false;
  }

  for (const key in val2) {
    if (!deepEqual(val2[key], val1[key])) return false;
  }

  return true;
}

/**
 * Compares two values, returns true if equal, false if not equal.
 * If the values has different types, they are not equal.
 * Does a deep compare. Can only handle objects that is used
 * like a key/value-map, no support for prototype chains.
 * Doesn't support date yet.
 *
 * @param val1
 * @param val2
 */
export function deepEqual(val1: any, val2: any): boolean {
  if (typeof val1 !== typeof val2) return false;

  if (typeof val1 === 'object') {
    if (!val1 || !val2) return nullEqual(val1, val2);

    if (Array.isArray(val1) || Array.isArray(val2)) {
      return arrayEqual(val1, val2);
    }

    return objectEqual(val1, val2);
  }

  return val1 === val2;
}
