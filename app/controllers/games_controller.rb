class GamesController < ApplicationController
  def index
  end

  def merdeaf
    @alphabets = Alphabet.all
    respond_to do |format|
      format.html { render :merdeaf }
      format.json { render json: @alphabets }
    end
  end

  def wordsearch
    @alphabets = Alphabet.all
    respond_to do |format|
      format.html { render :wordsearch }
      format.json { render json: @alphabets }
    end
  end

  def sudoku
    @numbers = Number.all
    respond_to do |format|
      format.html { render :sudoku }
      format.json { render json: @numbers }
    end
  end

end