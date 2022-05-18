extern crate serde_json;
extern crate wasm_bindgen;

use algorithms;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn bubble_sort(array: Vec<f64>) -> String {
    let steps = algorithms::bubble_sort::bubble_sort(array);
    let json = serde_json::to_string(&steps).unwrap();
    return json;
}
