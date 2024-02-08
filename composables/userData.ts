export const useData = () => {
    return useState('Pdata', () => ref({
        dataList: [
            { id: 1, title: '赤い', weight: 1,checked:false, },
            { id: 2, title: '丸い', weight: 2, checked:false,},
            { id: 3, title: '食べ物', weight: 1, checked:false,},
            { id: 4, title: '酸っぱい', weight: -1, checked:false,},
        ],
        titleList: [
            { name:'',do:'それはリンゴ'},
        ],
        biasData: -3.5,
        debugMode: false,
        resulttext: '(ここでリロードすると見えるテキスト...!ラッキー！)',
    }))
}