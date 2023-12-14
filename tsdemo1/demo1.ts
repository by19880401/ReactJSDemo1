interface recordLine {
    name: string,
    age: number;
}


const foreachFunc = (value: string) => {
    let map: Map<string, any> = new Map();
    const mapKey = value;
    let list: Set<any> = map.get(mapKey);

    if (typeof list == 'undefined') {
        list = new Set();
    }

    if (list.size === 0) {
        const record: recordLine = {
            name: 'willis01',
            age:35
        }
        list.add(record);
    } else {
        list = new Set();
    }
    map.set(mapKey, list);
}


console.log(foreachFunc('haha'));