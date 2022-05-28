#[path = "./step.rs"]
mod step;

pub fn insertion_sort(array: Vec<f64>) -> Vec<step::Step> {
    let mut steps: Vec<step::Step> = Vec::new();
    let mut numbers: Vec<f64> = array.to_vec();
    for i in 1..numbers.len() {
        let mut j = i;
        while j > 0 && numbers[j] < numbers[j - 1] {
            steps.push(step::Step {
                r#type: "compare".to_string(),
                targets: vec![j, j - 1],
            });
            if numbers[j] < numbers[j - 1] {
                steps.push(step::Step {
                    r#type: "swap".to_string(),
                    targets: vec![j, j - 1],
                });
                numbers.swap(j, j - 1);
            }
            j -= 1;
        }
    }
    steps
}
