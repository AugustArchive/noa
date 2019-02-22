export enum IPCEvents {
    Eval,
    Message,
    Broadcast,
    Ready,
    ShardReady,
    ShardReconnect,
    ShardResume,
    ShardDisconnect,
    MasterEval,
    RestartAll,
    Restart,
    FetchUser,
    FetchChannel,
    FetchGuild
}
export const version = '0.0.1';
export const HTTP = {
    version: 7,
    url: 'https://discordapp.com/api'
}
export interface CloseEvent {
	code: number;
	reason: string;
	wasClean: boolean;
}