import quizReducer from './quiz/quiz';

import {combineReducers} from 'redux';


const allReducer = combineReducers({
    quizReducer
});

export default allReducer;