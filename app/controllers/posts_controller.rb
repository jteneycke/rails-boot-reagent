class PostsController < ApplicationController

  def index
    @posts = Post.all
    render json: @posts
  end

  def create
    @post = Post.new(params[:post])
    if @post.save
      render nothing: true
    end
  end
end 
