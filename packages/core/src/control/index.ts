import { type EmbeddedInstance, type RenderInOptions } from "../embeds/embed";
import { TwitterEmbed } from "../embeds/twitter-embed";
import { UrlParser } from "../url-parser";

export class EmbedContorl {
  static async createEmbed(url: string) {
    const embed = new UrlParser(url);

    if (embed.isYoutube) {
      return await EmbedContorl.createYoutubePlayer(embed.getYoutubeVideoId()); 
    }

    if (embed.isTwitter) {
      return await EmbedContorl.createTwitterEmbed(embed.getTwitterPostId()); 
    }
  }

  static createYoutubePlayer(videoId: string) {
    // todu...
    // return new EmbedContorl();
  }
  
  static createTwitterEmbed(postId: string) {
    return new EmbedContorl(new TwitterEmbed(postId));
  }

  private embed: EmbeddedInstance;
  constructor(embed: EmbeddedInstance) {
    this.embed = embed;
  }

  render(container: HTMLElement, options?: RenderInOptions) {
    this.embed.render(container, options);
  }
}