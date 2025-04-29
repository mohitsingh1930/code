"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const pastDate = new Date(2024, 5, 1).toUTCString();
console.log((0, date_fns_1.differenceInHours)(new Date().toUTCString(), pastDate));
//=> Problematic output. Both arguments are string
//# sourceMappingURL=test.js.map