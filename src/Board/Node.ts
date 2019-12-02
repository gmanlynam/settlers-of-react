import Connector from "./Connector";

export default class Node {
    siblings: Node[];
    connectors: Connector[]
    name: string;
    constructor() {
        this.siblings = [];
        this.connectors = [];
        this.name = "";
    }
    setSiblings(siblings: Node[]) {
        this.siblings = siblings;
    }
    setConnectors(connectors: Connector[]) {
        this.connectors = connectors;
    }
}