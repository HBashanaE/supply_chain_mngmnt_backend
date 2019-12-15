const fetchData = (a) => {
    setTimeout(() => {
        a('Done');
    });
}

setTimeout(() => {
    console.log('Timer is done');
    fetchData(text => {
        console.log(text);
    });
});