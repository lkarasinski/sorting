use serde::ser::SerializeMap;
use serde::Serialize;

pub struct Step {
    r#type: String,
    targets: [usize; 2],
}

impl Serialize for Step {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        let mut map = serializer.serialize_map(Some(2))?;
        map.serialize_entry("type", &self.r#type)?;
        map.serialize_entry("targets", &self.targets)?;
        map.end()
    }
}

pub fn bubble_sort(array: Vec<f64>) -> Vec<Step> {
    let mut steps: Vec<Step> = Vec::new();
    let mut numbers: Vec<f64> = array.to_vec();
    for i in 0..numbers.len() {
        for j in 0..numbers.len() - i - 1 {
            let mut step = Step {
                r#type: "compare".to_string(),
                targets: [j, j + 1],
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
