import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TextForMessage = 'Ты вообще кликал?' 
| 'Такой себе результат, мог бы и по лучше' 
| 'Неплохо, но стоит потренироватся' 
| 'Ты кликаешь довольно быстро, так держать!' 
| 'Вау, ты истиный чемпион по кликам! А теперь займись чем-то более продуктивным';

type TextForStarts = '✭' | '✭✭' | '✭✭✭' | '✭✭✭✭' |'✭✭✭✭✭';

type ScoreColor = 'worst_score' 
| 'bad_score' 
| 'average_score' 
| 'good_score' 
|'best_score';

interface UserScore<T, S, C> {
    userMessage: T;
    userStars: S;
    scoreColor: C;
}

const userScore1: UserScore<TextForMessage, TextForStarts, ScoreColor> = {
    userMessage: 'Ты вообще кликал?',
    userStars: '✭',
    scoreColor: 'worst_score'
}

const userScore2: UserScore<TextForMessage, TextForStarts, ScoreColor> = {
    userMessage: 'Такой себе результат, мог бы и по лучше',
    userStars: '✭✭',
    scoreColor: 'bad_score'
}

const userScore3: UserScore<TextForMessage, TextForStarts, ScoreColor> = {
    userMessage: 'Неплохо, но стоит потренироватся',
    userStars: '✭✭✭',
    scoreColor: 'average_score'
}

const userScore4: UserScore<TextForMessage, TextForStarts, ScoreColor> = {
    userMessage: 'Ты кликаешь довольно быстро, так держать!',
    userStars: '✭✭✭✭',
    scoreColor: 'good_score'
}

const userScore5: UserScore<TextForMessage, TextForStarts, ScoreColor> = {
    userMessage: 'Вау, ты истиный чемпион по кликам! А теперь займись чем-то более продуктивным',
    userStars: '✭✭✭✭✭',
    scoreColor: 'best_score'
}

interface InitialState {
    clicks: number;
    showTime: boolean;
    time: number;
    timerRunning: boolean; 
    userScore: UserScore<TextForMessage, TextForStarts, ScoreColor>[];
    showScore: boolean;
    removeBtn: boolean;
}

const initialState: InitialState = {
    clicks: 0,
    showTime: false,
    time: 10,
    timerRunning: false,
    userScore: [userScore1, userScore2, userScore3, userScore4, userScore5],
    showScore: false,
    removeBtn: false
}

const reducer = createSlice({
    name: 'reduser',
    initialState,
    reducers: {
        plusClick: (state) => {
            state.clicks++;
        },
        openTime: (state, action: PayloadAction<(boolean)>) => {
            state.showTime = action.payload;
        },
        minusTime: (state) => {
            if (state.time > 0) {
                state.time--;
            }
        },
        setTimerRunning: (state, action: PayloadAction<boolean>) => {
            state.timerRunning = action.payload;
        },
        openScore: (state) => {
            state.showScore = !state.showScore;
        },
        closeBtn: (state) => {
            state.removeBtn = !state.removeBtn;
        }
    },
});
  
export const {
    plusClick,
    openTime,
    minusTime,
    setTimerRunning,
    openScore,
    closeBtn
} = reducer.actions;

export default reducer;