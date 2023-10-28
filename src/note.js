export interface Note {
    title: string;
    description: string;
    // stores the creation date
    dateTime?: number;
}
export const defaultNotes: Note[] = [
    {
        title: 'Приветствую вас!',
        description: 'Спасибо, что открыли данное приложение!!',
        dateTime: Date.now() // Setting current timestamp if not passed
    },
    {
        title: 'What is Lorem Ipsum?',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        dateTime: Date.now()
    },
    {
        title: 'Исследование изменений климата',
        description: 'Анализ данных за последние десять лет свидетельствует о стойком тренде изменения климата. Эта информация послужит основой для разработки стратегий борьбы с изменениями климата.',
        dateTime: Date.now()
    },
];
export function formatDateTime(dateTime: number): string {
    const dateObj = new Date(dateTime);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(dateObj.getFullYear()).slice(-2);
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}
export const isSameDay = (dateTime) => {
    const currentDate = new Date();
    const noteDate = new Date(dateTime);
    return (
        currentDate.getDate() === noteDate.getDate() &&
        currentDate.getMonth() === noteDate.getMonth() &&
        currentDate.getFullYear() === noteDate.getFullYear()
    );
};
export function updateDatabase(data) {
    localStorage.setItem("notes", JSON.stringify(data));
}
// not used, but earlier was used
export const deserializeData = data => {
    return data.split('\n').map(note => {
        const [title, ...lines] = note.replace(/\\n/g, '\n').split('\n');
        const description = lines.join('\n');
        return { title, description };
    });
}
// not used, but earlier was used
export const serializeData = data => {
    return data.map(note => {
        const {title, description} = note;
        description.replace(/\n/g, "\\n");
        return `${title}\\n${description}`
    });
}