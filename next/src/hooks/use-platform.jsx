export const usePlatform = () => {
    return {
        isBrowser: typeof window !== 'undefined'
    }
}
