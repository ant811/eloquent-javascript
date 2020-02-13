# A Modular Robot

These are the bindings that the project from Chapter 7 creates:

* roads
* buildGraph
* roadGraph
* VillageState
* runRobot
* randomPick
* randomRobot
* mailRoute
* routeRobot
* findRoute
* goalOrientedRobot

If you were to write that project as a modular program, what modules would you create? Which module would depend on which other module, and what would their interfaces look like?

Which pieces are likely to be available prewritten on NPM? Would you prefer to use an NPM package or write them yourself?

## Responses
___

### Graph module 

The buildGraph() module accepts an array of streets and returns: 
* a graph data structure.  The group holds destinations as keys mapped to values of other destinations that can be reached by the key destination (I.e., from being the key, to being each value), and
* an array of each destination

This module contains addEdge() as it is pertinent to building the graph.

Perhaps NPM has the functionality to produce a graph data structure? 

The general purpose is the produce possible routes and abstract all locations

### State module 

This module:
* Defines the class VillageState, 
* Contains random property on VillageState class, and 
* Contains randomPick function 

The general purpose is to generate state for robots. 

### Robots module

This module contains functionality for:
* routeRobot
* goalOrientedRobot, and
* dependent functions (E.g., findRoute)

This module would depend on the array of routes returned from the graph module.  

The general purpose is to create instances of targeted robots.  
