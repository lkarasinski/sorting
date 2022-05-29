#[path = "./step.rs"]
mod step;

pub fn heap_sort<T: Ord>(array: &mut [T]) -> Vec<step::Step> {
    let mut steps: Vec<step::Step> = Vec::new();
    let numbers: &mut [T] = array;
    let len = numbers.len();
    let mut i = len as isize;
    while i > -1 {
        heapify(numbers, len, i, &mut steps);
        i -= 1;
    }

    let mut i = len as isize - 1;
    while i > 0 {
        steps.push(step::Step {
            r#type: "swap".to_string(),
            targets: vec![0, i as usize],
        });
        numbers.swap(0, i as usize);
        heapify(numbers, i as usize, 0, &mut steps);
        i -= 1;
    }
    steps
}

fn heapify<T: Ord>(array: &mut [T], n: usize, i: isize, steps: &mut Vec<step::Step>) {
    let i = i as usize;
    let mut largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    steps.push(step::Step {
        r#type: "compare".to_string(),
        targets: vec![l, largest],
    });
    if l < n && array[l] > array[largest] {
        largest = l;
    }
    steps.push(step::Step {
        r#type: "compare".to_string(),
        targets: vec![r, largest],
    });
    if r < n && array[r] > array[largest] {
        largest = r;
    }
    if largest != i {
        array.swap(i, largest);
        steps.push(step::Step {
            r#type: "swap".to_string(),
            targets: vec![i, largest],
        });
        heapify(array, n, largest as isize, steps);
    }
}
