class PhoneCase{
    constructor(private caseType: string, private life: number)
    {}

    public get getPhoneCaseType()
    {
        return this.caseType;
    }
}

class PhoneSimCard{
    simIssurer: string;

    private phoneCase;
    constructor(simIssurer: string, caseType: string, life: number){
        this.simIssurer=simIssurer;
        this.phoneCase = new PhoneCase(caseType,life);
    };

    public get getPhoneCase()
    {
        return this.phoneCase;
    }
}

const phoneSimCard= new PhoneSimCard("bharti","metal",100);

console.log(phoneSimCard.getPhoneCase());
