### Testing task B code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  attr_reader :card1, :card2

  def initialize(card1, card2)
    @card1 = card1
    @card2 = card2
  end


  def checkForAce(card)
    if card.value == 1
      return true
    else
      return false
    end
  end

  def highest_card(card1, card2)
    if card1.value > card2.value
      return card1
    else
      card2
    end
  end

  def self.cards_total(cards)
    total = 0
    for card in cards
      total += card.value
    end
    return "You have a total of " + "#{total}"
  end

end
