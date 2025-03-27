import { injectScript } from "../helpers/inject-script";
import { EmbeddedInstance, RenderInOptions } from "./embed";

const twitterWidgetJs = 'https://platform.twitter.com/widgets.js';

declare global {
    interface Window {
        twttr: any; // Adjust the type according to the actual structure of twttr object.
    }
}

export class TwitterEmbed implements EmbeddedInstance {
    private postId: string;
    static injected = false;

    constructor(postId: string) {
        this.postId = postId;
    }

    /**
     * 在指定容器中渲染推特推文。
     * @param container - 用于渲染推文的 HTML 元素容器。
     * @param options - 可选的渲染选项，将与默认选项合并。
     */
    render(container: HTMLElement, options?: RenderInOptions): void {
        this.injectSdk().then(() => {
            window.twttr.widgets.createTweet(this.postId, container, {
                align: 'center',
                ...options,
            }).then(() => {
                console.log('Tweet rendered successfully');
            }).catch((error: any) => {
                console.error('Error rendering tweet:', error);
            });
        });
    };
    play(): void {
        throw new Error("Method not implemented.");
    }
    pause(): void {
        throw new Error("Method not implemented.");
    }

    private injectSdk(): Promise<void> {
        if(TwitterEmbed.injected) {
            return Promise.resolve();
        }

        return new Promise(res => {
            injectScript(twitterWidgetJs, () => {
                TwitterEmbed.injected = true;
                res();
            })
        }) 
    }
    
}