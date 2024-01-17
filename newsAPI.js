const fetchnews = async () => 
{
    console.log("fetching news...  ");

    var url = 'https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=cd74eac1780c49ef8dff487b318e1eb1';

    var req = new Request(url);
       
    let a = await fetch(req)
    let response = a.json()
    console.log(response)

    
}