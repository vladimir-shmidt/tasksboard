export class Task {
    Id: string;
    Name: string;
    Description: string;
    Priority: number;
    Status: Status;
    Timespan: Date;
    Created: Date;
}

export enum Status {
    None,
    Active,
    Complete
}

export class PagedData<Task> {
    Data: Task[];
    Page: number;
    Size: number;
    Total: number;

    private _length: number;
    get length(): number {
        return this.Data.length;
    }
}