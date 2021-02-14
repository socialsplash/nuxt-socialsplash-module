interface SocialSplash {
    generate (theme: string, parameters: { [key: string]: string }): string
}

declare module 'vue/types/vue' {
    interface Vue {
        $socialsplash: SocialSplash;
    }
}
