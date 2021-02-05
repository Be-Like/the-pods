class Api::EpisodesController < ApplicationController
  def index
    render json: Episode.where(podcast_id: params[:podcast_id])
  end
end
