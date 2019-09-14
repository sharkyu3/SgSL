class MerdeafScoresController < ApplicationController
  before_action :set_merdeaf_score, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /merdeaf_scores
  # GET /merdeaf_scores.json
  def index
    @merdeaf_scores = MerdeafScore.order("score DESC").limit(15)

    @latest_scores = MerdeafScore.last
  end

  # GET /merdeaf_scores/1
  # GET /merdeaf_scores/1.json
  def show
  end

  # GET /merdeaf_scores/new
  def new
    @merdeaf_score = MerdeafScore.new
  end

  # GET /merdeaf_scores/1/edit
  def edit
  end

  # POST /merdeaf_scores
  # POST /merdeaf_scores.json
  def create
    @merdeaf_score = MerdeafScore.new(merdeaf_score_params)

    respond_to do |format|
      if @merdeaf_score.save
        format.html { redirect_to @merdeaf_score, notice: 'Merdeaf score was successfully created.' }
        format.json { render :show, status: :created, location: @merdeaf_score }
      else
        format.html { render :new }
        format.json { render json: @merdeaf_score.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /merdeaf_scores/1
  # PATCH/PUT /merdeaf_scores/1.json
  def update
    respond_to do |format|
      if @merdeaf_score.update(merdeaf_score_params)
        format.html { redirect_to @merdeaf_score, notice: 'Merdeaf score was successfully updated.' }
        format.json { render :show, status: :ok, location: @merdeaf_score }
      else
        format.html { render :edit }
        format.json { render json: @merdeaf_score.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /merdeaf_scores/1
  # DELETE /merdeaf_scores/1.json
  def destroy
    @merdeaf_score.destroy
    respond_to do |format|
      format.html { redirect_to merdeaf_scores_url, notice: 'Merdeaf score was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_merdeaf_score
      @merdeaf_score = MerdeafScore.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def merdeaf_score_params
      params.require(:merdeaf_score).permit(:name, :score)
    end
end