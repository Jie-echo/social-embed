import { EmbeddedInstance, RenderInOptions } from "./embed";

export class TwitterEmbed implements EmbeddedInstance {
    private postId: string;

    constructor(postId: string) {
        this.postId = postId;
    }

    render(container: HTMLElement, options?: RenderInOptions): void {
        throw new Error("Method not implemented.");
    }
    play(): void {
        throw new Error("Method not implemented.");
    }
    pause(): void {
        throw new Error("Method not implemented.");
    }
    
}