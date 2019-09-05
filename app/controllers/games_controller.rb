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
end