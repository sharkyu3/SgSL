require 'test_helper'

class MerdeafScoresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @merdeaf_score = merdeaf_scores(:one)
  end

  test "should get index" do
    get merdeaf_scores_url
    assert_response :success
  end

  test "should get new" do
    get new_merdeaf_score_url
    assert_response :success
  end

  test "should create merdeaf_score" do
    assert_difference('MerdeafScore.count') do
      post merdeaf_scores_url, params: { merdeaf_score: { name: @merdeaf_score.name, score: @merdeaf_score.score } }
    end

    assert_redirected_to merdeaf_score_url(MerdeafScore.last)
  end

  test "should show merdeaf_score" do
    get merdeaf_score_url(@merdeaf_score)
    assert_response :success
  end

  test "should get edit" do
    get edit_merdeaf_score_url(@merdeaf_score)
    assert_response :success
  end

  test "should update merdeaf_score" do
    patch merdeaf_score_url(@merdeaf_score), params: { merdeaf_score: { name: @merdeaf_score.name, score: @merdeaf_score.score } }
    assert_redirected_to merdeaf_score_url(@merdeaf_score)
  end

  test "should destroy merdeaf_score" do
    assert_difference('MerdeafScore.count', -1) do
      delete merdeaf_score_url(@merdeaf_score)
    end

    assert_redirected_to merdeaf_scores_url
  end
end
