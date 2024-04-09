
class LRU<K, V> {
    private cache: Map<K, { value: V; expiry: number }>;
    private capacity: number;
    private ttl: number; // Time to live in milliseconds

    constructor(capacity: number, ttl: number) {
        this.capacity = capacity;
        this.ttl = ttl;
        this.cache = new Map();
    }
    private checkExpire(key: K): boolean {
        const item = this.cache.get(key);
        if (item) {
            if (item.expiry < Date.now()) {
                this.cache.delete(key);
                return true;
            }
        }
        return false;
    }
    public get(key: K): V | undefined {
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
    public set(key: K, value: V): void {
        if (this.cache.size >= this.capacity) {
            const lruKey = this.cache.keys().next().value;
            this.cache.delete(lruKey);
        }
        this.cache.set(key, { value, expiry: Date.now() + this.ttl });
    }

}

export default LRU;