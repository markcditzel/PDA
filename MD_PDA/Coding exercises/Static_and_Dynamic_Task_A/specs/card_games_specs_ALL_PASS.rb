require('minitest/autorun')
require('minitest/rg')
require_relative( '../card.rb')
require_relative( '../testing_task_2.rb')

class TestCard < MiniTest::Test

  def setup()
    @card1 = Card.new("spades", 1)
    @card2 = Card.new("hearts", 10)
    @card3 = Card.new("clubs", 1)
    @card4 = Card.new("hearts", 1)

    @cardGame1 = CardGame.new(@card1, @card2)
    @cardGame2 = CardGame.new(@card3, @card4)
  end

  # def test_doesCardHaveValue_FAIL?
  #   assert_equal(2, @card1.value)
  # end

  def test_doesCardHaveValue_PASS?
    assert_equal(1, @card1.value)
  end

  # def test_doesCardHaveSuit_FAIL?
  #   assert_equal("blah", @card1.suit)
  # end

  def test_doesCardHaveSuit_PASS?
    assert_equal("spades", @card1.suit)
  end

  def test_canCheckForNonAce_PASS?
    assert_equal(false, @cardGame1.checkForAce(@card2))
  end

  def test_canCheckForAce_PASS?
    assert_equal(true, @cardGame1.checkForAce(@card1))
  end

  # the highest card method does not account for the situation when the hand has two aces
  # def test_canCheckForHighestCardTwoAces_FAIL!
  #   assert_equal(@card1, @cardGame2.highest_card(@card3, @card4))
  # end

  def test_canCheckForHighestCardTrue_PASS?
    assert_equal(@card2, @cardGame1.highest_card(@card1, @card2))
  end

  # def test_canReturnCardTotal_FAIL
  #   cardsInHand = [@card1, @card2]
  #   assert_equal("You have a total of 12", CardGame.cards_total(cardsInHand))
  # end

  def test_canReturnCardTotal_PASS
    cardsInHand = [@card1, @card2]
    assert_equal("You have a total of 11", CardGame.cards_total(cardsInHand))
  end




end
