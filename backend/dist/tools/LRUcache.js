"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LRU {
    constructor(capacity, ttl) {
        this.capacity = capacity;
        this.ttl = ttl;
        this.cache = new Map();
    }
    checkExpire(key) {
        const item = this.cache.get(key);
        if (item) {
            if (item.expiry < Date.now()) {
                this.cache.delete(key);
                return true;
            }
        }
        return false;
    }
    get(key) {
        if (this.checkExpire(key)) {
            return undefined;
        }
        const item = this.cache.get(key);
        if (item) {
            this.cache.delete(key);
            this.cache.set(key, { ...item, expiry: Date.now() + this.ttl });
            return item.value;
        }
        return undefined;
    }
    set(key, value) {
        if (this.cache.size >= this.capacity) {
            const lruKey = this.cache.keys().next().value;
            this.cache.delete(lruKey);
        }
        this.cache.set(key, { value, expiry: Date.now() + this.ttl });
    }
}
exports.default = LRU;
//# sourceMappingURL=LRUcache.js.map