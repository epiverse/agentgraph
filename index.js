console.log(`agentgraph/index.js loaded at\n${Date()}`);

(async function(){
    AG = await import(location.href+'agentGraph.mjs');
    ag = new AG.agentGraph
    // await import(`https://epiverse.github.io/agentgraph/agentgraph.css`)
})();