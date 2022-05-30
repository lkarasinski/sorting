/* tslint:disable */
/* eslint-disable */
/**
* @param {Float64Array} array
* @returns {string}
*/
export function bubble_sort(array: Float64Array): string;
/**
* @param {Uint32Array} array
* @returns {string}
*/
export function quick_sort(array: Uint32Array): string;
/**
* @param {Float64Array} array
* @returns {string}
*/
export function insertion_sort(array: Float64Array): string;
/**
* @param {Float64Array} array
* @returns {string}
*/
export function selection_sort(array: Float64Array): string;
/**
* @param {Uint32Array} array
* @returns {string}
*/
export function heap_sort(array: Uint32Array): string;
/**
* @param {Uint32Array} array
* @returns {string}
*/
export function gnome_sort(array: Uint32Array): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly bubble_sort: (a: number, b: number, c: number) => void;
  readonly quick_sort: (a: number, b: number, c: number) => void;
  readonly insertion_sort: (a: number, b: number, c: number) => void;
  readonly selection_sort: (a: number, b: number, c: number) => void;
  readonly heap_sort: (a: number, b: number, c: number) => void;
  readonly gnome_sort: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
