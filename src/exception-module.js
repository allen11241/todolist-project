const ExceptionModule = (function() {

const isEmpty = (input) => {
    return input === null || input.match(/^ *$/) !== null;
}

return {
    isEmpty
}

})();

export {ExceptionModule}