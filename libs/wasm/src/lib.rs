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
#[wasm_bindgen]
pub fn quick_sort(array: Vec<usize>) -> String {
    let mut array = array.to_vec();
    let steps = algorithms::quick_sort::quick_sort(&mut array);
    let json = serde_json::to_string(&steps).unwrap();
    return json;
}
#[wasm_bindgen]
pub fn insertion_sort(array: Vec<f64>) -> String {
    let steps = algorithms::insertion_sort::insertion_sort(array);
    let json = serde_json::to_string(&steps).unwrap();
    return json;
}

#[wasm_bindgen]
pub fn selection_sort(array: Vec<f64>) -> String {
    let steps = algorithms::selection_sort::selection_sort(array);
    let json = serde_json::to_string(&steps).unwrap();
    return json;
}
