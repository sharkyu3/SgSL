require "application_system_test_case"

class MerdeafScoresTest < ApplicationSystemTestCase
  setup do
    @merdeaf_score = merdeaf_scores(:one)
  end

  test "visiting the index" do
    visit merdeaf_scores_url
    assert_selector "h1", text: "Merdeaf Scores"
  end

  test "creating a Merdeaf score" do
    visit merdeaf_scores_url
    click_on "New Merdeaf Score"

    fill_in "Name", with: @merdeaf_score.name
    fill_in "Score", with: @merdeaf_score.score
    click_on "Create Merdeaf score"

    assert_text "Merdeaf score was successfully created"
    click_on "Back"
  end

  test "updating a Merdeaf score" do
    visit merdeaf_scores_url
    click_on "Edit", match: :first

    fill_in "Name", with: @merdeaf_score.name
    fill_in "Score", with: @merdeaf_score.score
    click_on "Update Merdeaf score"

    assert_text "Merdeaf score was successfully updated"
    click_on "Back"
  end

  test "destroying a Merdeaf score" do
    visit merdeaf_scores_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Merdeaf score was successfully destroyed"
  end
end
