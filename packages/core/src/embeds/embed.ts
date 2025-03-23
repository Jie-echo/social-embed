export interface RenderInOptions {
   url?: string; 
}

export interface EmbeddedInstance {
    render(container: HTMLElement, options?: RenderInOptions): void;

    play(): void;

    pause(): void;
}