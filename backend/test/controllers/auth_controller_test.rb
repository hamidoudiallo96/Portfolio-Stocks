require 'test_helper'

class AuthControllerTest < ActionDispatch::IntegrationTest
  test "should get login" do
    get auth_login_url
    assert_response :success
  end

  test "should get persist" do
    get auth_persist_url
    assert_response :success
  end

end
