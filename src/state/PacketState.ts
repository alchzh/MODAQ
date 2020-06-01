import { observable } from 'mobx';
import { IBuzzMarker } from './IBuzzMarker';

export class PacketState {
    @observable
    public tossups: Tossup[];

    @observable
    public bonsues: Bonus[];

    constructor() {
        this.tossups = [];
        this.bonsues = [];
    }
}

export interface IQuestion {
    question: string;
    answer: string;
}

export interface IBonusPart extends IQuestion {
    correct?: boolean | undefined | null;
}

export class Tossup implements IQuestion {
    public question: string;
    public answer: string;

    @observable
    public buzzes: IBuzzMarker[];

    constructor(question: string, answer: string) {
        this.question = question;
        this.answer = answer;
        this.buzzes = [];
    }
}

export class Bonus {
    public leadin: string;

    @observable
    public parts: IBonusPart[];
    // Need team

    constructor(leadin: string, parts: IBonusPart[]) {
        this.leadin = leadin;
        this.parts = parts;
    }
}