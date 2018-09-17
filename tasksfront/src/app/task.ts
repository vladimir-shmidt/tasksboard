export class Task {
    Name: string;
    Description: string;
    Priority: number;
    Status: Status;
    Timespan: Date;
}

export enum Status {
    None,
    Active,
    Complete
}