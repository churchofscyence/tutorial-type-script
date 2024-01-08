export class User{

    private _projectName: string = ''

    constructor(projectName: string) {
        this._projectName = projectName;
    }


    get projectName(): string {
        return this._projectName;
    }

    set projectName(value: string) {
        this._projectName = value;
    }
}
