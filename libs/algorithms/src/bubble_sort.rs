use serde::ser::SerializeMap;
use serde::Serialize;

pub struct Action {
    action_type: String,
    elements: [f64; 2],
}

impl Serialize for Action {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        let mut map = serializer.serialize_map(Some(2))?;
        map.serialize_entry("action_type", &self.action_type)?;
        map.serialize_entry("elements", &self.elements)?;
        map.end()
    }
}

pub fn bubble_sort(array: Vec<f64>) -> Vec<Action> {
    let mut steps: Vec<Action> = Vec::new();
    let mut numbers: Vec<f64> = array.to_vec();
    for i in 0..numbers.len() {
        for j in 0..numbers.len() - i - 1 {
            let mut step = Action {
                action_type: "compare".to_string(),
                elements: [j as f64, (j + 1) as f64],
            };
            if numbers[j] > numbers[j + 1] {
                step.action_type = "swap".to_string();
                numbers.swap(j, j + 1);
            }
            steps.push(step);
        }
    }
    steps
}
