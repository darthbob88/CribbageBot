import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CribbagePlayArea } from './CribbagePlayArea';
import { CribbageBoard } from './CribbageBoard';
import { GameState, Player } from '../store/Player';

type CribbageProps =
    GameState
    //& typeof CounterStore.actionCreators
    & RouteComponentProps<{}>;

export default class Cribbage extends React.Component<CribbageProps, {}> {
    defaultPlayer: Player = { id: "Boris", score: 0, cardsInCrib: [], cardsInHand: [] };
    state: GameState = {
        players: [this.defaultPlayer, { id: "Albert", score: 0, cardsInCrib: [], cardsInHand: [] }],
        dealer: this.defaultPlayer
    }
    public render() {
        return <div>
            <h2> Cribbage!</h2>
            <CribbagePlayArea />
            <CribbageBoard players={this.state.players} />
        </div>;
    }
}
