import { $call } from 'utility-types';

import { gameActions } from '../actions/gameActions';

const returnsOfActions = [
    ...Object.values(gameActions)
].map($call);

type AppAction = typeof returnsOfActions[number];

export type RootAction =
    | AppAction;