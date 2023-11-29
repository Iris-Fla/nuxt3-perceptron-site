export const PlayerData = () => {
    return useState('Pdata', () => shallowRef({
        Datalist:[
            {id:1, title:'にゃおーん',weight:1,},
            {id:2, title:'にゃおーん',weight:2,},
            {id:3, title:'にゃおーん',weight:3,},
            {id:4, title:'にゃおーん',weight:4,},
            {id:5, title:'にゃおーん',weight:5,},
            {id:6, title:'にゃおーん',weight:1,},
            {id:7, title:'にゃおーん',weight:2,},
            {id:8, title:'にゃおーん',weight:3,},
            {id:9, title:'にゃおーん',weight:4,},
            {id:10, title:'にゃおーん',weight:5,},
        ]
    }))
}
export const TitleData = () => {
    return useState('Tdata', () => "ふにゃ～")
}

export const WeightData = () => {
    return useState('Wdata', () => shallowRef({
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
    }))
}

export const BiasData = () => {
    return useState('Bdata', () => 1)
}

