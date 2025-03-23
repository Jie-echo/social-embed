export class UrlParser {
    url: URL;
    originalUrl: string;

    constructor(url: string) {
        this.originalUrl = url;
        this.url = new URL(url);
    }

    private isDomainOrSubdomain(domain: string): boolean {
        const hostname = this.url.hostname;
        return hostname === domain || hostname.endsWith(`.${domain}`);
    }

    get isYoutube() {
        return this.isDomainOrSubdomain('youtube.com') ||
            this.isDomainOrSubdomain('youtu.be');
    }

    get isTwitter() {
        return this.isDomainOrSubdomain('twitter.com') || this.isDomainOrSubdomain('x.com');
    }

    get isInstagram() {
        return this.isDomainOrSubdomain('instagram.com');
    }

    get isTikTok() {
        return this.isDomainOrSubdomain('tiktok.com');
    }

    get isFacebook() {
        return this.isDomainOrSubdomain('facebook.com') ||
            this.isDomainOrSubdomain('fb.com');
    }

    getYoutubeVideoId() {
        const url = this.originalUrl;
        const videoIdMatch = url.match(/[?&]v=(.+?)(?:$|[&?])/)?.[1];
        const shortsIdMatch = url.match(/https:\/\/(?:www\.)?youtube\.com\/shorts\/(.+?)(?:$|[&?])/)?.[1];
        const shortLinkMatch = url.match(/https:\/\/youtu\.be\/(.+?)(?:$|[&?])/)?.[1];
        const embedLinkMatch = url.match(/https:\/\/(?:www\.)youtube(-nocookie)?\.com\/embed\/(.+?)(?:$|[&?])/)?.[2];
        const videoId = videoIdMatch ?? shortsIdMatch ?? shortLinkMatch ?? embedLinkMatch ?? '00000000';
        return videoId;
    }

    getTwitterPostId() {
        const url = this.originalUrl;
        const postId = url.substring(url.lastIndexOf('/') + 1).replace(/[?].*$/, '');
        return postId;
    }

    getTiktokEmbedID() {
        const url = this.originalUrl;
        const embedId = url.replace(/[?].*$/, '').replace(/^.+\//, '');
        return embedId;
    }

    getFacebookPostId() {
        // todo
    }
}