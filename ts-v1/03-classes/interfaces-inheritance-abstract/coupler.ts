// export abstract class enlighten{      // --- also works

abstract class enlighten{
    private static yugToEnlight:number = 1/0;

    abstract enlightenProcedure(): string;

    public getYugs(): number{return enlighten.yugToEnlight;};
    public enlightPath(): string{
        return "U need to discover in world";
    }

}

export { enlighten };