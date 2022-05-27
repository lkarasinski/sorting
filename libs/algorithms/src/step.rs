use serde::ser::SerializeMap;
use serde::Serialize;

pub struct Step {
    pub r#type: String,
    pub targets: Vec<usize>,
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
