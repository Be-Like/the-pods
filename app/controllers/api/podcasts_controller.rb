class Api::PodcastsController < ApplicationController
  before_action :set_podcast, only: %i(show)

  def index
    render json: Podcast.all
  end

  def show
    render json: @podcast
  end

  private def set_podcast
    @podcast = Podcast.find(params[:id])
  end
end
