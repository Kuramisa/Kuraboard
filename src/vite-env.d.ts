/// <reference types="vite/client" />

export type Bot = {
    accentColor?: string;
    avatar?: string;
    avatarDecoration?: string;
    avatarURL?: string;
    banner?: string;
    bot: boolean;
    description?: string;
    discriminator: string;
    flags: number;
    globalName?: string;
    guilds: number;
    id: string;
    mfaEnabled: boolean;
    system: boolean;
    username: string;
    users: number;
    verified: boolean;
};
