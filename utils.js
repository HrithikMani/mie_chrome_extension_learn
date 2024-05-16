export async function getCurrentActiveTab(){
    let queryOptions = {active:true , currentWindow: true}
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab
}