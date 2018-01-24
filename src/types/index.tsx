export interface StoreState {
    history: Array<{
        squares: Array<string | null>
    }>;
    xIsNext: boolean;
    stepNumber: number;
}