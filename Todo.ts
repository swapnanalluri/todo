export class Todo {
    constructor(private _task:string, private _description:string) {

    }

    get task():string {
        return this._task;
    }

    get description():string {
        return this._description;
    }
}