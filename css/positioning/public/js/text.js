
var flexOne = document.querySelectorAll('#flex-1 > *');
var flexTwo = document.querySelectorAll('#flex-2 > *');

const keyWords = [
    'Component',
    'Doing things in react because that is a framework people are interested in',
    'DOM',
    'API',
    'React',
    'server',
    'Git',
    'Ajax',
    'JSON'
];
    

const APP_CONSTANTS = {
    NO_KEYWORD: '[no keywords]'
};

        


function setText(element, text) {
    const span     = document.createElement('span');
    span.innerHTML = text;
    element.appendChild(span);
}


const ref           = { current: 0 };
const forEachAppend = (element) => {
    const text  = keyWords[ref.current] ?? APP_CONSTANTS.NO_KEYWORD;
    ref.current++;
    setText(element, text);
};

flexOne.forEach(forEachAppend);
flexTwo.forEach(forEachAppend);