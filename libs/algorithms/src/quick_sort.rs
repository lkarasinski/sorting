#[path = "./step.rs"]
mod step;

pub fn quick_sort<T: Ord>(arr: &mut [T]) -> Vec<step::Step> {
    let mut steps: Vec<step::Step> = Vec::new();
    let len = arr.len();
    _quick_sort(arr, 0, (len - 1) as isize, &mut steps);
    steps
}

fn _quick_sort<T: Ord>(arr: &mut [T], low: isize, high: isize, steps: &mut Vec<step::Step>) {
    if low < high {
        let p = partition(arr, low, high, steps);
        _quick_sort(arr, low, p - 1, steps);
        _quick_sort(arr, p + 1, high, steps);
    }
}

fn partition<T: Ord>(arr: &mut [T], low: isize, high: isize, steps: &mut Vec<step::Step>) -> isize {
    let pivot = high as usize;
    let mut store_index = low - 1;
    let mut last_index = high;

    loop {
        store_index += 1;
        steps.push(step::Step {
            r#type: "highlight".to_string(),
            targets: vec![pivot as usize],
        });
        steps.push(step::Step {
            r#type: "compare".to_string(),
            targets: vec![store_index as usize],
        });
        while arr[store_index as usize] < arr[pivot] {
            store_index += 1;
        }
        last_index -= 1;
        steps.push(step::Step {
            r#type: "compare".to_string(),
            targets: vec![last_index as usize],
        });
        while last_index >= 0 && arr[last_index as usize] > arr[pivot] {
            last_index -= 1;
        }
        if store_index >= last_index {
            break;
        } else {
            steps.push(step::Step {
                r#type: "swap".to_string(),
                targets: vec![store_index as usize, last_index as usize],
            });
            arr.swap(store_index as usize, last_index as usize);
        }
    }

    steps.push(step::Step {
        r#type: "swap".to_string(),
        targets: vec![store_index as usize, pivot as usize],
    });
    arr.swap(store_index as usize, pivot as usize);
    store_index
}
