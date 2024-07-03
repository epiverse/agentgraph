console.log(`agentgraph/index.js loaded at\n${Date()}`);



(async function(){
    const AG = await import(location.href+'agentGraph.mjs');
    ag = new AG.agentGraph
    //debugger
})()