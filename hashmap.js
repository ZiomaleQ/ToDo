class HashMap {
    constructor() {
        this.data = [];
    }
    get(key) {
        if (this.data.length == 0) return undefined;
        let x = this.data.findIndex(elt => elt.key == key);
        return x >= 0 ? this.data[x].value : undefined
    }
    has(key) {
        if (this.data.length == 0) return false;
        let x = this.data.findIndex(elt => elt.key == key);
        return x >= 0;
    }
    remove(key) {
      if(this.data.length == 0) return;
      let x = this.data.findIndex(elt => elt.key == key);
      if(x >= 0) this.data.splice(x, 1);
      return;
    }
    hasValue(val) {
        if (this.data.length == 0) return false;
        let x = this.data.findIndex(elt => elt.val = val);
        return x >= 0;
    }
    fi(key) {
        let x = this.data.findIndex(elt => elt.key == key);
        return x < 0 ? undefined : x;
    }
    push(key, value) {
        if (this.has.call(this, key)) this.data[this.fi.call(this, key)] = { "key": key, "value": value }
        else this.data.push({ "key": key, "value": value });
        return;
    }
    pushAll(map) {
        if (map.constructor.name != "HashMap") throw new Error("Given object is not a HashMap");
        for (const entry of map) this.push.call(this, entry.key, entry.value);
    }
    clear() {
        this.data = [];
    }
    keys() {
        if (this.data.length == 0) return [];
        let temp = [];
        for (const entry of this.data) temp.push(entry.key);
        return temp;
    }
    values() {
        if (this.data.length == 0) return [];
        let temp = [];
        for (const entry of this.data) temp.push(entry.values);
        return temp;
    }
    size() {
        return this.data.length;
    }
}

module.exports = HashMap;