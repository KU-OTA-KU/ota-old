export function translateStatus(status: string): string  {
    if (status === 'released') {
        return 'Завершено';
    } else if (status === 'ongoing') {
        return 'Онгоинг';
    } else {
        return 'Анонс';
    }
}
