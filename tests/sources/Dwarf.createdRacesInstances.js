"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Races_1 = require("../../src/Races");
const result = () => {
    const r = [];
    const d1 = new Races_1.Dwarf('', 2);
    r.push(Races_1.Dwarf.createdRacesInstances());
    const d2 = new Races_1.Dwarf('', 2);
    r.push(Races_1.Dwarf.createdRacesInstances());
    const d3 = new Races_1.Dwarf('', 2);
    r.push(Races_1.Dwarf.createdRacesInstances());
    return r;
};
