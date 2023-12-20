export const useData = () => {
    return useState('Pdata', () => ref({
        dataList: [
            { id: 1, title: 'にゃおーん', weight: 1, },
            { id: 2, title: 'にゃおーん', weight: 3, },
            { id: 3, title: 'にゃおーん', weight: 2, },
        ],
        titleList: [
            { yesPower:'俺', noPower:'俺以外'},
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