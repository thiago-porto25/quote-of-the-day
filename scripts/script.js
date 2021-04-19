const quoteGenerator = (function(){
  const _quotes = [
    'Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.',
    'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    'Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.',
    'Challenge yourself with something you know you could never do, and what you\'ll find is that you can overcome anything.',
    'All our dreams can come true, if we have the courage to pursue them.',
    'Always borrow money from a pessimist. He won\'t expect it back.',
    'If you cannot do great things, do small things in a great way.',
    'If opportunity doesn’t knock, build a door.',
    'You make a living by what you get; you make a life by what you give.',
    'The future cannot be predicted, but futures can be invented.',
    'If not us, who? If not now, when?',
    'There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.',
    'At the end of the game, the king and the pawn go back in the same box.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'An obstacle is often a stepping stone.',
    'Give a man a mask and he will show his true face.',
    'Don\'t fake it till you make it. Fake it till you become it.',
    'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
    'Perfection is not attainable, but if we chase perfection we can catch excellence.',
    'Some cause happiness wherever they go; others, whenever they go.',
    'Many of life’s failures are experienced by people who did not realize how close they were to success when they gave up.',
    'If you steal from one author, it’s plagiarism; if you steal from many, it’s research.',
    'A mind is like a parachute. It doesn’t work if it isn’t open.',
    'Hatred paralyzes life; love releases it. Hatred confuses life; love harmonizes it. Hatred darkens life; love illuminates it.',
    'Everything in moderation, including moderation.',
    'Patience is something you admire in the driver behind you, but not in one ahead.',
    'Management is doing things right; leadership is doing the right things.',
    'The power of the people is much stronger than the people in power.',
    'The only person you are destined to become is the person you decide to be.',
    'Wise men speak because they have something to say; fools because they have to say something.',
    'Remember that happiness is a way of travel, not a destination.'
  ]

  const _quotePara = document.querySelector('#quoteContainer p')
  const _newQuoteBtn = document.querySelector('#quoteContainer button')

  const _randomQuote = () => {
    const _randomIndex = Math.round(Math.random() * 31)
    return _quotes[_randomIndex]
  }

  const renderNewQuote = () => {
    const newQuote = _randomQuote()
    _quotePara.textContent = newQuote
  }

  _newQuoteBtn.addEventListener('click', renderNewQuote)

  renderNewQuote()

  return {renderNewQuote}

})()