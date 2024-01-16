export type TodoData = {
    completed: boolean;
    id: number;
    time?: TimeData;
    title: string;
};

export type TimeData = {
    created: string;
    updated?: string;
};
