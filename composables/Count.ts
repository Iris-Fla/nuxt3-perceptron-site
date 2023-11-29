export const QuestionTitle = () => {
    return useState('Qtitle', () => shallowRef({
        one: "Sample1",
        two: "Sample2",
        three: "Sample3",
    }))
}

export const WeightData = () => {
    return useState('Wdata', () => shallowRef({
        one: 1,
    }))
}

export const BiasData = () => {
    return useState('Bdata', () => 1)
}