
let hello = `hello from agentGraph.mjs at \n ${Date()}`
console.log(`agentGraph.mjs import at\n${Date()}`);

class agentGraph{
    constructor(subject,verb,object){
        this.created = Date();
        this.subject = subject;
        this.verb = verb;
        this.object = object;
    }
    // 
    
}

export {
    agentGraph
}