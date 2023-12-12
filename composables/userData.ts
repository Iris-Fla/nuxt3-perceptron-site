export const addData = () => {
    return useState('Pdata', () => ({
        Datalist: [
            { id: 1, title: 'にゃおーん', weight: 1, },
        ]
    }))
}
export const titleData = () => {
    return useState('Tdata', () => "ふにゃ～")
}

export const biasData = () => {
    return useState('Bdata', () => 1)
}

export const defaultData = () => {
    return useState(() => ({
        title: 'にゃにゃ～', weight: 3,
    }))
}