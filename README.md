# CribbageBot
A website so that my family can play cribbage on their own and I can learn to work with ASP.NET Core/React and other delightful technologies.


## Rules
As per [Cribbage-Corner](http://cribbagecorner.com/cribbage-rules) and [Bicycle](https://www.bicyclecards.com/how-to-play/cribbage/);
* Play proceeds in a series of hands, with who is dealer alternating between hands. Although considering we're working with a virtual deck of cards, that's really just who gets the crib and any points for nobs.
* Within each hand
	* Each player gets dealt 6 cards to start, then discards two of those hands to the dealer's crib.
	* The dealer turns over the top card there, and if it's a jack, gets 2 points immediately. 
	* The play phase begins
		* Each player, starting with the non-dealer, lays down one of their cards and announces the current total, starting from 0.
		* If a player cannot lay down a card without sending the total above 31, they say "Go" and give the opponent 1 point. The opponent must then lay down any cards they can, without passing 31. If they can get exactly 31, they get 2 points.
		* Play then proceeds, resetting the total to 0. 
		* If at any point the total is equal to 15, or the most recently played cards form a pair/run, the player who went last gets the appropriate points.
	* Following the play phase, players score up their hands, starting with the non-dealer; 2 points for 15s and each pair (this means 3 of a kind is 6 points, and 4 is 12), 1 point per card for runs and flushes, and 1 point for having the jack of the same suit as the turn-up card.
		* This can include the turn-up card, giving you a 5-card run or another card to make 15s with.
* Play then proceeds with a new hand by the new dealer.
* The game is over once one player reaches or passes 121 points. If one player wins when their opponent has not yet reached the 91 point mark, they are said to have "skunked" the loser.

## Implementation
TBH I'm probably going to crib heavily from previous work like [jthurst3](https://github.com/jthurst3/cribbage), if only for the scoring and design of the gameplay loop.

