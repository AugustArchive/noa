import { Client, ClientOptions } from '@augu/eris';
import { CloseEvent, HTTP } from '../util/constants';
// import { MasterIPC } from '../ipc/master';
// import { Cluster } from '../cluster';
import { EventEmitter } from 'events';
import { cpus, platform } from 'os';
import cluster from 'cluster';
import { NoaUtil } from '../util/util';
import w from 'wumpfetch';
import { Collection } from '@maika.xyz/eris-utils';

export class ShardManager extends EventEmitter {
    public clusters = new Collection<Cluster>();
    public client: Client;
    public clientOptions: ClientOptions;
    public shardCount: number | 'auto';
}

export interface SharderOptions {
	token?: string;
	shardCount?: number | 'auto';
	clusterCount?: number;
	name?: string;
	development?: boolean;
	client?: typeof Client;
	clientOptions?: ClientOptions;
	guildsPerShard?: number;
	respawn?: boolean;
	ipcSocket?: string | number;
	timeout?: number;
}

export interface SessionObject {
	url: string;
	shards: number;
	session_start_limit: {
		total: number;
		remaining: number;
		reset_after: number;
	};
}