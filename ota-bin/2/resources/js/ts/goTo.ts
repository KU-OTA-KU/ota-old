export function goToAnime(animeId: string): void {
    this.$router.push(`/anime?animeId=${animeId}`);
}

