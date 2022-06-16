import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
        return ["Larry Page", "Bill Gates", "Mark Zuckerberg", "Ken Thompson", "Linus Torvalds"];
    }
}
