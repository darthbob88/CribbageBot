﻿export interface GameState {
    players: Player[];
    // Torn between this, and making it a boolean field on the player.
    dealer: Player;
}

export interface Hand {
    playedCards: { player: Player, card: Card }[]
}

export interface Player {
    id: string;
    score: number;
    cardsInHand: Card[];
    cardsInCrib: Card[];
}

export interface Card {
    suit: Suit;
    number: number;
}

export enum Suit {
    Hearts = "HEARTS",
    Spades = "SPADES",
    Diamonds = "DIAMONDS",
    Clubs = "CLUBS"
}

//// Not sure if I'll actually use the full Redux machinery, or if I'll settle for just local state.
//// -----------------
//// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
//// They do not themselves have any side-effects; they just describe something that is going to happen.

//enum typeKeys {
//    requestForecast = 'REQUEST_WEATHER_FORECASTS',
//    receiveForecast = 'RECEIVE_WEATHER_FORECASTS'
//}

//interface RequestWeatherForecastsAction {
//    type: typeKeys.requestForecast;
//    startDateIndex: number;
//}

//interface ReceiveWeatherForecastsAction {
//    type: typeKeys.receiveForecast;
//    startDateIndex: number;
//    forecasts: WeatherForecast[];
//}

//// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
//// declared type strings (and not any other arbitrary string).
//type KnownAction = RequestWeatherForecastsAction | ReceiveWeatherForecastsAction;

//// ----------------
//// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
//// They don't directly mutate state, but they can have external side-effects (such as loading data).

//export const actionCreators = {
//    requestWeatherForecasts: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
//        // Only load data if it's something we don't already have (and are not already loading)
//        if (startDateIndex !== getState().weatherForecasts.startDateIndex) {
//            let fetchTask = fetch(`api/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`)
//                .then(response => response.json() as Promise<WeatherForecast[]>)
//                .then(data => {
//                    dispatch({ type: typeKeys.receiveForecast, startDateIndex: startDateIndex, forecasts: data });
//                });

//            addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
//            dispatch({ type: typeKeys.requestForecast, startDateIndex: startDateIndex });
//        }
//    }
//};

//// ----------------
//// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

//const unloadedState: WeatherForecastsState = { forecasts: [], isLoading: false };

//export const reducer: Reducer<WeatherForecastsState> = (state: WeatherForecastsState, incomingAction: Action) => {
//    const action = incomingAction as KnownAction;
//    switch (action.type) {
//        case typeKeys.requestForecast:
//            return {
//                startDateIndex: action.startDateIndex,
//                forecasts: state.forecasts,
//                isLoading: true
//            };
//        case typeKeys.receiveForecast:
//            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
//            // handle out-of-order responses.
//            if (action.startDateIndex === state.startDateIndex) {
//                return {
//                    startDateIndex: action.startDateIndex,
//                    forecasts: action.forecasts,
//                    isLoading: false
//                };
//            }
//            break;
//        default:
//            // The following line guarantees that every action in the KnownAction union has been covered by a case above
//            const exhaustiveCheck: never = action;
//    }

//    return state || unloadedState;
//};
