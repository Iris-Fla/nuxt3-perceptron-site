export const useData = () => {
    return useState('Pdata', () => ref({
        dataList: [
            { id: 1, title: 'お布団に入る', weight: 3, },
            { id: 2, title: '火薬を仕掛ける', weight: 3, },
            { id: 3, title: '着火！', weight: 2, },
        ],
        titleList: [
            { name:'ずんだもん',where:'家で' ,do:'寝る', dont:'爆発する'},
        ],
        biasData: 3,
    }))
}
// export const titleData = () => {
//     return useState('Tdata', () => "ふにゃ～")
// }

// export const biasData = () => {
//     return useState('Bdata', () => 1)
// }

// export const defaultData = () => {
//     return useState(() => ({
//         title: 'にゃにゃ～', weight: 3,
//     }))
// }