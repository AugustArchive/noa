export class NoaUtil {
    /**
     * Calculate the recommended shard count
     * @param shards The number of shards
     * @param guildsPerShard The number of `x` amount of guilds per shard
     */
    calculateShards(shards: number, guildsPerShard: number): number {
        return Math.ceil(shards * (1000 / guildsPerShard));
    }
}