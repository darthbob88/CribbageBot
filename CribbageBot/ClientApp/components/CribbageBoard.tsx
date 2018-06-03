import * as React from 'react';
import { Player } from '../store/Player';

type CribbageBoardProps = { players: Player[] };
export const CribbageBoard : React.SFC<CribbageBoardProps> = (props) => {
    const { players } = props;
        return <ul>
            <li>TODO: Replace this with a nice graphical board.</li>
            {players.map(player => 
                <li key={player.id}> Player {player.id} has {player.score} points </li>
            )}
        </ul>;

    }

