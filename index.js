import define from "./7e634ebe314443f8@174.js";
import {Runtime, Inspector} from "./runtime.js";

const runtime = new Runtime();
const main = runtime.module(define);

// Gắn viewof gallery vào phần tử DOM trong index.html
main.variable(Inspector.into("#observable-gallery")("viewof gallery"));
