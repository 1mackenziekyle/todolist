exports.getDate = () => {
    const today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long', };
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = () => {
    const today = new Date();
    const options = {
        weekday: 'long' };
    return today.toLocaleDateString("en-US", options);
}

exports.getDateNumber = () => {
    const today = new Date();
    const options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric' };
    return today.toLocaleDateString("en-US", options);
}