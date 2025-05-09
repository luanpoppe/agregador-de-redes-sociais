export type Platforms = "youtube" | "instagram";

export type CreateChannelBody = {
  platform: Platforms;
  channelId: string;
};
