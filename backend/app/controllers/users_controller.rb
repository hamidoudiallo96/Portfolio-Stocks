class UsersController < ApplicationController
  before_action :set_users, only: [:show, :update]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      user = @user
      token = JWT.encode({ user_id: user.id }, ENV["JWT_SECRET"], "HS256")
      render json: { user: user, token: token }
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  def update
    @user.update(user_params)
    render json: @user
  end

  private

  def set_users
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:name, :email, :password, :balance)
  end
end
