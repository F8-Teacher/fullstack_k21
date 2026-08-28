// import getHome, { a, b as _b } from "./modules/home.js";
// getHome();
// console.log(a);
// console.log(_b);

// import * as home from "./modules/home.js";

// home.default();

// import { add } from "./products/add.js";
// import { update } from "./products/update.js";
// import { listing } from "./products/listing.js";
// import { remove } from "./products/remove.js";
import { add, update, listing, remove } from "./products/index.js";

add();
update();
listing();
remove();

