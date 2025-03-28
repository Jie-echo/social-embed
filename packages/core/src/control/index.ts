import { type EmbeddedInstance, type RenderInOptions } from "../embeds/embed";
import { TwitterEmbed } from "../embeds/twitter-embed";
import { UrlParser } from "../url-parser";

export class EmbedControl {
  static async createEmbed(url: string) {
    const embed = new UrlParser(url);

    if (embed.isYoutube) {
      return await EmbedControl.createYoutubePlayer(embed.getYoutubeVideoId()); 
    }

    if (embed.isTwitter) {
      return await EmbedControl.createTwitterEmbed(embed.getTwitterPostId()); 
    }
  }

  static createYoutubePlayer(videoId: string) {
    // todu...
    // return new EmbedControl();
  }
  
  static createTwitterEmbed(postId: string) {
    return new EmbedControl(new TwitterEmbed(postId));
  }

  private embed: EmbeddedInstance;
  constructor(embed: EmbeddedInstance) {
    this.embed = embed;
  }

  render(container: HTMLElement, options?: RenderInOptions) {
    this.embed.render(container, options);
  }
}