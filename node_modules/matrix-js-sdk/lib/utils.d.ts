/**
 * Encode a dictionary of query parameters.
 * @param {Object} params A dict of key/values to encode e.g.
 * {"foo": "bar", "baz": "taz"}
 * @return {string} The encoded string e.g. foo=bar&baz=taz
 */
export declare function encodeParams(params: Record<string, string>): string;
/**
 * Encodes a URI according to a set of template variables. Variables will be
 * passed through encodeURIComponent.
 * @param {string} pathTemplate The path with template variables e.g. '/foo/$bar'.
 * @param {Object} variables The key/value pairs to replace the template
 * variables with. E.g. { "$bar": "baz" }.
 * @return {string} The result of replacing all template variables e.g. '/foo/baz'.
 */
export declare function encodeUri(pathTemplate: string, variables: Record<string, string>): string;
/**
 * Applies a map function to the given array.
 * @param {Array} array The array to apply the function to.
 * @param {Function} fn The function that will be invoked for each element in
 * the array with the signature <code>fn(element){...}</code>
 * @return {Array} A new array with the results of the function.
 */
export declare function map<T, S>(array: T[], fn: (t: T) => S): S[];
/**
 * Applies a filter function to the given array.
 * @param {Array} array The array to apply the function to.
 * @param {Function} fn The function that will be invoked for each element in
 * the array. It should return true to keep the element. The function signature
 * looks like <code>fn(element, index, array){...}</code>.
 * @return {Array} A new array with the results of the function.
 */
export declare function filter<T>(array: T[], fn: (t: T, i?: number, a?: T[]) => boolean): T[];
/**
 * Get the keys for an object. Same as <code>Object.keys()</code>.
 * @param {Object} obj The object to get the keys for.
 * @return {string[]} The keys of the object.
 */
export declare function keys(obj: object): string[];
/**
 * Get the values for an object.
 * @param {Object} obj The object to get the values for.
 * @return {Array<*>} The values of the object.
 */
export declare function values<T>(obj: Record<string, T>): T[];
/**
 * Invoke a function for each item in the array.
 * @param {Array} array The array.
 * @param {Function} fn The function to invoke for each element. Has the
 * function signature <code>fn(element, index)</code>.
 */
export declare function forEach<T>(array: T[], fn: (t: T, i: number) => void): void;
/**
 * The findElement() method returns a value in the array, if an element in the array
 * satisfies (returns true) the provided testing function. Otherwise undefined
 * is returned.
 * @param {Array} array The array.
 * @param {Function} fn Function to execute on each value in the array, with the
 * function signature <code>fn(element, index, array)</code>
 * @param {boolean} reverse True to search in reverse order.
 * @return {*} The first value in the array which returns <code>true</code> for
 * the given function.
 */
export declare function findElement<T>(array: T[], fn: (t: T, i?: number, a?: T[]) => boolean, reverse?: boolean): T;
/**
 * The removeElement() method removes the first element in the array that
 * satisfies (returns true) the provided testing function.
 * @param {Array} array The array.
 * @param {Function} fn Function to execute on each value in the array, with the
 * function signature <code>fn(element, index, array)</code>. Return true to
 * remove this element and break.
 * @param {boolean} reverse True to search in reverse order.
 * @return {boolean} True if an element was removed.
 */
export declare function removeElement<T>(array: T[], fn: (t: T, i?: number, a?: T[]) => boolean, reverse?: boolean): any;
/**
 * Checks if the given thing is a function.
 * @param {*} value The thing to check.
 * @return {boolean} True if it is a function.
 */
export declare function isFunction(value: any): boolean;
/**
 * Checks if the given thing is an array.
 * @param {*} value The thing to check.
 * @return {boolean} True if it is an array.
 */
export declare function isArray(value: any): boolean;
/**
 * Checks that the given object has the specified keys.
 * @param {Object} obj The object to check.
 * @param {string[]} keys The list of keys that 'obj' must have.
 * @throws If the object is missing keys.
 */
export declare function checkObjectHasKeys(obj: object, keys_: string[]): void;
/**
 * Checks that the given object has no extra keys other than the specified ones.
 * @param {Object} obj The object to check.
 * @param {string[]} allowedKeys The list of allowed key names.
 * @throws If there are extra keys.
 */
export declare function checkObjectHasNoAdditionalKeys(obj: object, allowedKeys: string[]): void;
/**
 * Deep copy the given object. The object MUST NOT have circular references and
 * MUST NOT have functions.
 * @param {Object} obj The object to deep copy.
 * @return {Object} A copy of the object without any references to the original.
 */
export declare function deepCopy<T>(obj: T): T;
/**
 * Compare two objects for equality. The objects MUST NOT have circular references.
 *
 * @param {Object} x The first object to compare.
 * @param {Object} y The second object to compare.
 *
 * @return {boolean} true if the two objects are equal
 */
export declare function deepCompare(x: any, y: any): boolean;
/**
 * Copy properties from one object to another.
 *
 * All enumerable properties, included inherited ones, are copied.
 *
 * This is approximately equivalent to ES6's Object.assign, except
 * that the latter doesn't copy inherited properties.
 *
 * @param {Object} target  The object that will receive new properties
 * @param {...Object} source  Objects from which to copy properties
 *
 * @return {Object} target
 */
export declare function extend(...restParams: any[]): any;
/**
 * Run polyfills to add Array.map and Array.filter if they are missing.
 */
export declare function runPolyfills(): void;
/**
 * Inherit the prototype methods from one constructor into another. This is a
 * port of the Node.js implementation with an Object.create polyfill.
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
export declare function inherits(ctor: Function, superCtor: Function): void;
/**
 * Polyfills inheritance for prototypes by allowing different kinds of
 * super types. Typically prototypes would use `SuperType.call(this, params)`
 * though this doesn't always work in some environments - this function
 * falls back to using `Object.assign()` to clone a constructed copy
 * of the super type onto `thisArg`.
 * @param {any} thisArg The child instance. Modified in place.
 * @param {any} SuperType The type to act as a super instance
 * @param {any} params Arguments to supply to the super type's constructor
 */
export declare function polyfillSuper(thisArg: any, SuperType: any, ...params: any[]): void;
/**
 * Returns whether the given value is a finite number without type-coercion
 *
 * @param {*} value the value to test
 * @return {boolean} whether or not value is a finite number without type-coercion
 */
export declare function isNumber(value: any): boolean;
/**
 * Removes zero width chars, diacritics and whitespace from the string
 * Also applies an unhomoglyph on the string, to prevent similar looking chars
 * @param {string} str the string to remove hidden characters from
 * @return {string} a string with the hidden characters removed
 */
export declare function removeHiddenChars(str: string): string;
export declare function escapeRegExp(string: string): string;
export declare function globToRegexp(glob: string, extended: any): string;
export declare function ensureNoTrailingSlash(url: string): string;
export declare function sleep<T>(ms: number, value: T): Promise<T>;
export declare function isNullOrUndefined(val: any): boolean;
export declare function defer(): {
    resolve: any;
    reject: any;
    promise: Promise<unknown>;
};
export declare function promiseMapSeries<T>(promises: Promise<T>[], fn: (t: T) => void): Promise<void>;
export declare function promiseTry<T>(fn: () => T): Promise<T>;
export declare function setCrypto(c: Object): void;
export declare function getCrypto(): Object;
