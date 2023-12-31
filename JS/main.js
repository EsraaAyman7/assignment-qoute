var quotes = [
    {
        Quote:'"Do not take life too seriously. You will not get out alive."',
        author:"Elbert Hubbard",
    },
    {
        Quote:'"You miss 100% of the shots you don\'t take."',
        author:"Wayne Gretzy",
    },
    {
        Quote:'"The best revenge is massive success."',
        author:"Frank Sinatra",
    },
    {
        Quote:'"It\'s not what happens to you, but how you react to it that matters."',
        author:'Epictetus',
    },
    {
        Quote:'"Resentment is like drinking poison and waiting for your enemies to die."',
        author:"Nelson Mandela",
    }
   ];
function generateQuote(){
 
   var daysQuotes = Math.floor(Math.random()*quotes.length +1)
    document.getElementById('quoteOutput').innerHTML=quotes[daysQuotes].Quote;
    document.getElementById('authorOutput').innerHTML=quotes[daysQuotes].author;
}



