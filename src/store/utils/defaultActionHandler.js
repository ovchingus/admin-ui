import { BASE_ACTIONS } from './actionCreator';

// Этот дефолтный редьюсер срабатывает на каждый экшен,
// тк в стейт приходит initialState отдельных редьюсеров и любой экшон
// сходу сложно придумать решение

export const defaultActionHandler = {
    [BASE_ACTIONS.SET]: (state, action) => state
    // ({
    //     ...state,
    //     ...(action.payload || {}),
    // }),
};
