export const freqCounter = (data) => {

    const freqCount = {};
    for(let item of data){
        if(item.language !== null){
            freqCount[item.language] = (freqCount[item.language] || 0) + 1;
        }
    }
    const langs = Object.keys(freqCount).slice(0, 5);
    const freq = Object.values(freqCount).slice(0, 5);

    return {langs, freq}
}