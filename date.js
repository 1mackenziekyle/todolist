exports.getDate = () => {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long', };
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = () => {
    let today = new Date();
    let options = {
        weekday: 'long' };
    return today.toLocaleDateString("en-US", options);
}

exports.getDateNumber = () => {
    let today = new Date();
    let options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric' };
    return today.toLocaleDateString("en-US", options);
}