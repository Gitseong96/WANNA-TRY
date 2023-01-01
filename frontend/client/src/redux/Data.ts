export type AnswerType = {
    value: string;
    text: string;
}
export type QuestionType = {
    id: number
    question: string;
    answerType: string;
    answer: Array<AnswerType>
}


export type DataType = { data: Array<QuestionType>, bar: number; }

export const initialData: DataType = {
    bar: 0,
    data: [{
        id: 1,
        question: '나이를 알려주세요.',
        answerType: 'age',
        answer: [
            {
                value: 'young',
                text: '20대 이하',
            },
            {
                value: 'middle',
                text: '30대~40대',
            },
            {
                value: 'old',
                text: '50대 이상',
            }
        ]
    },
    {
        id: 2,
        question: '오늘 기분은 어떤가요?',
        answerType: 'mood',
        answer: [
            {
                value: 'good',
                text: '좋음',
            },
            {
                value: 'soso',
                text: '그저 그럼',
            },
            {
                value: 'bad',
                text: '나쁨',
            }
        ]
    },
    {
        id: 3,
        question: '1인분 예산은 어느 정도 인가요?',
        answerType: 'money',
        answer: [
            {
                value: 'meacheapt',
                text: '만원 이하',
            },
            {
                value: 'middle',
                text: '만원~3만원',
            },
            {
                value: 'any',
                text: '상관없음',
            }
        ]
    },
    {
        id: 4,
        question: '오늘 땡기는 종류는 무엇인가요',
        answerType: 'ingredient',
        answer: [
            {
                value: 'meat',
                text: '육류',
            },
            {
                value: 'sea',
                text: '해산물',
            },
            {
                value: 'etc',
                text: '비건',
            }
        ]
    },

    ]
}
