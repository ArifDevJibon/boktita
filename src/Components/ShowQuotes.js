import React from 'react';

        // Quotes
        const quotes = [
            ['The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', 'Helen Keller'],
            ['Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.', 'Oscar Wilde'],
            ['It is during our darkest moments that we must focus to see the light.', 'Aristotle'],
            ['Try to be a rainbow in someone\'s cloud.', 'Maya Angelou'],
            ['Find a place inside where there\'s joy, and the joy will burn out the pain.', 'Joseph Campbell'],
            ['One of the most beautiful qualities of true friendship is to understand and to be understood.', 'Lucius Annaeus Seneca'],
            ['Where there is love there is life.', 'Mahatma Gandhi'],
            ['Do not go where the path may lead, go instead where there is no path and leave a trail.', 'Ralph Waldo Emerson'],
            ['Blessed are the hearts that can bend; they shall never be broken.', 'Albert Camus'],
            ['In three words I can sum up everything I\'ve learned about life: it goes on.', 'Robert Frost'],
            ['Change your thoughts and you change your world.', 'Norman Vincent Peale'],
            ['Believe you can and you\'re halfway there.', 'Theodore Roosevelt'],
            ['Everything has beauty, but not everyone sees it.', 'Confucius'],
            ['Life isn\'t about finding yourself.Life is about creating yourself.', 'George Bernard Shaw'],
            ['Life is not a problem to be solved, but a reality to be experienced.', 'Soren Kierkegaard'],
            ['Friends show their love in times of trouble, not in happiness.', 'Euripides'],
            ['We love life, not because we are used to living but because we are used to loving.', 'Friedrich Nietzsche'],
            ['Problems are not stop signs, they are guidelines.', 'Robert H. Schuller'],
            ['Wise men speak because they have something to say; Fools because they have to say something.', 'Plato'],
            ['The secret of getting ahead is getting started.', 'Mark Twain'],

        ]

        const RendomQuoteGenarate = () => {
            const rendomNum = Math.floor(Math.random() * quotes.length);
            const quoteText = quotes[rendomNum][0];
            const quoteAuthor = quotes[rendomNum][1];
            return quoteText;
        }

        
        console.log(quotes.length)
        const ShowQuotes = () => {
            return (
                <div>
                    <RendomQuoteGenarate />
                </div>
            )
        }





export default ShowQuotes;