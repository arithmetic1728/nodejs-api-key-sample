async function main() { 
    const language = require('@google-cloud/language'); 

    // either pass {apiKey: 'api key value'} or set GOOGLE_API_KEY env var to the key value.
    const client = new language.LanguageServiceClient();
    
    const text = 'Hello, World'; 
    const document = { type: 'PLAIN_TEXT', content: text, }; 
    const analyzeSentimentRequest = { document: document, encodingType: 'UTF8', };
    try { 
        const [response] = await client.analyzeSentiment(analyzeSentimentRequest); 
        const sentiment = response.documentSentiment; 
        console.log(`Text: ${text}`); 
        console.log(`Sentiment score: ${sentiment.score}`); 
        console.log(`Sentiment magnitude: ${sentiment.magnitude}`); 
    } catch (err) { 
        console.log(err) 
    } 
} 

main()