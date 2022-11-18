async function main() { 
    const language = require('@google-cloud/language'); 

    const client = new language.LanguageServiceClient({'apiKey': '<FILL IN THE API KEY>'});
    
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