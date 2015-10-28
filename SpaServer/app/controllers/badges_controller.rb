class BadgesController < ApplicationController
  include Findable
  before_action :find_badge, only: [:update]
  before_action :set_student, only: [:create, :update, :index]

  def index
    render json: @student.badges
  end


  def create
    @badge = @student.badges.new(badge_params)
    if @badge.save
      render json: @badge, status: :created, location: @badge
    else
      error
    end
  end

  def update
    @badge = @student.badges.find(params[:id]).update(points: params[:points])
  end

  private

  def find_badge
    @badge = Badge.find(params[:id])
  end

  def badge_params
    params.permit(:student_id, :comment, :points)
  end

  def error
    render json: @badge.errors, status: :unprocessable_entity
  end

end
