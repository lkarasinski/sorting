#[path = "./step.rs"]
mod step;

pub fn selection_sort(array: Vec<f64>) -> Vec<step::Step> {
    let mut steps: Vec<step::Step> = Vec::new();
    let mut numbers: Vec<f64> = array.to_vec();
    for i in 0..numbers.len() {
        let mut min_index = i;
        for j in i..numbers.len() {
            steps.push(step::Step {
                r#type: "compare".to_string(),
                targets: vec![j, min_index],
            });
            if numbers[j] < numbers[min_index] {
                min_index = j;
            }
        }
        steps.push(step::Step {
            r#type: "swap".to_string(),
            targets: vec![i, min_index],
        });

        numbers.swap(i, min_index);
    }
    steps
}
