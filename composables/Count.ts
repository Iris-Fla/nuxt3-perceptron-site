export const PlayerData = () => {
    return useState('Pdata', () => ({
        Datalist:[
            {id:1,title:'にゃおーん',weight:1,},
            {id:2,title:'にゃおん',weight:2,},
            {id:3,title:'にゃお',weight:3,},
        ]
    }))
}
export const TitleData = () => {
    return useState('Tdata', () => "ふにゃ～")
}

export const BiasData = () => {
    return useState('Bdata', () => 1)
}

