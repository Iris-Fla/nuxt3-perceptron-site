export const PlayerData = () => {
    return useState('Pdata', () => shallowRef({
        Datalist:[
            {id:0, title:'にゃおーん',weight:1,},
            {id:1, title:'にゃおん',weight:2,},
            {id:2, title:'にゃお',weight:3,},
        ]
    }))
}
export const TitleData = () => {
    return useState('Tdata', () => "ふにゃ～")
}

export const BiasData = () => {
    return useState('Bdata', () => 1)
}

