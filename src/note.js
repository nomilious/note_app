export interface Note {
    title: string;
    description: string;
}
export const defaultNotes: Note[] = [
    { title: 'Приветствую вас!', description: 'Спасибо, что открыли данное приложение!!' },
    { title: 'What is Lorem Ipsum?', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    { title: 'Исследование изменений климата', description: 'Анализ данных за последние десять лет свидетельствует о стойком тренде изменения климата. Эта информация послужит основой для разработки стратегий борьбы с изменениями климата.' },
];
export function updateDatabase(data) {
    localStorage.setItem("notes", JSON.stringify(data));
}
export const deserializeData = data => {
    return data.split('\n').map(note => {
        const [title, ...lines] = note.replace(/\\n/g, '\n').split('\n');
        const description = lines.join('\n');
        return { title, description };
    });
}
export const serializeData = data => {
    return data.map(note => {
        const {title, description} = note;
        description.replace(/\n/g, "\\n");
        return `${title}\\n${description}`
    });
}