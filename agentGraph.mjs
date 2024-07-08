
let hello = `hello from agentGraph.mjs at \n ${Date()}`
console.log(`agentGraph.mjs import at\n${Date()}`);

class agentGraph{
    constructor(info='this is an observable subject'){
        this.created = Date();
        this.id = crypto.randomUUID()
        this.info = info
        //this.subject = subject;
        //this.verb = verb;
        //this.object = object;
        this.observers = [];
    }

    subscribe(fun) {
        this.observers.push(fun);
    }

    notify(data) {
        this.observers.forEach(
            observer => observer.update(data)
        );
    }
}

export {
    agentGraph
}