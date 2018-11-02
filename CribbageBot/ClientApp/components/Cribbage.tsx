import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CribbagePlayArea } from './CribbagePlayArea';
import { CribbageBoard } from './CribbageBoard';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as CribbageStore from '../store/Cribbage';


type CribbageProps =
    CribbageStore.GameState
    //& typeof CounterStore.actionCreators
    & RouteComponentProps<{}>;

class Cribbage extends React.Component<CribbageProps, {}> {
    defaultPlayer: CribbageStore.Player = { id: "Boris", score: 0 };
    state: CribbageStore.GameState = {
        players: [this.defaultPlayer, { id: "Albert", score: 0}],
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


// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.counter, // Selects which state properties are merged into the component's props
    CribbageStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Cribbage) as typeof Cribbage;