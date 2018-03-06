import { Injectable } from "@angular/core";

@Injectable()
export class Util {

    public isUndefined(value: any): boolean {
        return value === undefined;
    }

    public isNull(value: any): boolean {
        return this.isUndefined(value) || value === null;
    }

    public isEmpty(value: any[] | string): boolean {
        if (this.isNull(value)) {
            return true;
        }
        if (typeof value === "string") {
            return (value as string).length === 0;
        }
        if (Array.isArray(value)) {
            return (value as any[]).length === 0;
        }
        return false;
    }

}
