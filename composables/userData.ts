export const useData = () => {
    return useState('Pdata', () => ref({
        dataList: [
            { id: 1, title: '昨晩は快眠', weight: 1,checked:false, },
            { id: 2, title: '体調が良い', weight: 1, checked:false,},
            { id: 3, title: '予定が空いている', weight: 2, checked:false,},
            { id: 4, title: '見たい動画がある', weight: 3, checked:false,},
        ],
        titleList: [
            { name:'',do:'Youtubeを見る'},
        ],
        biasData: -4.5,
        debugMode: false,
        resulttext: '(ここでリロードすると見えるテキスト...!ラッキー！)',
    }))
}