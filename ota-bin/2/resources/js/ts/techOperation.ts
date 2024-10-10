import moment from "moment-timezone";

export function error() {
    this.$router.push(`/error`);
}

export function notFoundPage() {
    this.$router.push(`/404`);
}

export function getImgUrl(anime): string {
    return anime.poster && anime.poster.main2xUrl ? anime.poster.main2xUrl : '/img/ts/error.png';
}

export function scrollTo(className): void {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}

export function goToAnime(animeId: string): void {
    this.$router.push(`/anime?animeId=${animeId}`);
}

export function formatDate(dateString: string, clientTimeZone: string): string {
    console.log(dateString)
    console.log(clientTimeZone)
    if (dateString === 'нету') {
        return 'нету'
    } else {
        return moment(dateString)
            .tz(clientTimeZone)
            .calendar(null, {
                sameDay: '[Сегодня в]  HH:mm',
                nextDay: '[Завтра в] HH:mm',
                nextWeek: 'DD.MM.YYYY [в] HH:mm',
                sameElse: 'DD.MM.YYYY [в] HH:mm'
            });
    }
}
