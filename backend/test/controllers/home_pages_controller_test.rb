require 'test_helper'

class HomePagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @home_page = home_pages(:one)
  end

  test "should get index" do
    get home_pages_url, as: :json
    assert_response :success
  end

  test "should create home_page" do
    assert_difference('HomePage.count') do
      post home_pages_url, params: { home_page: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show home_page" do
    get home_page_url(@home_page), as: :json
    assert_response :success
  end

  test "should update home_page" do
    patch home_page_url(@home_page), params: { home_page: {  } }, as: :json
    assert_response 200
  end

  test "should destroy home_page" do
    assert_difference('HomePage.count', -1) do
      delete home_page_url(@home_page), as: :json
    end

    assert_response 204
  end
end
