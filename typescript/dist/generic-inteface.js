"use strict";
/**
 *  In the generic series, we also have a generic interface, that let's you have a placeholder in an interface.
 */
function fetch(url) {
    return { data: null, error: null };
}
let result = fetch("url");
let result2 = fetch("url");
result.data.name;
result2.data.username;
