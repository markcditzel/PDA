### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) # this should be in camelCase i.e, checkForAce(card)
    # should be == 1
    if card.value = 1
      return true
    else
      return false
    end
  end

   dif highest_card(card1 card2) #- should be def not dif;  and a comma between the card1/2 parameters
  if card1.value > card2.value
    return card.name # .name is not a property of a card and a no card number is indicated (e.g. card1)
  else
    card2
  end
end
# end - an unnecessary end

def self.cards_total(cards)
  # the total variable has not been assigned a value (should be = 0)
  total
  for card in cards
    total += card.value
    #need to have the return outside of the loop
    return "You have a total of" + total # need to use string interpolation ${total}
  end
end

# need to end the class, so add in an end
end

```
