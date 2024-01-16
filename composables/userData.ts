export const useData = () => {
    return useState('Pdata', () => ref({
        dataList: [
            { id: 1, title: 'お布団に入る', weight: 3, },
            { id: 2, title: '火薬を仕掛ける', weight: 3, },
            { id: 3, title: '着火！', weight: 2, },
        ],
        titleList: [
            { name:'ずんだもん',do:'寝る'},
        ],
        biasData: -4,
        debugMode: false,
        resulttext: 'これは見えないはずだよ',
    }))
}