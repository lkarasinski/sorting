#[path = "./step.rs"]
mod step;

pub fn gnome_sort<T: Ord>(array: &mut [T]) -> Vec<step::Step> {
    let mut steps: Vec<step::Step> = Vec::new();
    let mut i = 1;
    while i < array.len() {
        steps.push(step::Step {
            r#type: "compare".to_string(),
            targets: vec![i - 1, i],
        });
        if i == 0 || array[i - 1] <= array[i] {
            i += 1;
        } else {
            array.swap(i, i - 1);
            steps.push(step::Step {
                r#type: "swap".to_string(),
                targets: vec![i, i - 1],
            });
            i -= 1;
        }
    }
    steps
}
