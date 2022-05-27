#[path = "./step.rs"]
mod step;

pub fn bubble_sort(array: Vec<f64>) -> Vec<step::Step> {
    let mut steps: Vec<step::Step> = Vec::new();
    let mut numbers: Vec<f64> = array.to_vec();
    for i in 0..numbers.len() {
        for j in 0..numbers.len() - i - 1 {
            let mut step = step::Step {
                r#type: "compare".to_string(),
                targets: vec![j, j + 1],
            };
            if numbers[j] > numbers[j + 1] {
                step.r#type = "swap".to_string();
                numbers.swap(j, j + 1);
            }
            steps.push(step);
        }
    }
    steps
}
